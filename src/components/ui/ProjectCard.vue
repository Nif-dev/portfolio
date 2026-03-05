<!-- src/components/ui/ProjectCard.vue -->
<script setup lang="ts">

import type { Project } from '../../types/project'
import skillIcon from './SkillsIcons.vue'

import { useTranslation } from 'i18next-vue';
const { t } = useTranslation('projects');

// Fonction pour ajuster le scroll lors d'un changement de page - retour haut de page plutot que position sur la page actuelle
function adjustScrollOnRedirect() {
  // Petit délai pour laisser le routeur changer la page
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 0);
}


// Props attend un objet Projet comme portfolio
defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card" style="width: 20rem;">
    <!-- Header avec le nom du projet -->
    <header class="card-header ">
      <p class="card-header-title">
        {{ t(`${project.localesName}.TITLE`) }}
      </p>
      
    <router-link :to="`/projet/${project.name.toLowerCase()}`" rel="noopener" @click="adjustScrollOnRedirect">
          <button class="button">
            Voir projet
            <i class="fas fa-external-link-alt ml-2"></i>
          </button>
        </router-link>
    </header>

    <!-- Image principale du projet -->
    <div class="card-image">
      <figure class="image is-4by4">
        <router-link :to="`/projet/${project.name.toLowerCase()}`" rel="noopener" @click="adjustScrollOnRedirect">
          <img :src="project.icon" :alt="project.name" />
        </router-link>
      </figure>

      <!-- Description du projet -->
      <div class="card-footer-item project-card-text has-text-justified is-flex is-align-items-flex-start"> {{ t(`${project.localesName}.CARD_DESCRIPTION`) }} </div>
    </div>

    <!-- Footer avec les compétences liés -->
    <footer class="card-footer">
        <span
        v-for="skill in project.cardLinkedSkills"
        :key="skill.name"
        class="card-footer-item"
        >
        <skillIcon :skill="skill" :desc="false" :hoverable="false" />
      </span>
    </footer>

  </div>
</template>

<style scoped>
  [data-theme="light"] .card{
        background-color: var(--color-dutch-white);
        box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  }
  [data-theme="dark-unused"] .card{
        background-color: var(--color-purple-transparent);
        box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  }

  [data-theme="dark"] .button{
        background-color: var(--color-purple-transparent);
        box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  }
  [data-theme="light"] .button{
        background-color: var(--color-orange-transparent);
        box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  }
.project-card-text{
  min-height: 8rem;
}
</style>
