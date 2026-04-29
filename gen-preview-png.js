// Génère un aperçu PNG en superposant le texte sur le template (simule le PDF final)
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

(async () => {
  const template = await loadImage("certificat-template.png");
  const canvas = createCanvas(template.width, template.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(template, 0, 0);

  const MM = template.width / 210;
  const pt = (size) => Math.round(size * 3.1);

  // Couleurs exactes
  const TEMPLATE_BLUE = "rgb(4, 146, 225)";
  const TEMPLATE_NAVY = "rgb(15, 24, 41)";
  const TEMPLATE_CREAM = "rgb(253, 247, 235)";
  const TEMPLATE_ORANGE = "rgb(245, 130, 60)";

  // ========= 1) NOM / PRÉNOM =========
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 48 * MM, 115 * MM, 16 * MM);

  ctx.fillStyle = "#141414";
  ctx.font = `bold ${pt(14)}px Arial`;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Nom :    DUPONT", 10 * MM, 55 * MM);
  ctx.fillText("Prénom : Jean", 10 * MM, 62 * MM);

  // ========= 2) BLOC NAVY =========
  ctx.fillStyle = TEMPLATE_NAVY;
  ctx.fillRect(0, 78 * MM, 115 * MM, 57 * MM);

  ctx.fillStyle = TEMPLATE_ORANGE;
  ctx.font = `bold ${pt(13)}px Arial`;
  ctx.fillText("Attestation de sécurité", 10 * MM, 92 * MM);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = `${pt(9)}px Arial`;
  ctx.fillText("Cette attestation confirme la réussite du test", 10 * MM, 102 * MM);
  ctx.fillText("de prévention sécurité — secteur Gros Œuvre BTP,", 10 * MM, 108 * MM);
  ctx.fillText("selon les exigences de Forma Intérim.", 10 * MM, 114 * MM);

  ctx.font = `bold ${pt(11)}px Arial`;
  ctx.fillText("Date du test : 21 avril 2026", 10 * MM, 128 * MM);

  // ========= 3) BLOC SCORE =========
  ctx.fillStyle = TEMPLATE_BLUE;
  ctx.fillRect(80 * MM, 141 * MM, 130 * MM, 78 * MM);

  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";

  ctx.font = `bold ${pt(13)}px Arial`;
  ctx.fillText("SCORE OBTENU", 145 * MM, 158 * MM);

  ctx.font = `bold ${pt(40)}px Arial`;
  ctx.fillText("25 / 30", 145 * MM, 185 * MM);

  ctx.font = `${pt(14)}px Arial`;
  ctx.fillText("83 %", 145 * MM, 197 * MM);

  // Badge VALIDE
  ctx.fillStyle = "#FFFFFF";
  const bx = 113 * MM, by = 204 * MM, bw = 64 * MM, bh = 12 * MM;
  ctx.beginPath();
  ctx.roundRect(bx, by, bw, bh, 3 * MM);
  ctx.fill();

  ctx.fillStyle = "rgb(34, 181, 115)";
  ctx.font = `bold ${pt(13)}px Arial`;
  ctx.fillText("VALIDE", 145 * MM, 212 * MM);

  // ========= 3bis) COUVRE bande navy avec texte anglais =========
  ctx.fillStyle = TEMPLATE_NAVY;
  ctx.fillRect(80 * MM, 219 * MM, 130 * MM, 41 * MM);

  // ========= 4) SIGNATURE =========
  ctx.fillStyle = TEMPLATE_CREAM;
  ctx.fillRect(0, 260 * MM, 210 * MM, 32 * MM);

  // Cadre
  ctx.strokeStyle = "rgb(150, 150, 150)";
  ctx.lineWidth = 0.4 * MM;
  ctx.strokeRect(65 * MM, 265 * MM, 135 * MM, 22 * MM);

  // Libellé
  ctx.fillStyle = "#141414";
  ctx.textAlign = "left";
  ctx.font = `bold ${pt(10)}px Arial`;
  ctx.fillText("Signature du candidat :", 12 * MM, 276 * MM);

  // Fausse signature
  ctx.strokeStyle = "#1E1E1E";
  ctx.lineWidth = 1.8 * MM;
  ctx.beginPath();
  ctx.moveTo(75 * MM, 278 * MM);
  ctx.bezierCurveTo(95 * MM, 270 * MM, 115 * MM, 283 * MM, 140 * MM, 273 * MM);
  ctx.bezierCurveTo(155 * MM, 268 * MM, 175 * MM, 284 * MM, 193 * MM, 278 * MM);
  ctx.stroke();

  // Référence
  ctx.fillStyle = "#787878";
  ctx.textAlign = "center";
  ctx.font = `${pt(7)}px Arial`;
  ctx.fillText("Ref. DUP-ABC123", 105 * MM, 293 * MM);

  fs.writeFileSync("preview-certificat.png", canvas.toBuffer("image/png"));
  console.log("PNG généré");
})();
