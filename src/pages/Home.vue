<script setup lang="ts">

    import { ref,computed, onMounted } from 'vue';

    import SeparatorProp from '../components/ui/SeparatorProp.vue';

    import NavBar from '../components/layout/NavBar.vue'
    import HeroBanner from '../components/layout/HeroBanner.vue'
    import AboutMe from '../components/layout/AboutMe.vue'
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

    //  Fonction pour créer le style de fond en utilisant le contenu SVG
    function createSvgBgStyle(svgContent: string) {
        const encodedSvg = encodeURIComponent(svgContent);
            return {
                backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
            };
    }

    // Thème actuel
    const theme = ref('light');
    // Mise à jour du thème
    onMounted(() => {
        theme.value = document.documentElement.getAttribute('data-theme') || 'light';
    })
    const observer = new MutationObserver(() => {
        theme.value = document.documentElement.getAttribute('data-theme') || 'light';
    });
    // Observation des changements de thème
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Objet contenant les styles de fond selon le thème
    const backgrounds = computed(() => ({
        aboutMe: theme.value === 'dark' ? createSvgBgStyle(starsDark) : createSvgBgStyle(starsLight),
        skills: theme.value === 'dark' ? createSvgBgStyle(blocksDark) : createSvgBgStyle(blocksLight),
        projects: theme.value === 'dark' ? createSvgBgStyle(trianglesDark) : createSvgBgStyle(trianglesLight),
    }));


    

</script>


<template>

    <NavBar />

    <!-- Hero / image de fond -->
    <div class="main-container mx-auto">
        <HeroBanner />
    </div>

<!-- Section de presentation -->
    <div id="about-me" :style= backgrounds.aboutMe>
        <div class="main-container mx-auto py-6">
            <AboutMe />
        </div>
    </div>

<!-- Section des compétences -->
    <div id="skills" :style= backgrounds.skills>
        <div class="main-container mx-auto py-6">
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

