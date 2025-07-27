<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import CVProp from '../ui/CVProp.vue';
    

</script>

<template>
    <section id="aboutMe" class="section">
        <div class="columns">
            <div class="column is-align-content-center">
                <h1 class="title bcg-blur mb-6"> {{ t('aboutMe:TITLE') }} </h1>
                <div class="bulleBD  bcg-blur">
                    <p> {{ t('aboutMe:ABOUT_ME_1') }} </p>
                    <br>
                    <p> {{ t('aboutMe:ABOUT_ME_2') }} </p>
                    <br>
                    <p> {{ t('aboutMe:ABOUT_ME_3') }} </p>
                    <br>
                    <p class="has-text-weight-bold"> {{ t('aboutMe:ABOUT_ME_CONCLUSION') }} </p>
                </div>
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
    width: 75%;
    margin: auto;
    padding: 0.5em;
}

.title::before {
    content: "";
    position: absolute;
    bottom: -40px;         /* Hauteur du triangle = border-top ci-dessous */         /* Pour aligner visuellement la flèche sur la bulle */
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 40px solid var(--color-white-transparent);
}

.bcg-blur{
    border-radius: 10px;
    background-color: var(--color-white-transparent);
    color: black;
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
}


</style>

