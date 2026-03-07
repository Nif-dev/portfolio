// src/lib/lightbox.ts
import { ref } from 'vue'

export interface LightboxImage {
    src: string
    alt: string
}

export function useLightbox() {
    const isOpen = ref(false)
    const currentImage = ref<LightboxImage | null>(null)

    const open = (src: string, alt: string = '') => {
        currentImage.value = { src, alt }
        isOpen.value = true
        document.body.classList.add('overflow-hidden')
        console.log('isOpen', isOpen.value)
    }

    const close = () => {
        isOpen.value = false
        currentImage.value = null
        document.body.classList.remove('overflow-hidden')
    }

    return {
        isOpen,
        currentImage,
        open,
        close
    }
}
