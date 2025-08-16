<!-- src/components/layout/SkillsList.vue -->

<script setup lang="ts">
    
    import { ref, onMounted } from 'vue';

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
  <section class="section  " id="skills">
    <div class="bcg-blur p-2">

      <h1 class="title">{{ t('common:SKILLS_TITLE') }}</h1>
      <h2 class="subtitle">{{ t('common:SKILLS_SUBTITLE') }}</h2>

    <h1 class="is-size-3">{{ t('common:SKILLS_FRONTEND_TITLE') }}</h1>
    <div
      ref="frontendRef"
      :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim', { 'slide-in': frontendVisible }]"
    >
      <div class="m-4" v-for="skill in skillsListByType.frontend" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>
  
    <h1 class="is-size-3">{{ t('common:SKILLS_BACKEND_TITLE') }}</h1>
    <div
      ref="backendRef"
      :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim', { 'slide-in': backendVisible }]"
    >
      <div class="m-4" v-for="skill in skillsListByType.backend" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>

        <h1 class="is-size-3">{{ t('common:SKILLS_DATABASE_TITLE') }}</h1>
    <div
      ref="databaseRef"
      :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim', { 'slide-in': databaseVisible }]"
      >
      <div class="m-4" v-for="skill in skillsListByType.database" :key="skill.name">
        <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
      </div>
    </div>
    
    <h1 class="is-size-3">{{ t('common:SKILLS_OTHER_TITLE') }}</h1>
    <div
    ref="otherRef"
    :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim', { 'slide-in': otherVisible }]"
    >
    <div class="m-4" v-for="skill in skillsListByType.other" :key="skill.name">
      <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
    </div>
  </div>
  
  <h1 class="is-size-3">{{ t('common:SKILLS_FAVORITE_TITLE') }}</h1>
  <div
  ref="favoriteRef"
  :class="['is-flex', 'is-flex-wrap-wrap', 'slide-anim', { 'slide-in': favoriteVisible }]"
  >
  <div class="m-4" v-for="skill in skillsListByType.favorite" :key="skill.name">
    <SkillsIcons :skill="skill" :desc="true" :hoverable="true" />
  </div>
</div>
</div>
  </section>

</template>

<style scoped>
.section {
  position: relative;
}

.bcg-blur {
  border-radius: 10px;
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

/* #skills{
    border: none;
}
[data-theme="light"] #skills{
    background: url('../../assets/background/repeating-triangles.svg');
}
[data-theme="dark"] #skills{
    background: url('../../assets/background/endless-constellation.svg');
} */

</style>


