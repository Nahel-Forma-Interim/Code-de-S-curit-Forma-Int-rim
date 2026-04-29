// Admin config stored in localStorage (PIN only — Worker URL + recipient hardcoded)
window.APP_CONFIG = {
  LS_KEY: "codesec_config_v2",
  DEFAULT_PIN: "2580",
  WORKER_URL: "https://codesec-mail.nzamouri08.workers.dev/",
  RECIPIENT: "toulon@forma-interim.fr",

  load() {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (!raw) return { pin: this.DEFAULT_PIN };
      const cfg = JSON.parse(raw);
      return { pin: cfg.pin || this.DEFAULT_PIN };
    } catch (e) {
      return { pin: this.DEFAULT_PIN };
    }
  },
  save(cfg) {
    localStorage.setItem(this.LS_KEY, JSON.stringify(cfg));
  }
};

// Envoi via Cloudflare Worker + Resend (PDF en pièce jointe directe)
window.sendResults = async function(payload, attachment) {
  const url = window.APP_CONFIG.WORKER_URL;
  const to = window.APP_CONFIG.RECIPIENT;
  if (!url) throw new Error("NO_WORKER_URL");

  // Ping de test (écran admin)
  if (payload.__ping) {
    const fd = new FormData();
    fd.append("to", to);
    fd.append("subject", "Code Sécurité BTP — Test de connexion");
    fd.append("message", "Ping de test — si tu reçois cet email, la connexion fonctionne ✓");
    const res = await fetch(url, { method: "POST", body: fd });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Ping failed");
    return true;
  }

  const c = payload.candidate || {};
  const fullName = `${(c.lastName || "").toUpperCase()} ${c.firstName || ""}`.trim();
  const scoreStr = `${payload.score}/${payload.total}`;
  const status = payload.validated ? "VALIDÉ ✓" : "NON VALIDÉ ✕";

  const fd = new FormData();
  fd.append("to", to);
  fd.append("subject", `Code Sécurité BTP — ${fullName} — ${scoreStr} — ${status}`);
  fd.append("message", "Certificat en pièce jointe.");
  if (attachment && attachment.blob) {
    fd.append("pdf", attachment.blob, attachment.filename || "certificat.pdf");
  }

  const res = await fetch(url, { method: "POST", body: fd });
  const data = await res.json();
  if (!data.success) throw new Error(data.error || "Send failed");
  return true;
};
