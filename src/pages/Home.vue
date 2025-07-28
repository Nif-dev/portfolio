<script setup lang="ts">

    import SeparatorProp from '../components/ui/SeparatorProp.vue';
    import SectionBackground from '../components/layout/SectionBackground.vue';

    import NavBar from '../components/layout/NavBar.vue'
    import HeroBanner from '../components/layout/HeroBanner.vue'
    import AboutMe from '../components/layout/AboutMe.vue'
    import SkillsList from '../components/layout/SkillsList.vue';
    import ProjectsSection from '../components/layout/ProjectsSection.vue';
    import ContactSection from '../components/layout/ContactSection.vue';
    import ScrollToTop from '../components/ui/ScrollToTop.vue';
    import MyFooter from '../components/layout/MyFooter.vue';

</script>


<template>

    <NavBar />

<div class="is-hidden-mobile">
    <SeparatorProp margin="13vh"/>
</div>
<div class="is-hidden-desktop">
    <SeparatorProp margin="3vh"/>
</div>

<div class="main-container mx-auto">
    <HeroBanner />
</div>

<div class="is-hidden-mobile">
    <SeparatorProp margin="20vh"/>
</div>

<div class="is-hidden-desktop">
    <SeparatorProp margin="5vh"/>
</div>

    <SectionBackground color="var(--color-light-sable)" colorDark="var(--color-dark-grey)" margin="">
        <div class="main-container mx-auto">
            <AboutMe />
        </div>
    </SectionBackground>

        <div class="main-container mx-auto">
            <SkillsList />
        </div>
        <SeparatorProp color="var(--color-dutch-white)" color-dark="var(--color-purple-transparent)" margin="0em" size="100px"/>
        

        <div class="main-container mx-auto">
            <ProjectsSection />
        </div>
            <SeparatorProp margin="5em"/>
        <ContactSection />
        <ScrollToTop />

    <MyFooter />

</template>

<style scoped>
    .main-container{
        max-width: 1600px;
    }

</style>

