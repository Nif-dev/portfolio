<!-- src/components/layout/HelloWorld.vue -->

<script setup lang="ts">

  import {useTranslation} from 'i18next-vue'

  // import logo from '../../assets/logo.png';
  import logo from '../../assets/img/common/404-fox.png';

  import SeparatorProp from '../ui/SeparatorProp.vue';

  const {t} = useTranslation();

  const logoNif = logo; 

</script>
<template>

  <div class="hero-background fullwidth">
  </div>
  
  <section class="section" >

<div class="box">
<!-- entête -->
  <article class="media is-hidden-mobile">
    <div class="media-left">
      <figure class="image is-128x128">
        <img :src=logoNif alt="" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="subtitle has-text-weight-bold">
          <p class="is-size-4">
            Yoann Le Goff 
          </p>
          <p class="mr-6"><small> {{ t('aboutMe:DIPLOMA') }} </small>
          </p>
        </div>

      </div>
    </div>
  </article>
  <article class="media is-hidden-tablet noBorderTop">
    <div class="media-left">
      <figure class="image is-96x96">
        <img :src=logoNif alt="" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="subtitle has-text-weight-bold">
          <p class="is-size-4">
            Yoann Le Goff 
          </p>
          <p class="mr-6"><small> {{ t('aboutMe:DIPLOMA') }} </small>
          </p>
        </div>

      </div>
    </div>
  </article>
  <!-- contenu -->
  <article>
    <SeparatorProp size="10px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>  
    <p class="has-text-weight-bold">
      {{ t('aboutMe:NEWS') }}
    </p>
    {{ t('aboutMe:LFJOB_1') }}
    <strong> {{ t('aboutMe:FUTUR_DIPLOMA') }} </strong>
    {{ t('aboutMe:LFJOB_2') }}
    
    <SeparatorProp size="5px" margin="0.8em" color="var(--color-orange-transparent)" colorDark="var(--color-light-purple-transparent)"/>
    {{ t('aboutMe:RIGHT_NOW') }}
  </article>

</div>
      
      
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

.noBorderTop{
  border-top: none !important;
  overflow: hidden !important;
}

/* décollement du header */
.section{
  position: relative;
  padding-top: 10em;
  z-index: 1;
}

</style>
