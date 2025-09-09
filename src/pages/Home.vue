<script setup lang="ts">

    import { useThemedSvgBackground } from '../lib/useThemedBackground';
    import { computed } from 'vue';

    import SeparatorProp from '../components/ui/SeparatorProp.vue';

    import NavBar from '../components/layout/NavBar.vue';
    import HeroBanner from '../components/layout/HeroBanner.vue';
    import AboutMe from '../components/layout/AboutMe.vue';
    import SkillsList from '../components/layout/SkillsList.vue';
    import ProjectsSection from '../components/layout/ProjectsSection.vue';
    import ContactSection from '../components/layout/ContactSection.vue';
    import ScrollToTop from '../components/ui/ScrollToTop.vue';
    import MyFooter from '../components/layout/MyFooter.vue';


    import blocksLight from '../assets/background/light/pattern-randomized.svg?raw';
    import trianglesLight from '../assets/background/light/repeating-triangles.svg?raw';
    import starsLight from '../assets/background/light/endless-constellation.svg?raw';

    import blocksDark from '../assets/background/dark/pattern-randomized.svg?raw';
    import trianglesDark from '../assets/background/dark/repeating-triangles.svg?raw';
    import starsDark from '../assets/background/dark/endless-constellation.svg?raw';

    // Traitement des fonds selon le thème
    const aboutMeBg = useThemedSvgBackground(starsLight, starsDark);
    const projectsBg = useThemedSvgBackground(trianglesLight, trianglesDark);
    const unusedBlocksBg = useThemedSvgBackground(blocksLight, blocksDark);

    // Objet contenant les styles de fond selon le thème
    const backgrounds = computed(() => ({
    aboutMe: aboutMeBg.value,
    projects: projectsBg.value,
    unusedBlocks: unusedBlocksBg.value,
    }));
</script>

<template>

    <NavBar />

    <!-- Hero / image de fond -->
    <div class="main-container mx-auto">
        <HeroBanner />
    </div>

<!-- Section de presentation -->
    <div id="about-me" :style= backgrounds.projects class="is-align-content-center">
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
    <div id="skills" :style= backgrounds.projects>
        <div class="main-container mx-auto py-6" >
            <SkillsList />
        </div>
    </div>

<!-- Section des projets -->
    <div id="projects" :style= backgrounds.projects>
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
    min-height: 110vh;
}
</style>

