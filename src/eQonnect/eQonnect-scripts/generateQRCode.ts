// generateQRCode.js
// Fonction pour générer un code QR à partir d'un lien URL et l'inserer dans un conteneur HTML

import type { QRCodeOptions } from "../EQonnectTypes.ts"
import QRCode from 'qrcode'
export async function generateQRCode(options: QRCodeOptions): Promise<string> {
  const container = document.getElementById(options.htmlElement)
  if (!container) throw new Error('Conteneur non trouvé')

  const qrId = `qr-${Date.now()}`
  const qr = options.QRCodeLink

  container.innerHTML = `
    <div class="qr-item">
      <label>${qr.label}</label>
      <canvas id="${qrId}" class="qr-code"></canvas>
    </div>
  `

  const canvas = document.getElementById(qrId) as HTMLCanvasElement
  await QRCode.toCanvas(canvas, qr.urlLink, {
    width: qr.width || 128,
    margin: 1,
    color: { dark: '#000', light: '#FFF' }
  })

  return qrId
}


