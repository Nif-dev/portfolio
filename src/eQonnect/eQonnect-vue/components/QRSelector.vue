<script setup lang="ts">

import { ref } from "vue";
import type { QRCodeLink } from '../../EQonnectTypes';
import QRViewer from "./QRViewer.vue";

const props = defineProps<{
    qrCodes: QRCodeLink [],
}>()

console.log(props.qrCodes.length)

props.qrCodes.forEach(e => { 
    console.log(e.label)
}) 

const selectedIndex = ref (0)
const selectQR = (index: number) => {
    selectedIndex.value = index;
    console.log(`QR select : ${props.qrCodes[index]?.label}`)
}
</script>

<template>
    <div class="qr-selector">
        <select
            id="qr-select"
            v-model="selectedIndex"
            class="qr-select"
            @change="selectQR(selectedIndex)"
        >
            <option
                v-for="(qr, index) in props.qrCodes"
                :key="qr.urlLink"
                :value="index"
            >
                {{ qr.label }}
            </option>
        </select>
        
        
        <!-- QR Viewer sélectionné -->
        <div v-if="selectedIndex >= 0" class="qr-viewer-container">
            <QRViewer
            :key="props.qrCodes[selectedIndex]?.urlLink"
            :qr-code="props.qrCodes[selectedIndex]"
            html-container="selected-qr"
            />
        </div>
    </div>
</template>

<style scoped>

.qr-selector {
    max-width: 200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    -ms-flex-align: center;
}

.qr-selector-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.qr-label {
    font-weight: 600;
    color: #333;
    font-size: 1.1rem;
}

.qr-select {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid #ddd;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-size: 1rem;
    /* background: white; */
    cursor: pointer;
    transition: border-color 0.2s;
    margin: 0 auto;
}

.qr-select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.qr-select option {
    padding: 0.5rem;
}

.qr-viewer-container {
    width: fit-content;
    margin: 0 auto;
}

</style>