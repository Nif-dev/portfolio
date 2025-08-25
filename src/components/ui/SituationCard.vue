<!-- src/components/ui/HeroCard.vue -->

<script setup lang="ts">

  import {useTranslation} from 'i18next-vue'


  import SeparatorProp from '../ui/SeparatorProp.vue';

  const {t} = useTranslation();



</script>
<template>

    <div class="box">
        <article class="is-size-6">
            <p class="subtitle has-text-weight-bold">
            {{ t('aboutMe:NEWS') }}
            </p>
            <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>  
            {{ t('aboutMe:LFJOB_1') }}
            <strong> {{ t('aboutMe:FUTUR_DIPLOMA') }} </strong>
            {{ t('aboutMe:LFJOB_2') }}
            
            <SeparatorProp size="5px" margin="0.8em" color="var(--color-orange-transparent)" colorDark="var(--color-light-purple-transparent)"/>
            {{ t('aboutMe:RIGHT_NOW') }}
        </article>

    </div>


</template>

<style scoped>


.box{
  max-width: 40rem;
  margin: 0 auto;
}

</style>
