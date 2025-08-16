<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">

</script>
<template>

  <div class="hero-background fullwidth">
  </div>
  
  <section class="section" >
    
  </section>

</template>

<style scoped>

[data-theme="light"] .hero-background {
  background-image: url('../../assets/img/common/hero-banner-jour.png') !important;
}

[data-theme="dark"] .hero-background {
  background-image: url('../../assets/img/common/hero-banner-nuit.png');
}

.hero-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-size: cover;
  background-position: center;
}

/* décollement du header */
.section{
  position: relative;
  min-height: 100vh;
}

</style>
