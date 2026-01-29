<script setup lang="ts">
    import { useTranslation } from 'i18next-vue'
    const { t } = useTranslation('')
</script>

<template>
    <a 
        href="/nif-portfolio/CV_Yoann_LeGoff.pdf" 
        download="CV_Yoann_LeGoff.pdf"
        class="is-CTA-button button"
        :aria-label="t('aboutMe:CV_DOWNLOAD_LABEL')"
    >
        <svg class="icon-download" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v7m0 0v7m0-7h7m-7 0H5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>{{ t('aboutMe:CV_DOWNLOAD') }}</span>
    </a>
</template>

<style scoped>

    .icon-download {
        width: 1.2em;
        height: 1.2em;
    }

</style>
