<script setup lang="ts">
import type { CardData } from '../../EQonnectTypes.ts'

defineProps<{
  cardData: CardData
}>()
</script>

<template>
  <div class="pro-template">
    <!-- Avatar + infos -->
    <div class="header-section">
      <img 
        class="avatar" 
        :src="cardData.avatarUrl" 
        :alt="cardData.name"
        loading="lazy"
      />
      <div class="name-section">
        <h1 class="name">{{ cardData.name }}</h1>
        <h2 class="title">{{ cardData.title }}</h2>
        <p v-if="cardData.tagline" class="tagline">{{ cardData.tagline }}</p>
      </div>
    </div>

    <!-- Liens principaux -->
    <div v-if="cardData.primaryLinks?.length" class="primary-links">
      <a 
        v-for="(link, index) in cardData.primaryLinks" 
        :key="index"
        class="primary-btn"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- Réseaux sociaux -->
    <div v-if="cardData.socials?.length" class="social-links">
      <a 
        v-for="(social, index) in cardData.socials" 
        :key="index"
        class="social-link"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ social.label }}
      </a>
    </div>

    <!-- Localisation / disponibilité -->

      <p v-if="cardData.location" class="location">{{ cardData.location }}</p>


  </div>
</template>

<style scoped>
.pro-template {
  /* Grid complète */
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  height: 100%;
  padding: 24px;
  gap: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.header-section {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px;
  align-items: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e5e7eb;
}

.name-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.2;
}

.title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
}

.tagline {
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
  font-style: italic;
}

.primary-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.primary-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.primary-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.social-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f9fafb;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #e5e7eb;
}

.footer-info {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  font-size: 0.8125rem;
  color: #6b7280;
}

.footer-info p {
  margin: 0 0 4px 0;
}
</style>
