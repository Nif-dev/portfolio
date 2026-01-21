<!-- src/components/layout/ProjectsSection.vue -->

<script setup lang="ts">
    import { projectsList } from '../../data/projects/index.ts'; 
    import ProjectCard from '../ui/ProjectCard.vue';
    import MyProjectsButton from '../ui/MyProjectsButton.vue';
    import SeparatorProp from '../ui/SeparatorProp.vue';

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

</script>

<template>
  <section class="section" id="projects">
    <div class="box container">
      <article>
        <h1 class="title mb-2 has-text-centered ">{{ t('common:PROJECTS_TITLE') }}</h1>
        <SeparatorProp size="16px" margin="1em" color="var(--color-light-purple)" colorDark="var(--color-dark-orange)"/>
        <h2 class="subtitle my-5 has-text-centered">{{ t('common:PROJECTS_SUBTITLE') }}</h2>
        <div class="has-text-centered">
          <router-link to="/projets/">
            <button class="button has-text-weight-bold is-CTA" > {{ t('common:PROJECTS_ALL_BUTTON') }} </button>
          </router-link>
        </div>
      </article>
    </div>

    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
      <div class="m-4" v-for="project in projectsList" :key="project.name">
          <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

  <MyProjectsButton />
    
  </section>
</template>

<style scoped>

  .title, .subtitle{
      display: flex;
      justify-content: center;
      text-align: justify;
      align-items: center;
      width: fit-content;
      margin: auto;
  }


</style>
