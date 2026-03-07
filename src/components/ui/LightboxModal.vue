<script setup>
const props = defineProps({
    lightbox: Object
})
</script>


<template>
    <Teleport to="body">
    <div 
        v-if="props.lightbox?.isOpen"
        @click.self="props.lightbox.close()"
    >
        <div>
        <!-- Image -->
        <img
            v-if="props.lightbox?.currentImage"
            :src="props.lightbox.currentImage.src"
            :alt="props.lightbox.currentImage.alt"
        />
        
        <!-- Bouton fermer -->
        <button
            @click.stop="props.lightbox.close"
        >
            ×
        </button>
        
        <!-- Légende -->
        <p v-if="props.lightbox?.currentImage?.alt">
            {{ props.lightbox.currentImage.alt }}
        </p>
        </div>
    </div>
    </Teleport>
</template>

