// Certificat Forma Intérim — design V2 (clean, sans template image)
window.buildResultPdf = async function(payload) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const pageW = 210;
  const pageH = 297;

  // Palette de marque
  const BLUE       = [26, 174, 238];   // #1AAEEE
  const BLUE_DARK  = [20, 149, 206];   // #1495CE
  const ORANGE     = [245, 138, 60];   // #F58A3C
  const NAVY       = [22, 40, 65];
  const INK        = [30, 35, 45];
  const MUTED      = [120, 128, 140];
  const LINE       = [220, 225, 232];
  const BG_SOFT    = [247, 250, 253];
  const WHITE      = [255, 255, 255];
  const GREEN      = [34, 181, 115];
  const RED        = [200, 60, 60];

  // ========= HEADER BAR (blanc, 34 mm) =========
  doc.setFillColor(...WHITE);
  doc.rect(0, 0, pageW, 34, "F");
  // Liseré orange en bas du header
  doc.setFillColor(...ORANGE);
  doc.rect(0, 34, pageW, 1.2, "F");

  // Logo (transparent conservé : fond blanc, PNG compressé)
  try {
    const resp = await fetch("logo.png");
    if (resp.ok) {
      const blob = await resp.blob();
      const bmp = await createImageBitmap(blob);
      const cv = document.createElement("canvas");
      cv.width = 256; cv.height = 256;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, 256, 256);
      const r = Math.min(256 / bmp.width, 256 / bmp.height);
      const dw = bmp.width * r, dh = bmp.height * r;
      ctx.drawImage(bmp, (256 - dw) / 2, (256 - dh) / 2, dw, dh);
      const logoUrl = cv.toDataURL("image/jpeg", 0.9);
      doc.addImage(logoUrl, "JPEG", 14, 6, 22, 22);
    }
  } catch (e) {}

  // Marque
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...BLUE);
  doc.text("FORMA", 42, 17);
  doc.setTextColor(...ORANGE);
  doc.text("INTERIM", 73, 17);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...MUTED);
  doc.text("Formation · Prévention · Intérim BTP", 42, 25);

  // ========= TITRE =========
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(...NAVY);
  doc.text("ATTESTATION DE SÉCURITÉ", pageW / 2, 56, { align: "center" });

  // Sous-titre
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(...MUTED);
  doc.text("Prévention Sécurité — Gros Œuvre · Bâtiment", pageW / 2, 64, { align: "center" });

  // Trait sous le titre
  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(0.8);
  doc.line(pageW / 2 - 20, 69, pageW / 2 + 20, 69);

  // ========= DÉLIVRÉE À =========
  const c = payload.candidate || {};
  const firstName = c.firstName || "-";
  const lastName  = (c.lastName || "-").toUpperCase();
  const fullName  = `${lastName}  ${firstName}`;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...MUTED);
  doc.text("DÉLIVRÉE À", pageW / 2, 84, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(...INK);
  doc.text(fullName, pageW / 2, 96, { align: "center" });

  // ========= TEXTE D'ATTESTATION =========
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...INK);
  const ligne1 = "Pour avoir suivi et complété le questionnaire de prévention sécurité";
  const ligne2 = "dans le secteur Gros Œuvre — Bâtiment, selon les exigences de Forma Intérim.";
  doc.text(ligne1, pageW / 2, 111, { align: "center" });
  doc.text(ligne2, pageW / 2, 117, { align: "center" });

  // ========= CARTE SCORE =========
  const valide = !!payload.validated;
  const score = payload.score;
  const total = payload.total;
  const pct = Math.round((score / total) * 100);

  const cardX = 55;
  const cardY = 132;
  const cardW = 100;
  const cardH = 58;

  // Fond carte
  doc.setFillColor(...BG_SOFT);
  doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "F");
  // Bord bleu à gauche
  doc.setFillColor(...BLUE);
  doc.rect(cardX, cardY, 2.5, cardH, "F");

  // Label
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...BLUE_DARK);
  doc.text("SCORE OBTENU", pageW / 2, cardY + 10, { align: "center" });

  // Score géant
  doc.setFont("helvetica", "bold");
  doc.setFontSize(42);
  doc.setTextColor(...NAVY);
  doc.text(`${score} / ${total}`, pageW / 2, cardY + 28, { align: "center" });

  // Pourcentage
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(...MUTED);
  doc.text(`${pct} %`, pageW / 2, cardY + 37, { align: "center" });

  // Badge validation (pilule arrondie)
  const badgeW = 48;
  const badgeH = 10;
  const badgeX = pageW / 2 - badgeW / 2;
  const badgeY = cardY + cardH - 15;
  doc.setFillColor(...(valide ? GREEN : RED));
  doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 5, 5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...WHITE);
  doc.text(valide ? "VALIDÉ" : "NON VALIDÉ", pageW / 2, badgeY + 7, { align: "center" });

  // ========= MÉTA (Date + Durée) =========
  const dateStr = new Date(payload.endedAt || payload.startedAt || Date.now())
    .toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  const durStr = payload.durationSec
    ? `${Math.floor(payload.durationSec / 60)} min ${payload.durationSec % 60} s`
    : "—";

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...INK);

  // Date (gauche)
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...MUTED);
  doc.text("DATE DU TEST", 55, 204);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...INK);
  doc.text(dateStr, 55, 211);

  // Durée (droite)
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...MUTED);
  doc.text("DURÉE", 125, 204);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...INK);
  doc.text(durStr, 125, 211);

  // Séparateur
  doc.setDrawColor(...LINE);
  doc.setLineWidth(0.3);
  doc.line(25, 222, pageW - 25, 222);

  // ========= SIGNATURE =========
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...MUTED);
  doc.text("SIGNATURE DU CANDIDAT", 25, 232);

  doc.setDrawColor(...LINE);
  doc.setLineWidth(0.4);
  doc.roundedRect(25, 236, pageW - 50, 30, 2, 2, "S");

  if (payload.signature && payload.signature.startsWith("data:image")) {
    try {
      doc.addImage(payload.signature, "PNG", 28, 238, pageW - 56, 26);
    } catch (e) {}
  }

  // ========= FOOTER =========
  doc.setFillColor(...NAVY);
  doc.rect(0, pageH - 14, pageW, 14, "F");
  doc.setFillColor(...ORANGE);
  doc.rect(0, pageH - 14, pageW, 1.2, "F");

  const ref = `Ref. ${(c.lastName || "X").slice(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...WHITE);
  doc.text("Forma Intérim · Attestation de prévention sécurité BTP", 14, pageH - 5);
  doc.text(ref, pageW - 14, pageH - 5, { align: "right" });

  const filename = `certificat-${(c.lastName || "x").toLowerCase()}-${(c.firstName || "").toLowerCase()}.pdf`;
  return { blob: doc.output("blob"), filename, ref };
};
