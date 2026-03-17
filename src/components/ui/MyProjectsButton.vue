<script setup lang="ts">
    import { useTranslation } from 'i18next-vue'
    const { t } = useTranslation();
</script>

<template>
    <div class="is-flex is-justify-content-center mt-6 pt-6">
        <router-link to="/projets">
            <button class="button is-CTA is-CTA-button" > {{ t('common:PROJECTS_BUTTON') }} </button>
        </router-link>
    </div>
</template>
