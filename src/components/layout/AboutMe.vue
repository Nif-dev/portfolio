<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import SeparatorProp from '../ui/SeparatorProp.vue';
    

</script>

<template>
    <section id="aboutMe" class="section">
        <div class="">

                
                <SeparatorProp size="3rem" />
                <h1 class="title bcg-blur my-6"> {{ t('aboutMe:TITLE') }} </h1>
                <div class="bcg-blur is-size-5">
                    <p> {{ t('aboutMe:ABOUT_ME_1') }} </p>
                    <br>
                    <p> {{ t('aboutMe:ABOUT_ME_2') }} </p>
                    <br>
                    <p> {{ t('aboutMe:ABOUT_ME_3') }} </p>
                    <br>
                    <p class="has-text-weight-bold"> {{ t('aboutMe:ABOUT_ME_CONCLUSION') }} </p>
                </div>
            </div>

    </section>

</template>

<style scoped>

.title{
    display: flex;
    justify-content: center;
    text-align: justify;
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
}

.bcg-blur{
    border-radius: 30px;
    background-color: var(--color-white-transparent);
    color: black;
    position: relative;           
    padding: 1em;
    height: fit-content;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}


</style>

