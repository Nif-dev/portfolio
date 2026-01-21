<script setup lang="ts">
    import { useTranslation } from 'i18next-vue'
    const { t } = useTranslation();
</script>

<template>
    <div class="is-flex is-justify-content-center mt-6 pt-6">
        <router-link to="/projets">
            <button class="button  has-text-weight-bold is-CTA" > {{ t('common:PROJECTS_BUTTON') }} </button>
        </router-link>
    </div>
</template>

<style scoped>

    [data-theme="dark"] .is-CTA {
        background-color: var(--color-purple-transparent);
    }

    .is-CTA {
        background-color: var(--color-orange);
        margin: 0 auto;
    }


</style>