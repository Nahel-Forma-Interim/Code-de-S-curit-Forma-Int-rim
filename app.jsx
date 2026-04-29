const { useState, useEffect, useRef } = React;

const THRESHOLD = 18;

const EXAMPLE_Q = {
  id: "example", type: "single", category: "EXEMPLE", icon: "school",
  fr: { question: "Sur le chantier, qui est responsable de ta sécurité ?",
    options: ["Seulement le chef", "Seulement toi", "Toi ET toute l'équipe", "Personne"] },
  pt: { question: "No estaleiro, quem é responsável pela tua segurança?",
    options: ["Só o chefe", "Só tu", "Tu E toda a equipa", "Ninguém"] },
  ar: { question: "في الورشة، من المسؤول عن سلامتك؟",
    options: ["الرئيس فقط", "أنت فقط", "أنت وكل الفريق", "لا أحد"] },
  correct: [2]
};

function SpeakerIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10v4h4l5 4V6l-5 4z"/><path d="M17 9a4 4 0 010 6"/>
  </svg>;
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>;
}
function LogoMark() {
  return <img src="logo.png" alt="logo" />;
}

function speak(text, lang) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "fr" ? "fr-FR" : lang === "pt" ? "pt-PT" : "ar-SA";
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}
function stopSpeak() { try { window.speechSynthesis?.cancel(); } catch (e) {} }

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort(), sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

