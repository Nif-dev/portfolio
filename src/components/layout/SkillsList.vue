<!-- src/components/layout/SkillsList.vue -->

<script setup lang="ts">
    
    import { ref, onMounted } from 'vue';
    import SeparatorProp from '../ui/SeparatorProp.vue';
    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();
    
    import { skillsListByType } from '../../data/skills';
    import SkillsIcons from '../ui/skillsIcons.vue';

// Refs pour chaque bloc
const frontendRef = ref<HTMLElement | null>(null);
const backendRef = ref<HTMLElement | null>(null);
const databaseRef = ref<HTMLElement | null>(null);
const otherRef = ref<HTMLElement | null>(null);
const favoriteRef = ref<HTMLElement | null>(null);

// Visibilité de chaque bloc
const frontendVisible = ref(false);
const backendVisible = ref(false);
const databaseVisible = ref(false);
const otherVisible = ref(false);
const favoriteVisible = ref(false);

let observer: IntersectionObserver;

// Gestionnaire d'intersection (ce qui apparait au scroll)
onMounted(() => {
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch (entry.target) {
                    case frontendRef.value:
                        frontendVisible.value = true;
                        break;
                    case backendRef.value:
                        backendVisible.value = true;
                        break;
                    case databaseRef.value:
                        databaseVisible.value = true;
                        break;
                    case otherRef.value:
                        otherVisible.value = true;
                        break;
                    case favoriteRef.value:
                        favoriteVisible.value = true;
                        break;
                }
            }
        });
    },{ threshold: 0.1 }
  );
  if (frontendRef.value) observer.observe(frontendRef.value);
  if (backendRef.value) observer.observe(backendRef.value);
  if (databaseRef.value) observer.observe(databaseRef.value);
  if (otherRef.value) observer.observe(otherRef.value);
  if (favoriteRef.value) observer.observe(favoriteRef.value);
});

</script>

<template>
  <section class="section " id="skills">

    <div class="container my-5">
      <div class="box">
        <article>
          <h1 class="title has-text-centered">{{ t('common:SKILLS_TITLE') }}</h1>
          <SeparatorProp size="16px" margin="1em" color="var(--color-light-purple)" colorDark="var(--color-dark-orange)"/>
          <h2 class="subtitle my-5 p-2 has-text-centered">{{ t('common:SKILLS_SUBTITLE') }}</h2>
        </article>
      </div>
    </div>
    
    <!-- Blocs de compétences -->
      <div class="is-flex is-flex-wrap-wrap container is-justify-content-space-between">

        <!-- Frontend -->
        <div class="box ">
          <h1 class="is-size-3 has-text-centered">{{ t('common:SKILLS_FRONTEND_TITLE') }}</h1>
          <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>
          <div
          ref="frontendRef"
          :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim','has-text-centered', { 'slide-in': frontendVisible }]"
          >
            <div class="m-4 " v-for="skill in skillsListByType.frontend" :key="skill.name">
              <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="box ">
          <h1 class="is-size-3 has-text-centered">{{ t('common:SKILLS_BACKEND_TITLE') }}</h1>
          <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>
          <div
            ref="backendRef"
            :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim','has-text-centered', { 'slide-in': backendVisible }]"
          >
            <div class="m-4" v-for="skill in skillsListByType.backend" :key="skill.name">
              <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
            </div>
          </div>
        </div>

        <!-- Database -->
        <div class="box ">
          <h1 class="is-size-3 has-text-centered">{{ t('common:SKILLS_DATABASE_TITLE') }}</h1>
          <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>
          <div
          ref="databaseRef"
          :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim','has-text-centered', { 'slide-in': databaseVisible }]"
          >
          <div class="m-4" v-for="skill in skillsListByType.database" :key="skill.name">
            <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
          </div>
        </div>
      </div>

      <!-- Autres skills -->
      <div class="box ">
          <h1 class="is-size-3 has-text-centered">{{ t('common:SKILLS_OTHER_TITLE') }}</h1>
          <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>
          <div
          ref="otherRef"
          :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim','has-text-centered', { 'slide-in': otherVisible }]"
          >
          <div class="m-4" v-for="skill in skillsListByType.other" :key="skill.name">
            <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
          </div>
        </div>
      </div>
      </div>

  </section>

</template>

<style scoped>

.bcg-blur-white{
    width: fit-content;
}

  .title{
      display: flex;
      justify-content: center;
      text-align: justify;
      align-items: center;
      width: fit-content;
      margin: auto;
  }

  .section {
    position: relative;
  }

  [data-theme="light"] {
    .bcg-blur {
      background-color: var(--color-white-transparent);
    }
  }

  /* Animation slide-in */
  .slide-anim {
    opacity: 0;
    transform: translateX(-300px);
    transition: opacity 1.7s cubic-bezier(.4,0,.2,1), transform 1.7s cubic-bezier(.4,0,.2,1);
  }
  .slide-in {
    opacity: 1;
    transform: translateX(0);
  }

</style>


