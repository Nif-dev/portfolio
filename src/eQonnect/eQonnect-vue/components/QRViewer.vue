<!-- QRViewer.vue -->

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import type { QRCodeLink, QRCodeOptions } from '../../EQonnectTypes.ts';
import { generateQRCode } from '../../eQonnect-scripts/generateQRCode.ts'


const props = defineProps<{
    qrCode: QRCodeLink,
    htmlContainer: string,
}>()

// création de l'ID unique du container pour le QR code
const containerID = ref(`qr-container-${props.htmlContainer}-${Date.now()}`)

const qrOptions: QRCodeOptions = {
    QRCodeLink: props.qrCode,
    htmlElement: containerID.value
}

onMounted(async () => {
    // Attend que le DOM soit chargé
    await nextTick()
    // Génére le QR code avec son container
    await generateQRCode(qrOptions)
})

</script>

<template>

    <div :id="props.htmlContainer" class="qr-card">
        <div :id="containerID" class="qr-container"></div>
    </div>

</template>

<style scoped>

    .qr-card {
        display: inline-block;
    }

    .qr-container {
        text-align: center;
    }

    /* Ciblage des éléments injectés en innerHTML avec :deep */
    :deep(.qr-code) {
        border: 2px solid #e9ecef;
        border-radius: 8px;
        padding: 0.5rem;
        background: white;
        margin: 0 auto;
    }

</style>