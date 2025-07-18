<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import CVProp from '../ui/CVProp.vue';
    

</script>

<template>
    <section id="aboutMe" class="section">
        <h1 class="title bcg-blur mb-6"> {{ t('aboutMe:TITLE') }} </h1>
        <div class="columns">
            <div class="column bulleBD  bcg-blur">
                <p> {{ t('aboutMe:ABOUT_ME_1') }} </p>
                <br>
                <p> {{ t('aboutMe:ABOUT_ME_2') }} </p>
                <br>
                <p> {{ t('aboutMe:ABOUT_ME_3') }} </p>
                <br>
                <p><strong> {{ t('aboutMe:ABOUT_ME_CONCLUSION') }} </strong></p>
            </div>
            <div class="column">
                <CVProp />
            </div>
        </div>
    </section>
</template>

<style scoped>

.title{
    display: flex;
    justify-content: center;
    text-align: justify;
    height: fit-content;
    align-items: center;
    width: calc(50% - 2em);
    margin: auto;
    padding: 0.5em;
}

.bcg-blur{
    border-radius: 10px;
}

.bulleBD {
    position: relative;           
    border-radius: 50px;
    padding: 1em;
    height: fit-content;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.bulleBD::before {
  content: "";
  position: absolute;
  top: -32px;         /* Hauteur du triangle = border-bottom ci-dessous */
  right: 8em;         /* Pour aligner visuellement la flèche sur la bulle */
  width: 0;
  height: 0;

  border-left: 32px solid transparent;
  border-right: 32px solid transparent;
  border-bottom: 32px solid var(--color-white-transparent);   /* Même couleur que la bulle */
  /* Optionnel pour l'effet BD : une ombre */
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.05));
}

[data-theme="light"] {
    .bcg-blur{
        background-color: var(--color-white-transparent);
    }
    .about-text{
        color: black;
    }
}
</style>

