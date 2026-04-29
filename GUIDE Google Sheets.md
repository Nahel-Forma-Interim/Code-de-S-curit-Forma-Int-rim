# Google Sheets export — Mode d'emploi

Pour recevoir les résultats des candidats automatiquement dans un Google Sheet privé, suis ces étapes une seule fois. C'est **gratuit** et tu restes seul propriétaire de tes données.

---

## 1. Crée ton Google Sheet

1. Va sur https://sheets.google.com et crée un nouveau tableur vide.
2. Nomme-le par exemple **« Code Sécurité — Résultats »**.
3. Sur la ligne 1, écris ces en-têtes (copie-colle cette ligne) :

```
Date | Candidat | Prénom | Nom | Langue | Score | /30 | Validé | Durée (s) | Détail | Signature
```

## 2. Ajoute le script d'import

1. Dans ton Sheet, clique **Extensions → Apps Script**.
2. Efface le code par défaut et colle le code suivant :

```javascript
const SHEET_NAME = "Feuille 1";   // ou "Sheet1" selon ta langue
const ADMIN_SECRET = "";           // optionnel : si tu veux un mot de passe, mets-le ici

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME)
                || SpreadsheetApp.getActive().getSheets()[0];

    // Ping de test
    if (data.__ping) {
      return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
    }

    const c = data.candidate || {};
    const date = new Date(data.endedAt || data.startedAt || Date.now());
    const detail = (data.answers || []).map((a, i) => {
      const given = (a.givenLabels || []).join(" / ") || "—";
      const correct = (a.correctLabels || []).join(" / ");
      const mark = a.isRight ? "✓" : "✕";
      return `${i+1}. ${mark} [${a.category}] ${a.question}\n   Réponse: ${given}\n   Bonne: ${correct}`;
    }).join("\n\n");

    sheet.appendRow([
      date,
      `${(c.lastName||"").toUpperCase()} ${c.firstName||""}`,
      c.firstName || "",
      c.lastName || "",
      data.language || "",
      data.score || 0,
      data.total || 30,
      data.validated ? "OUI" : "NON",
      data.durationSec || "",
      detail,
      data.signature || ""  // base64 data URL
    ]);

    return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("ERR: " + err.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
```

## 3. Déploie en Web App

1. Clique **Déployer → Nouveau déploiement**.
2. Icône roue → **Application Web**.
3. Remplis :
   - **Description** : « Code Sécurité »
   - **Exécuter en tant que** : Moi
   - **Qui a accès** : **Tout le monde** (anonyme — nécessaire pour que l'app puisse envoyer sans compte)
4. Clique **Déployer** → autorise.
5. **COPIE L'URL** qui finit par `/exec`.

## 4. Colle l'URL dans l'app

1. Ouvre l'app « Code de Sécurité BTP ».
2. **Appui long (2s)** sur le coin **haut-droit** de l'écran (invisible).
3. Saisis le code PIN (par défaut : **2580**).
4. Colle l'URL dans le champ **« URL Google Apps Script »**.
5. Change le PIN pour un code à toi.
6. Enregistre, clique **« Tester la connexion »** → tu devrais voir une ligne « OK » apparaître dans ton Sheet.

---

## Sécurité

- L'URL Apps Script est stockée en `localStorage` du navigateur. Elle n'est pas visible aux candidats.
- Le Sheet reste **privé** sur ton compte Google : seuls les gens à qui tu donnes explicitement l'accès peuvent le voir.
- Si tu veux bloquer toute personne qui pourrait retrouver ton URL, tu peux ajouter un mot de passe (`ADMIN_SECRET` dans le code) et modifier l'app pour l'envoyer aussi — demande-moi si besoin.
- Pour supprimer les données d'un candidat : supprime simplement la ligne dans ton Sheet.

## En cas de problème

- **« Échec de la connexion »** : l'URL n'est pas bonne, ou le déploiement n'est pas en "Tout le monde".
- **Le test marche mais rien n'apparaît dans le Sheet** : rafraîchis ton Sheet (F5). Le script peut mettre 2–3 secondes.
- **Image de signature trop grande** : c'est normal, c'est une chaîne base64 longue. Pour voir l'image, clique la cellule, copie son contenu, colle dans la barre d'URL du navigateur.
