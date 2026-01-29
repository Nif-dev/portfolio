<!-- src/components/ui/HeroCard.vue -->

<script setup lang="ts">

  import {useTranslation} from 'i18next-vue'


  import SeparatorProp from '../ui/SeparatorProp.vue';

  const {t} = useTranslation();



</script>
<template>

    <div class="box">
        <article class="is-size-6">
            <p class="subtitle is-size-4 has-text-weight-bold">
            {{ t('aboutMe:NEWS') }}
            </p>
            <span>
              <strong> {{ t('aboutMe:STATUS_1') }} </strong>
            </span>
            <span class="dates">
              {{ t('aboutMe:STATUS_2') }} 
            </span>
            <SeparatorProp size="5px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>  
            <p class="subtitle is-size-6 has-text-weight-bold"> {{ t('aboutMe:AVAILABILITY') }} </p>
            
            <SeparatorProp size="5px" margin="1em" color="var(--color-orange-transparent)" colorDark="var(--color-light-purple-transparent)"/>
            <p class="subtitle is-size-5 has-text-weight-bold">{{ t('aboutMe:FUTURE') }}</p>
            <ul class="future-options">
              <li>{{ t('aboutMe:FUTURE_CDI') }}</li>
              <li>{{ t('aboutMe:FUTURE_BAC5') }}</li>
            </ul>
        </article>

    </div>


</template>

<style scoped>


.box{
  max-width: 40rem;
  margin: 0 auto;
}

.dates {
  font-size: 0.85em;
  font-weight: 400;
  color: var(--text-secondary);
  margin-left: 0.3em;
}

.future-options {
  margin-left: 2em;
  list-style-type: disc;
}

</style>
