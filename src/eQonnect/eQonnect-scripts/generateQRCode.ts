// generateQRCode.js
// Fonction pour générer un code QR à partir d'un lien URL et l'inserer dans un conteneur HTML

import type { QRCodeOptions } from "../EQonnectTypes.ts"
function generateQRCode(options: QRCodeOptions) {
  
  const container = document.getElementById(options.htmlElement)
  if (!container) {
    return console.error('Conteneur non trouvé')
  }

  const qrId = `qr-${options.htmlElement}`
  const qr = options.QRCode

  // HTML contenant le code QR avec le lien fourni
  container.innerHTML = `
    <div class="qr-item">
      <label>${qr.label}</label>
      <div id="qr-${options.htmlElement}" class="qr-code"></div>
    </div>
  `
  // retourne l'ID du conteneur contenant le code QR
  return qrId
}

export { generateQRCode }

