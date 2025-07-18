<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import CVProp from '../ui/CVProp.vue';
    

</script>

<template>
    <section id="aboutMe" class="section">
        <div class="columns">
            <div class="column about-text  bcg-blur">
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

.about-text{
    text-align: justify;
    height: fit-content;
}
.bcg-blur{
    border-radius: 10px;
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

