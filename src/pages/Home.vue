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

<div class="main-container mx-auto">
    <HeroBanner />
</div>

    <SectionBackground color="var(--color-gradient-transparent-to-light-green)" colorDark="var(--color-gradient-transparent-to-grey)"  padding="5rem 0">
        <div class="main-container mx-auto">
            <AboutMe />
        </div>
    </SectionBackground>
    <SectionBackground color="var(--color-gradient-transparent-from-light-green)" colorDark="var(--color-gradient-transparent-from-grey)">
        <div class="main-container mx-auto">
            <SkillsList />
        </div>
    </SectionBackground>
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

