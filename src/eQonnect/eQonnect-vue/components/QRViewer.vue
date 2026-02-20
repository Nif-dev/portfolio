<!-- QRViewer.vue -->

<script setup lang="ts">
import { onMounted } from 'vue'
import type { QRCodeOptions } from '../../EQonnectTypes.ts';
import { generateQRCode } from '../../eQonnect-scripts/generateQRCode.ts'


const props = defineProps<{
    qrOptions: QRCodeOptions
}>()

// création de l'ID unique du container pour le QR code
const containerID = `qr-container-${props.qrOptions.htmlElement}-${Date.now()}`

onMounted( () => {
        // 1. Génère HTML via utilitaire
        generateQRCode({
            ...props.qrOptions,
            htmlElement: containerID
        })

        //2. Charge lib + return QR code
        // loadQRCodeAndRender(`qr-${containerID}`)
    })



//  watch(() => props.qrOptions, () => {
//   generateQRCode({ 
//     ...props.qrOptions, 
//     htmlElement: containerID 
//   })
//   loadQRCodeAndRender(`qr-${containerID}`)
// }, { deep: true })

// function loadQRCodeAndRender(qrId: string) {
//   // Si lib déjà chargée
//   if ((globalThis as any).QRCode) {
//     new (globalThis as any).QRCode(qrId, {
//       text: props.qrOptions.urlLink
//     })
//     return
//   }
  
//   // Charge lib
//   const script = document.createElement('script')
//   script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js'
//   script.onload = () => {
//     new (globalThis as any).QRCode(qrId, {
//       text: props.qrOptions.urlLink
//     })
//   }
//   document.head.appendChild(script)
// }

</script>

<template>

    <div class="qr-card">
        <div :id="containerID" class="qr-container"></div>
    </div>

</template>

<style scoped>

    .qr-card {
        display: inline-block;
        padding: 1rem;
    }

    .qr-container {
        text-align: center;
    }

    .qr-item {
        display: inline-block;
    }

    .qr-item label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: #333;
    }

    .qr-code {
        border: 2px solid #e9ecef;
        border-radius: 8px;
        padding: 0.5rem;
        background: white;
        margin: 0 auto;
    }

</style>