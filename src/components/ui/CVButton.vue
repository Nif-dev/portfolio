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
        <i class="fa-solid fa-file-pdf mr-2"></i>
        <span>{{ t('aboutMe:CV_DOWNLOAD') }}</span>
        <i class="fa-solid fa-download ml-2"></i>
    </a>
</template>

