<script setup lang="ts">
    import {  ref, computed, onMounted, onUnmounted } from 'vue'


    const theme = ref<'light' | 'dark'>('light');

    function updateTheme() {
        theme.value =
            document.documentElement.dataset.theme === 'dark'
            ? 'dark'
            : 'light';
    }
    onMounted(() => {
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        updateTheme();
        onUnmounted(() => observer.disconnect());
    });

    const props = defineProps<{
        // Couleur de fond en paramètre
        color?: string  
        colorDark?: string
        margin?: string
        padding?: string
    }>()

    const sectionMargin = computed(()=> props.margin || '0em');

    const sectionPadding = computed(()=> props.padding || '0em');

    const backgroundColor = computed(() => {
        if (theme.value === 'dark' && props.colorDark && !props.colorDark.includes('gradient')) return props.colorDark;
        if (!props.color) return '';
        if (props.color?.includes('gradient')) return ''; // On ne met pas en background-color les gradients
        return props.color;
    });

    // Les gradients et SVG sont des images, leurs noms doivent inclure "gradient" ou "url" pour être reconnus
    const backgroundImage = computed(() => {
        if (theme.value === 'dark' && props.colorDark && (props.colorDark.includes('gradient') || props.colorDark.includes('url'))) 
            return props.colorDark;
        if (!props.color) return '';
        if (props.color.includes('gradient') || props.color.includes('url')) 
            return props.color;
        return '';
    });



</script>

<template>
    <section
        class="section-background"
        :style="{ 
            background: backgroundImage || backgroundColor ||'',
            border: backgroundImage? 'none' : '',
            margin: sectionMargin,
            padding: sectionPadding }"
    >
        <slot />
    </section>
</template>

<style scoped>
    .section-background {
        padding: 2rem 1rem;
        margin: 2rem 0;
        transition: background 0.3s;
        position: relative;
        z-index: 1;
    }

</style>
