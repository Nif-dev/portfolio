<!-- src/components/layout/ProjectsSection.vue -->

<script setup lang="ts">
    import { projectsList } from '../../data/projects/index.ts'; 
    import ProjectCard from '../ui/ProjectCard.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

</script>

<template>
  <section class="section" id="projects">
  <h1 class="title my-2 has-text-centered bcg-blur-white">{{ t('common:PROJECTS_TITLE') }}</h1>
  <h2 class="subtitle bcg-blur-white my-5 has-text-centered">{{ t('common:PROJECTS_SUBTITLE') }}</h2>

    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <div class="m-4" v-for="project in projectsList" :key="project.name">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

    <div class="is-flex is-justify-content-center mt-6 pt-6">
      <router-link to="/projets/">
        <button class="button  has-text-weight-bold is-CTA" > {{ t('common:PROJECTS_BUTTON') }} </button>
      </router-link>
    </div>
    
  </section>
</template>

<style scoped>

[data-theme="dark"] .is-CTA {
    background-color: var(--color-purple-transparent);
  }


  [data-theme="light"] {
    .bcg-blur {
      background-color: var(--color-white-transparent);
    }
    .is-CTA {
      background-color: var(--color-orange);
    }
  }

</style>
