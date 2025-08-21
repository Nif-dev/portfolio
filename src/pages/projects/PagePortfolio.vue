<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { portfolio } from '../../data/projects/portfolio'
import NavBar from '../../components/layout/NavBar.vue'
import ScrollToTop from '../../components/ui/ScrollToTop.vue'
import MyFooter from '../../components/layout/MyFooter.vue'
import SeparatorProp from '../../components/ui/SeparatorProp.vue'

const { t } = useTranslation()
</script>

<template>
  <NavBar />
  <section class="section main-container mx-auto">
    <div class="block hero has-text-centered">
      <h1 class="title">{{ portfolio.name }}</h1>
      <h2 class="subtitle mb-6">
        {{ t(`projects:${portfolio.localesName}.DESCRIPTION`) }}
      </h2>
    </div>

    <SeparatorProp color="var(--color-dark-orange)" />

    <div class="block columns is-vcentered">
      <div class="column has-text-centered">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.GOAL_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.GOAL_DESCRIPTION`) }}</h2>
      </div>
    </div>

    <SeparatorProp color="var(--color-dark-orange)" />

    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.ORGANISATION_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.ORGANISATION_DESCRIPTION`) }}</h2>
    </div>

    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.ENVIRONMENT_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.ENVIRONMENT_DESCRIPTION`) }}</h2>
    </div>

    <SeparatorProp color="var(--color-dark-orange)" />

    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.UX_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.UX_DESCRIPTION`) }}</h2>
    </div>
    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.MAINTAIN_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.MAINTAIN_DESCRIPTION`) }}</h2>
    </div>

    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.SEO_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.SEO_DESCRIPTION`) }}</h2>
    </div>

    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.DOWNLOADS_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.DOWNLOADS_DESCRIPTION`) }}</h2>
    </div>

    <div class="block">
      <h1 class="title">{{ t(`projects:${portfolio.localesName}.DEPLOY_TITLE`) }}</h1>
      <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.DEPLOY_DESCRIPTION`) }}</h2>
    </div>
  </section>
  <ScrollToTop />
  <MyFooter />
</template>

<style scoped>
.main-container { max-width: 1600px; }
.section { padding-top: 8em; }
</style>
