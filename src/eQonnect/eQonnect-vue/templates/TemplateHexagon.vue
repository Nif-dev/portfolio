<script setup lang="ts">
import type { CardData } from '../../EQonnectTypes.ts'

defineProps<{
  cardData: CardData
}>()
</script>

<template>
  <div class="hexagon-template" 
       :style="{ 
         '--primary-color': cardData.color || '#10b981',
         '--secondary-color': cardData.color || '#10b981'
       }">
    
    <!-- Coins angulaires -->
    <div class="hex-corners">
      <div class="corner top-left"></div>
      <div class="corner top-right"></div>
      <div class="corner bottom-left"></div>
      <div class="corner bottom-right"></div>
    </div>

    <!-- Contenu principal avec découpes -->
    <div class="hex-content">
      <!-- Avatar hexagonal -->
      <div class="hex-avatar-wrapper">
        <img class="hex-avatar" :src="cardData.avatarUrl" :alt="cardData.name" />
      </div>

      <!-- Infos en diagonale -->
      <div class="hex-info-diagonal">
        <h1 class="hex-name">{{ cardData.name }}</h1>
        <div class="hex-title-slash">
          <span class="hex-title">{{ cardData.title }}</span>
          <span class="slash">/</span>
          <span v-if="cardData.tagline" class="hex-tagline">{{ cardData.tagline }}</span>
        </div>
      </div>

      <!-- Boutons hexagonales -->
      <div class="hex-buttons">
        <a 
          v-for="(link, index) in cardData.primaryLinks.slice(0, 2)" 
          :key="index"
          class="hex-button"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{{ link.label }}</span>
        </a>
      </div>

      <!-- Socials en arc -->
      <div v-if="cardData.socials?.length" class="hex-socials-arc">
        <a 
          v-for="(social, index) in cardData.socials.slice(0, 3)" 
          :key="index"
          class="hex-social"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ social.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hexagon-template {
  position: relative;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 28px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.hex-corners {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.corner {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.corner.top-left {
  top: 0;
  left: 0;
  transform: rotate(180deg);
}

.corner.top-right {
  top: 0;
  right: 0;
}

.corner.bottom-left {
  bottom: 0;
  left: 0;
}

.corner.bottom-right {
  bottom: 0;
  right: 0;
  transform: rotate(90deg);
}

.hex-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: white;
}

.hex-avatar-wrapper {
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto;
}

.hex-avatar {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.hex-info-diagonal {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.hex-name {
  font-size: 1.625rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.hex-title-slash {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 500;
}

.slash {
  font-size: 1.25rem;
  font-weight: 300;
  opacity: 0.8;
}

.hex-tagline {
  font-size: 0.875rem;
  opacity: 0.9;
}

.hex-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.hex-button {
  flex: 1;
  min-width: 120px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hex-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.hex-socials-arc {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
}

.hex-social {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.hex-social:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}
</style>
