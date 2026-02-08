<script setup lang="ts">

    // Importation des components
    import NavBar from '../components/layout/NavBar.vue';
    import HeroBanner from '../components/layout/HeroBanner.vue';
    import AboutMe from '../components/layout/SectionAboutMe.vue';
    import SectionSkills from '../components/layout/SectionSkills.vue';
    import SectionProjects from '../components/layout/SectionProjects.vue';
    import SectionContact from '../components/layout/SectionContact.vue';
    import MyFooter from '../components/layout/Footer.vue';
    import ScrollToTop from '../components/ui/ScrollToTop.vue';

</script>

<template>

    <NavBar />

    <!-- Hero / image de fond -->
    <section id="hero-banner">
        <HeroBanner />
    </section>

<!-- Section de presentation -->
    <section id="aboutMe" >
        <AboutMe />
    </section>

    <!-- <section id="my-services">
        <MyServices />
    </section> -->

<!-- Section des compétences -->
    <section id="skills" >
        <SectionSkills />
    </section>

<!-- Section des projets -->
    <section id="projects" >
        <SectionProjects />
    </section>

    <!-- Section de contact -->
    <section id="contact">
        <SectionContact />
    </section>

    <!-- Footer et bouton haut de page -->
    <ScrollToTop />
    <MyFooter />

</template>

<style scoped>

    section{
        position: relative;
        max-width: 1600px;
        margin-inline: auto;
        min-height: 100vh;
        top: 3rem;
    }

</style>

