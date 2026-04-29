// Génère un PDF de test en Node pour prévisualisation
const fs = require("fs");
const { jsPDF } = require("jspdf");

const doc = new jsPDF({ unit: "mm", format: "a4" });
const pageW = 210, pageH = 297;

const BLACK = [20, 20, 20];
const WHITE = [255, 255, 255];
const TEMPLATE_BLUE = [4, 146, 225];
const TEMPLATE_NAVY = [15, 24, 41];
const TEMPLATE_CREAM = [253, 247, 235];
const TEMPLATE_ORANGE = [245, 130, 60];
const GREEN = [34, 181, 115];

const templateBuffer = fs.readFileSync("certificat-template.jpg");
const templateDataUrl = "data:image/jpeg;base64," + templateBuffer.toString("base64");
doc.addImage(templateDataUrl, "JPEG", 0, 0, pageW, pageH);

// NOM / PRÉNOM
doc.setFillColor(...WHITE);
doc.rect(0, 48, 115, 16, "F");
doc.setFont("helvetica", "bold");
doc.setFontSize(14);
doc.setTextColor(...BLACK);
doc.text("Nom :    DUPONT", 10, 55);
doc.text("Prénom : Jean", 10, 62);

// BLOC NAVY
doc.setFillColor(...TEMPLATE_NAVY);
doc.rect(0, 78, 115, 57, "F");
doc.setFont("helvetica", "bold");
doc.setFontSize(13);
doc.setTextColor(...TEMPLATE_ORANGE);
doc.text("Attestation de sécurité", 10, 92);
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(...WHITE);
doc.text("Cette attestation confirme la réussite du test", 10, 102);
doc.text("de prévention sécurité — secteur Gros Œuvre BTP,", 10, 108);
doc.text("selon les exigences de Forma Intérim.", 10, 114);
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.text("Date du test : 21 avril 2026", 10, 128);

// BLOC SCORE
doc.setFillColor(...TEMPLATE_BLUE);
doc.rect(80, 141, 130, 78, "F");
doc.setFont("helvetica", "bold");
doc.setFontSize(13);
doc.setTextColor(...WHITE);
doc.text("SCORE OBTENU", 145, 158, { align: "center" });
doc.setFont("helvetica", "bold");
doc.setFontSize(40);
doc.text("25 / 30", 145, 185, { align: "center" });
doc.setFont("helvetica", "normal");
doc.setFontSize(14);
doc.text("83 %", 145, 197, { align: "center" });

doc.setFillColor(...WHITE);
doc.roundedRect(113, 204, 64, 12, 3, 3, "F");
doc.setFont("helvetica", "bold");
doc.setFontSize(13);
doc.setTextColor(...GREEN);
doc.text("VALIDE", 145, 212, { align: "center" });

// Couverture bande navy (texte anglais)
doc.setFillColor(...TEMPLATE_NAVY);
doc.rect(80, 219, 130, 41, "F");

// SIGNATURE
doc.setFillColor(...TEMPLATE_CREAM);
doc.rect(0, 260, 210, 32, "F");
doc.setDrawColor(150, 150, 150);
doc.setLineWidth(0.4);
doc.rect(65, 265, 135, 22);
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(...BLACK);
doc.text("Signature du candidat :", 12, 276);

// Fausse signature
doc.setDrawColor(30, 30, 30);
doc.setLineWidth(0.6);
doc.lines([[8, -3], [12, 5], [15, -4], [10, 2]], 135, 278);

// Référence
doc.setFont("helvetica", "normal");
doc.setFontSize(7);
doc.setTextColor(120, 120, 120);
doc.text("Ref. DUP-ABC123", 105, 293, { align: "center" });

doc.save("preview-certificat.pdf");
console.log("PDF généré");
