<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">
  import HeroCard from '../ui/HeroCard.vue';
  import SituationCard from '../ui/SituationCard.vue';
</script>
<template>

  <div class="hero-background fullwidth">
  </div>
  
  <section class="section is-align-content-center" >
    <HeroCard />
    <div class="m-6"></div>
    <SituationCard />
  </section>

</template>

<style scoped>

[data-theme="light"] .hero-background {
  background-image: url('../../assets/img/common/hero-banner-jour.png') ;
}

[data-theme="dark"] .hero-background {
  background-image: url('../../assets/img/common/hero-banner-nuit.png');
}

.hero-background {
  width: 100%;
  height: 100vh;
  /* réserve espace CLS avec le ratio */
  aspect-ratio: 16/9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
}

/* décollement du header */
.section{
  position: relative;
  top: 5rem;
  min-height: 100vh;
}

</style>
