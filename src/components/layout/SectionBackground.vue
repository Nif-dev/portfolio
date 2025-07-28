<script setup lang="ts">
    import {  ref, computed, onMounted, onUnmounted } from 'vue'


    const theme = ref<'light' | 'dark'>('light');

    function updateTheme() {
        theme.value =
            document.documentElement.getAttribute('data-theme') === 'dark'
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
        if (theme.value === 'dark' && props.colorDark)
            return props.colorDark;
        return props.color;
    });

</script>

<template>
    <section
        class="section-background"
        :style="{ backgroundColor: backgroundColor || '',
            margin: sectionMargin,
            padding: sectionPadding }"
    >
        <slot />
    </section>
</template>

<style scoped>
    .section-background {
        box-shadow: 0 2px 8px #0001;
        padding: 2rem 1rem;
        margin: 2rem 0;
        transition: background 0.3s;
        position: relative;
        z-index: 1;
    }

</style>
