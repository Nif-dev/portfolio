<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import SeparatorProp from '../ui/SeparatorProp.vue';
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
        
        <div class="container">

            <div class="box">
                <article class="">
                    <p class="title"> {{ t('aboutMe:TITLE') }}</p>
                    <SeparatorProp size="16px" margin="1em" color="var(--color-light-purple)" colorDark="var(--color-dark-orange)"/>
                </article>
            </div>
        </div>

        <div ref = "sectionContent" :class="['container' ,'slide-anim-alt', { 'slide-in': sectionContentVisible }] ">
            <div class="box">
                <article>
                    <p> {{ t('aboutMe:ABOUT_ME_1') }} </p>
                    <br>
                    <p> {{ t('aboutMe:ABOUT_ME_2') }} </p>
                    <br>
                    <p> {{ t('aboutMe:ABOUT_ME_3') }} </p>
                </article>
            </div>
        </div>

        <div ref = "sectionContent" :class="['container' ,'slide-anim', { 'slide-in': sectionContentVisible }] ">
            <div class="box">
                <article class="is-size-6">
                    <p class="has-text-weight-bold"> {{ t('aboutMe:ABOUT_ME_CONCLUSION') }} </p>
                    <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>
                </article>
            </div>
        </div>


    </section>

</template>

<style scoped>
    .box{
        margin: 2rem 0
    }

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

