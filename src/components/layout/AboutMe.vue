<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    const sectionContent = ref<HTMLElement | null>(null);

    const sectionContentVisible = ref(false);

    let observer: IntersectionObserver;

    onMounted(() => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sectionContentVisible.value = true;
                }
            });
        });
        if (sectionContent.value) observer.observe(sectionContent.value);
    });

</script>

<template>
    <section id="aboutMe" class="section">
        
        <div ref = "sectionContent" :class="['container' ,'slide-anim', { 'slide-in': sectionContentVisible }] ">
            <h1 class="title bcg-blur my-6"> {{ t('aboutMe:TITLE') }} </h1>
        </div>
        <div ref = "sectionContent" :class="['container' ,'slide-anim-alt', { 'slide-in': sectionContentVisible }] ">
                <div class="bcg-blur is-size-6">
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
    width: fit-content;
    margin: auto;
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

  /* Animation slide-in */
.slide-anim {
    opacity: 0;
    transform: translateX(-300px);
    transition: opacity 1.7s cubic-bezier(.4,0,.2,1), transform 1.7s cubic-bezier(.4,0,.2,1);
}
.slide-anim-alt {
    opacity: 0;
    transform: translateX(300px);
    transition: opacity 1.7s cubic-bezier(.4,0,.2,1), transform 1.7s cubic-bezier(.4,0,.2,1);
}
.slide-in {
    opacity: 1;
    transform: translateX(0);
}


</style>

