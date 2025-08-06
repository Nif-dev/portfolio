<!-- src/components/ui/HeroCard.vue -->

<script setup lang="ts">

  import {useTranslation} from 'i18next-vue'

  import logo from '../../assets/img/common/404-fox.png';

  import SeparatorProp from '../ui/SeparatorProp.vue';

  const {t} = useTranslation();

  const logoNif = logo; 

</script>
<template>

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


</template>

<style scoped>

.noBorderTop{
  border-top: none !important;
  overflow: hidden !important;
}

.box{
  margin: 0 auto;
  max-width: 900px;
}

</style>