function fmtDate(d) {
  if (!d) return "";
  const pad = n => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function App() {
  const I18N = window.I18N;
  const [stage, setStage] = useState("lang");
  const [lang, setLang] = useState("fr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selection, setSelection] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [signatureData, setSignatureData] = useState(null);
  const [sendStatus, setSendStatus] = useState("idle"); // idle | sending | ok | err
  const [adminOpen, setAdminOpen] = useState(false);
  const [pdfData, setPdfData] = useState(null); // { blob, filename }

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => stopSpeak, []);

  const t = I18N[lang];
  const questions = window.QUESTIONS;

  function pickLang(l) { setLang(l); setStage("identity"); }

  function submitIdentity() {
    if (!firstName.trim() || !lastName.trim()) return;
    setStage("intro");
  }

  function toggleOpt(i, isMulti) {
    if (isMulti) setSelection(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
    else setSelection([i]);
  }

  function askValidate() {
    stopSpeak();
    if (selection.length === 0) return;
    setShowConfirm(true);
  }

  function confirmValidate() {
    setShowConfirm(false);
    if (stage === "example") {
      setSelection([]);
      setStartTime(new Date());
      setStage("test");
      setCurrentIdx(0);
      setAnswers({});
      return;
    }
    const q = questions[currentIdx];
    const newAnswers = { ...answers, [q.id]: selection };
    setAnswers(newAnswers);
    setSelection([]);
    if (currentIdx + 1 >= questions.length) {
      setEndTime(new Date());
      setStage("signature");
    } else setCurrentIdx(currentIdx + 1);
  }

  function compute(ans = answers) {
    const details = questions.map(q => {
      const given = ans[q.id] || [];
      return { q, given, isRight: arraysEqual(given, q.correct) };
    });
    return { details, score: details.filter(d => d.isRight).length };
  }

  function hardReset() {
    stopSpeak();
    setStage("lang"); setFirstName(""); setLastName("");
    setCurrentIdx(0); setAnswers({}); setSelection([]);
    setStartTime(null); setEndTime(null);
    setSignatureData(null); setSendStatus("idle");
    setPdfData(null);
  }

  async function submitSignature(dataUrl) {
    setSignatureData(dataUrl);
    setSendStatus("sending");
    const { details, score } = compute();
    const payload = {
      candidate: { firstName, lastName },
      language: lang,
      startedAt: startTime?.toISOString(),
      endedAt: endTime?.toISOString() || new Date().toISOString(),
      durationSec: startTime ? Math.round(((endTime||new Date()) - startTime)/1000) : null,
      score, total: questions.length, threshold: THRESHOLD,
      validated: score >= THRESHOLD,
      signature: dataUrl,
      answers: details.map(({ q, given, isRight }) => ({
        id: q.id,
        question: q.fr.question,
        category: q.category,
        type: q.type,
        given,
        givenLabels: given.map(x => q[lang].options[x]),
        correct: q.correct,
        correctLabels: q.correct.map(x => q[lang].options[x]),
        isRight
      }))
    };

    // 1) Génération du certificat PDF
    let attachment = null;
    try {
      if (window.buildResultPdf) {
        const { blob, filename } = await window.buildResultPdf(payload);
        attachment = { blob, filename };
        setPdfData({ blob, filename });
      }
    } catch (e) {
      console.warn("PDF build failed", e);
    }

    // 2) Envoi à Web3Forms avec le PDF en pièce jointe
    try {
      await window.sendResults(payload, attachment);
      setSendStatus("ok");
    } catch (e) {
      console.warn("Send failed", e);
      setSendStatus("err");
    }
    setStage("result");
  }

  function downloadPdf() {
    if (!pdfData) return;
    const url = URL.createObjectURL(pdfData.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = pdfData.filename || "certificat.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="app">
      <LogoCorner onLongPress={() => setAdminOpen(true)} />

      {stage === "lang" && <LangScreen onPick={pickLang} />}
      {stage === "identity" && <IdentityScreen t={t} firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} onSubmit={submitIdentity} onBack={() => setStage("lang")} lang={lang} />}
      {stage === "intro" && <IntroScreen t={t} firstName={firstName} onNext={() => { setSelection([]); setStage("example"); }} />}
      {stage === "example" && (
        <QuestionScreen t={t} lang={lang} q={EXAMPLE_Q} idx={0} total={0} selection={selection} toggleOpt={toggleOpt} onValidate={askValidate} isExample />
      )}
      {stage === "test" && (
        <QuestionScreen t={t} lang={lang} q={questions[currentIdx]} idx={currentIdx} total={questions.length} selection={selection} toggleOpt={toggleOpt} onValidate={askValidate} />
      )}
      {stage === "signature" && (
        <SignatureScreen t={t} firstName={firstName} lastName={lastName} onSubmit={submitSignature} sendStatus={sendStatus} />
      )}
      {stage === "result" && (
        <ResultScreen t={t} results={compute()} firstName={firstName} lastName={lastName} startTime={startTime} endTime={endTime} sendStatus={sendStatus} onDetail={() => setStage("detail")} onPrint={downloadPdf} />
      )}
      {stage === "detail" && (
        <DetailScreen t={t} lang={lang} results={compute()} firstName={firstName} lastName={lastName} startTime={startTime} signatureData={signatureData} onBack={() => setStage("result")} onPrint={downloadPdf} />
      )}
      {showConfirm && <ConfirmModal t={t} onCancel={() => setShowConfirm(false)} onConfirm={confirmValidate} />}
      {adminOpen && <AdminModal t={t} onClose={() => setAdminOpen(false)} onNewTest={() => { setAdminOpen(false); hardReset(); }} />}
    </div>
  );
}

function LogoCorner({ onLongPress }) {
  // Hidden long-press target in top-right corner for admin access
  const tRef = useRef(null);
  function start() {
    tRef.current = setTimeout(onLongPress, 2000);
  }
  function cancel() { if (tRef.current) clearTimeout(tRef.current); }
  return (
    <div className="admin-hotspot" onMouseDown={start} onMouseUp={cancel} onMouseLeave={cancel}
      onTouchStart={start} onTouchEnd={cancel} onTouchCancel={cancel}
      aria-label="admin" title="" />
  );
}

function BrandHeader({ title, sub }) {
  return (
    <div className="brand">
      <div className="brand-logo"><LogoMark /></div>
      <div className="brand-name"><span className="brand-name-forma">FORMA</span> <span className="brand-name-interim">INTERIM</span></div>
      <h1 className="brand-title">{title}</h1>
      <p className="brand-sub">{sub}</p>
    </div>
  );
}

function LangScreen({ onPick }) {
  const I18N = window.I18N;
  return (
    <div className="screen">
      <BrandHeader title="Test de Sécurité" sub="Choisis ta langue · Escolhe a tua língua · اختر لغتك" />
      <div className="card">
        <div className="lang-list">
          {Object.values(I18N).map(l => (
            <button key={l.code} className="lang-btn" onClick={() => onPick(l.code)}>
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-name">{l.name}</span>
              <span className="lang-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function IdentityScreen({ t, firstName, lastName, setFirstName, setLastName, onSubmit, onBack, lang }) {
  const I18N = window.I18N;
  const canGo = firstName.trim() && lastName.trim();
  return (
    <div className="screen">
      <BrandHeader title={t.appTitle} sub={t.appSub} />
      <div className="card">
        <button className="lang-pill" onClick={onBack}>← {t.backLang} : {I18N[lang].flag} {I18N[lang].name}</button>
        <h2 className="h2">{t.identity}</h2>
        <div className="field">
          <label className="label">{t.firstName}</label>
          <input className="input" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder={t.firstNamePh} autoComplete="off" />
        </div>
        <div className="field">
          <label className="label">{t.lastName}</label>
          <input className="input" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder={t.lastNamePh} autoComplete="off" />
        </div>
        <button className="btn btn-primary" disabled={!canGo} onClick={onSubmit}>
          {t.continue} <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

function IntroScreen({ t, firstName, onNext }) {
  return (
    <div className="screen">
      <BrandHeader title={t.introTitle} sub={`${firstName} · ${t.appSub}`} />
      <div className="card">
        <ul className="intro-list">
          {t.introLines.map((l, i) => (
            <li key={i}>
              <span className="intro-list-ic">{i + 1}</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
        <button className="btn btn-accent" onClick={onNext}>
          {t.iGotIt} <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

function QuestionScreen({ t, lang, q, idx, total, selection, toggleOpt, onValidate, isExample }) {
  const isMulti = q.type === "multi";
  const can = selection.length > 0;
  const qText = q[lang].question;
  const picto = q.picto || null;
  const photo = (window.PHOTOS && window.PHOTOS[q.icon]) || null;
  const illusHtml = (window.ILLUS && window.ILLUS[q.icon]) || window.ILLUS.warning;

  function playAudio() {
    speak([qText, ...q[lang].options].join(". "), lang);
  }

  const pct = total > 0 ? Math.round((idx / total) * 100) : 0;

  return (
    <div className="screen" key={q.id}>
      {!isExample && (
        <div className="progress">
          <div className="progress-top">
            <span>{t.progress}</span>
            <span className="progress-counter">{idx + 1} / {total}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: pct + "%" }} />
          </div>
        </div>
      )}
      {isExample && (
        <div className="tuto-banner">
          <span className="tuto-ic">★</span>
          <div>
            <strong>{t.exampleTitle}</strong>
            <small>{t.exampleSub}</small>
          </div>
        </div>
      )}

      <div className="card">
        <div className={"q-photo" + (picto ? " q-photo-picto" : "")}>
          {picto ? (
            <img src={picto} alt={q.category} loading="eager" className="q-picto-img"
              onError={(e) => { e.target.style.display="none"; e.target.parentNode.classList.add("q-photo-fallback"); e.target.parentNode.insertAdjacentHTML("beforeend", illusHtml); }} />
          ) : photo ? (
            <>
              <img src={photo.src} alt={photo.alt} loading="eager"
                onError={(e) => { e.target.style.display="none"; e.target.parentNode.classList.add("q-photo-fallback"); e.target.parentNode.insertAdjacentHTML("beforeend", illusHtml); }} />
              <div className="q-photo-overlay" />
            </>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: illusHtml }} />
          )}
          <div className="q-category">{q.category}</div>
          <button className="audio-btn" onClick={playAudio} aria-label="audio">
            <SpeakerIcon />
          </button>
        </div>

        <h2 className="q-text">{qText}</h2>

        {isMulti ? (
          <div className="q-hint multi">
            <span>☑</span><span>{t.multiLabel}</span>
          </div>
        ) : (
          <div className="q-hint">→ {t.singleHint}</div>
        )}

        {isMulti && selection.length > 0 && (
          <div className="count-chip">
            ✓ {t.youChecked} {selection.length} {selection.length > 1 ? t.answers : t.answer}
          </div>
        )}

        <div className="options">
          {q[lang].options.map((opt, i) => {
            const sel = selection.includes(i);
            return (
              <button key={i} className={`option ${sel ? "selected" : ""}`} onClick={() => toggleOpt(i, isMulti)}>
                <span className={`option-check ${isMulti ? "" : "round"}`}>
                  <span className="option-check-inner">✓</span>
                </span>
                <span className="option-text">{opt}</span>
              </button>
            );
          })}
        </div>

        <button className="btn btn-accent" disabled={!can} onClick={onValidate}>
          {isExample ? t.start : (idx + 1 === total ? t.finalQuestion : t.next)}
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

function ConfirmModal({ t, onCancel, onConfirm }) {
  return (
    <div className="modal-back" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-ic">?</div>
        <h3>{t.confirmTitle}</h3>
        <p>{t.confirmText}</p>
        <div className="btn-row">
          <button className="btn btn-ghost" onClick={onCancel}>{t.cancel}</button>
          <button className="btn btn-accent" onClick={onConfirm}>{t.validate}</button>
        </div>
      </div>
    </div>
  );
}

function SignatureScreen({ t, firstName, lastName, onSubmit, sendStatus }) {
  const canvasRef = useRef(null);
  const [hasDrawn, setHasDrawn] = useState(false);
  const drawingRef = useRef(false);
  const lastRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#0F2B4A";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);

  function pos(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches?.[0] || e.changedTouches?.[0];
    const cx = touch ? touch.clientX : e.clientX;
    const cy = touch ? touch.clientY : e.clientY;
    return { x: cx - rect.left, y: cy - rect.top };
  }
  function onStart(e) {
    e.preventDefault();
    drawingRef.current = true;
    lastRef.current = pos(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(lastRef.current.x, lastRef.current.y);
  }
  function onMove(e) {
    if (!drawingRef.current) return;
    e.preventDefault();
    const p = pos(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastRef.current = p;
    if (!hasDrawn) setHasDrawn(true);
  }
  function onEnd() { drawingRef.current = false; }

  function clear() {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    setHasDrawn(false);
  }

  function submit() {
    if (!hasDrawn) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    onSubmit(dataUrl);
  }

  const sending = sendStatus === "sending";

  return (
    <div className="screen">
      <BrandHeader title={t.signTitle} sub={t.signSub} />
      <div className="card">
        <div className="candidate-info" style={{marginBottom: 16}}>
          <small>{t.candidate}</small>
          <strong>{lastName.toUpperCase()} {firstName}</strong>
        </div>
        <div className="sig-wrap">
          <canvas ref={canvasRef} className="sig-canvas"
            onMouseDown={onStart} onMouseMove={onMove} onMouseUp={onEnd} onMouseLeave={onEnd}
            onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd} onTouchCancel={onEnd} />
          <div className="sig-baseline"><span>✕</span></div>
        </div>
        {!hasDrawn && <div className="q-hint" style={{color: "var(--ko)"}}>⚠ {t.signRequired}</div>}
        <div className="btn-row" style={{marginTop: 14}}>
          <button className="btn btn-ghost" onClick={clear} disabled={sending}>↻ {t.signClear}</button>
          <button className="btn btn-accent" onClick={submit} disabled={!hasDrawn || sending}>
            {sending ? t.sending : t.signSubmit} {!sending && <ArrowIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultScreen({ t, results, firstName, lastName, startTime, endTime, sendStatus, onDetail, onPrint }) {
  const { score } = results;
  const ok = score >= THRESHOLD;
  const total = (window.QUESTIONS && window.QUESTIONS.length) || 25;
  const circ = 2 * Math.PI * 80;
  const offset = circ - (score / total) * circ;
  return (
    <div className="screen">
      <BrandHeader title={t.result} sub={t.threshold.replace("{n}", THRESHOLD)} />
      <div className="card" style={{ textAlign: "center" }}>
        <div className={`result-stamp ${ok ? "result-ok" : "result-ko"}`}>
          {ok ? "✓" : "✕"} {ok ? t.validated : t.refused}
        </div>

        <div className="score-ring">
          <svg viewBox="0 0 180 180">
            <defs>
              <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={ok ? "#22B573" : "#E85D5D"}/>
                <stop offset="1" stopColor={ok ? "#1AAEEE" : "#F5B400"}/>
              </linearGradient>
            </defs>
            <circle cx="90" cy="90" r="80" className="track"/>
            <circle cx="90" cy="90" r="80" className="fill"
              strokeDasharray={circ} strokeDashoffset={offset}/>
          </svg>
          <div className="score-center">
            <div className="score-num">{score}<small>/{total}</small></div>
            <div className="score-pct">{Math.round(score/total*100)}%</div>
          </div>
        </div>

        <p className="result-msg">{ok ? t.validatedMsg : t.refusedMsg}</p>

        <div className="candidate-info">
          <small>{t.candidate}</small>
          <strong>{lastName.toUpperCase()} {firstName}</strong>
          <div style={{fontSize: 12, color: "var(--text-muted)", marginTop: 4}}>
            {fmtDate(endTime || startTime)}
          </div>
        </div>

        <div className={`send-status send-${sendStatus}`}>
          {sendStatus === "ok" && <>✓ {t.sentOk}</>}
          {sendStatus === "err" && <>⚠ {t.sentErr}</>}
          {sendStatus === "sending" && <>⏳ {t.sending}</>}
        </div>

        <div className="result-actions">
          <button className="btn btn-accent" onClick={onDetail}>
            {t.seeDetail} <ArrowIcon />
          </button>
          <button className="btn btn-ghost" onClick={onPrint}>⎙ {t.print}</button>
        </div>
      </div>
    </div>
  );
}

function DetailScreen({ t, lang, results, firstName, lastName, startTime, signatureData, onBack, onPrint }) {
  const { details, score } = results;
  return (
    <div className="screen">
      <div className="back-row no-print">
        <button className="back-btn" onClick={onBack}>← {t.hideDetail}</button>
        <span className="back-score">{score}/{(window.QUESTIONS && window.QUESTIONS.length) || 25}</span>
      </div>
      <div className="card">
        <h2 className="h2">{t.detail}</h2>
        <div className="candidate-info" style={{marginBottom: 16}}>
          <small>{t.candidate} · {t.date}</small>
          <strong>{lastName.toUpperCase()} {firstName}</strong>
          <div style={{fontSize: 12, color: "var(--text-muted)", marginTop: 2}}>
            {fmtDate(startTime)}
          </div>
        </div>
        <div className="details-list">
          {details.map(({ q, given, isRight }, i) => (
            <div key={q.id} className={`detail-row ${isRight ? "right" : "wrong"}`}>
              <div className="detail-head">
                <span className="detail-num">#{String(i + 1).padStart(2, "0")}</span>
                <span className={`detail-badge ${isRight ? "ok" : "ko"}`}>
                  {isRight ? "✓ " + t.right : "✕ " + t.wrong}
                </span>
              </div>
              <div className="detail-q">{q[lang].question}</div>
              <div className="detail-ans">
                <span className="detail-ans-lbl">{t.yourAnswer}</span>
                <span className="detail-ans-val">
                  {given.length ? given.map(x => q[lang].options[x]).join(" · ") : <em>{t.noAnswer}</em>}
                </span>
              </div>
              {!isRight && (
                <>
                  <div className="detail-ans correct">
                    <span className="detail-ans-lbl">{t.correctAnswer}</span>
                    <span className="detail-ans-val">{q.correct.map(x => q[lang].options[x]).join(" · ")}</span>
                  </div>
                  {q.explanation && (
                    <div className="detail-explain">
                      <strong>{t.why}</strong> {q.explanation[lang]}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        {signatureData && (
          <div className="sig-recap">
            <div className="sig-recap-lbl">Signature</div>
            <img src={signatureData} alt="signature" />
          </div>
        )}
        <button className="btn btn-accent no-print" onClick={onPrint} style={{marginTop: 20}}>⎙ {t.print}</button>
      </div>
    </div>
  );
}

function AdminModal({ t, onClose, onNewTest }) {
  const [step, setStep] = useState("pin");  // pin | config
  const [pinInput, setPinInput] = useState("");
  const [err, setErr] = useState("");
  const cfg = window.APP_CONFIG.load();
  const [newPin, setNewPin] = useState(cfg.pin);
  const [savedMsg, setSavedMsg] = useState("");
  const [testMsg, setTestMsg] = useState("");

  function tryEnter() {
    const cur = window.APP_CONFIG.load();
    if (pinInput === cur.pin) { setStep("config"); setErr(""); }
    else setErr(t.adminPinWrong);
  }
  function save() {
    const clean = newPin.replace(/\D/g, "").slice(0, 8);
    const finalPin = clean.length >= 4 ? clean : cfg.pin;
    window.APP_CONFIG.save({ pin: finalPin });
    setSavedMsg(t.adminSaved);
    setTimeout(() => setSavedMsg(""), 2500);
  }
  async function testConn() {
    setTestMsg("…");
    try {
      await window.sendResults({ __ping: true, at: new Date().toISOString() });
      setTestMsg(t.adminTestOk);
    } catch (e) {
      setTestMsg(t.adminTestKo);
    }
    setTimeout(() => setTestMsg(""), 3000);
  }

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal modal-admin" onClick={e => e.stopPropagation()}>
        <h3>{t.adminTitle}</h3>
        {step === "pin" && (
          <>
            <div className="field" style={{marginTop: 14}}>
              <label className="label">{t.adminPinLabel}</label>
              <input className="input" type="password" inputMode="numeric"
                value={pinInput} onChange={e => setPinInput(e.target.value)}
                placeholder={t.adminPinPh} autoFocus
                onKeyDown={e => e.key === "Enter" && tryEnter()} />
              {err && <div className="err-msg">{err}</div>}
            </div>
            <div className="btn-row">
              <button className="btn btn-ghost" onClick={onClose}>{t.adminClose}</button>
              <button className="btn btn-primary" onClick={tryEnter}>{t.adminEnter}</button>
            </div>
          </>
        )}
        {step === "config" && (
          <>
            <div className="field" style={{marginTop: 14, textAlign: "left"}}>
              <label className="label">{t.adminPin}</label>
              <input className="input" type="text" inputMode="numeric"
                value={newPin} onChange={e => setNewPin(e.target.value)} maxLength={8} />
              <div className="field-help">{t.adminPinHelp}</div>
            </div>
            {savedMsg && <div className="ok-msg">{savedMsg}</div>}
            {testMsg && <div className={testMsg === t.adminTestKo ? "err-msg" : "ok-msg"}>{testMsg}</div>}
            <div className="btn-row">
              <button className="btn btn-ghost" onClick={testConn}>⚡ {t.adminTest}</button>
              <button className="btn btn-primary" onClick={save}>{t.adminSave}</button>
            </div>
            <button className="btn btn-accent" style={{marginTop: 10}} onClick={onNewTest}>↻ {t.adminNewTest}</button>
            <button className="btn btn-ghost" style={{marginTop: 8}} onClick={onClose}>{t.adminClose}</button>
          </>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
