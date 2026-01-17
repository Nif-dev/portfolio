<script setup lang="ts">

    // Importation des components
    import NavBar from '../components/layout/NavBar.vue';
    import HeroBanner from '../components/layout/HeroBanner.vue';
    import AboutMe from '../components/layout/AboutMe.vue';
    import SkillsList from '../components/layout/SkillsList.vue';
    import ProjectsSection from '../components/layout/ProjectsSection.vue';
    import ContactSection from '../components/layout/ContactSection.vue';
    import MyFooter from '../components/layout/MyFooter.vue';
    import ScrollToTop from '../components/ui/ScrollToTop.vue';
    import SeparatorProp from '../components/ui/SeparatorProp.vue';

</script>

<template>

    <NavBar />

    <!-- Hero / image de fond -->
    <div class="main-container mx-auto">
        <HeroBanner />
    </div>

<!-- Section de presentation -->
    <div id="about-me" class="is-align-content-center">
        <div class="main-container mx-auto py-6">
            <AboutMe />
        </div>
    </div>

    <!-- <div id="my-services">
        <div class="main-container mx-auto py-6">
            <MyServices />
        </div>
    </div> -->

<!-- Section des compétences -->
    <div id="skills" >
        <div class="main-container mx-auto py-6" >
            <SkillsList />
        </div>
    </div>

<!-- Section des projets -->
    <div id="projects" >
        <div class="main-container mx-auto py-6">
            <ProjectsSection />
        </div>
    </div>

    <!-- Section de contact -->
    <SeparatorProp color="var(--color-dutch-white)" color-dark="var(--color-purple-transparent)" margin="0em" size="100px"/>
    <ContactSection />

    <!-- Footer et bouton haut de page -->
    <ScrollToTop />
    <MyFooter />

</template>

<style scoped>

    .main-container{
        max-width: 1600px;
    }

    #about-me, #skills, #projects{
        min-height: 1
        0vh;
    }
</style>

