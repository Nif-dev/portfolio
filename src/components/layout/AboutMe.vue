<!-- src/components/layout/AboutMe.vue -->

<script setup lang="ts">

    import SeparatorProp from '../ui/SeparatorProp.vue';
    import { ref, onMounted } from 'vue';
    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    const section1 = ref<HTMLElement | null>(null);
    const section2 = ref<HTMLElement | null>(null);
    const section3 = ref<HTMLElement | null>(null);

    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);

    onMounted(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            if (entry.target === section1.value) visible1.value = true;
            if (entry.target === section2.value) visible2.value = true;
            if (entry.target === section3.value) visible3.value = true;
            });
        });

        if (section1.value) observer.observe(section1.value);
        if (section2.value) observer.observe(section2.value);
        if (section3.value) observer.observe(section3.value);
        });

</script>

<template>
    <section id="aboutMe" class="section">
        
        <div class="container has-text-centered">

            <div class="box">
                <article class="">
                    <p class="title"> {{ t('aboutMe:TITLE') }}</p>
                    <SeparatorProp size="16px" margin="1em" color="var(--color-light-purple)" colorDark="var(--color-dark-orange)"/>
                </article>
            </div>

            <div ref = "section1" :class="['container' ,'slide-anim-alt', { 'slide-in': visible1 }] ">
                <div class="box small-box">
                    <article class="is-size-5">
                        <p> {{ t('aboutMe:ABOUT_ME_1') }} </p>
                        <p> {{ t('aboutMe:ABOUT_ME_2') }} </p>
                    </article>
                </div>
            </div>
            
            <div ref = "section2" :class="['container' ,'slide-anim', { 'slide-in': visible2 }] ">
                <div class="box small-box">
                    <article class="is-size-5">
                        <span> {{ t('aboutMe:ABOUT_ME_3') }} </span>
                        <p class="is-italic"> {{ t('aboutMe:ABOUT_ME_4') }} </p>
                    </article>
                </div>
            </div>
            
            <div ref = "section3" :class="['container' ,'slide-anim', { 'slide-in': visible3 }] ">
                <div class="box small-box">
                    <article class="is-size-4">
                        <p class="has-text-weight-bold"> {{ t('aboutMe:ABOUT_ME_CONCLUSION') }} </p>
                        <SeparatorProp size="8px" margin="1em" color="var(--color-orange)" colorDark="var(--color-purple)"/>
                        <p> {{ t('aboutMe:ABOUT_ME_CTA') }}</p>
                    </article>
                </div>
            </div>

        </div>

    </section>

</template>

<style scoped>

    .small-box{
        max-width: 50rem;
        margin:0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }   

.title{
    display: flex;
    justify-content: center;
    text-align: justify;
    align-items: center;
    width: fit-content;
    margin: auto;
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

