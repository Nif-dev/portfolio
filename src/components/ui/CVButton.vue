<script setup lang="ts">
    import { useTranslation } from 'i18next-vue'
    import Tooltip from './Tooltip.vue';

    const { t } = useTranslation('')
</script>

<template>
    <div class="box is-CTA is-flex is-justify-content-space-between">
        
        <div>
            <span>{{ t('aboutMe:CV_CTA') }}</span>
            <i class="fa-regular fa-file-pdf m-2 ml-5"></i>
        </div>
        
        <div>
            <Tooltip :text="t('aboutMe:CV_NEWTAB_LABEL')">
                <a 
                href="/portfolio/CV_Yoann_LeGoff.pdf" 
                target="_blank"
                rel="noopener"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square m-2"></i>
                </a>
            </Tooltip>
            <span class="mx-2"></span>
            <Tooltip :text="t('aboutMe:CV_DOWNLOAD_LABEL')">
                <a 
                href="/portfolio/CV_Yoann_LeGoff.pdf" 
                download="CV_Yoann_LeGoff.pdf"
                
                :aria-label="t('aboutMe:CV_DOWNLOAD_LABEL')"
                >
                    <i class="fa-solid fa-download m-2"></i>
                </a>
            </Tooltip>
        </div>

    </div>
</template>

<style scoped>
    .box{
        max-width: 30rem;
        margin: 0 auto;
        /* background-color: var(--color-purple); */
    }
</style>

