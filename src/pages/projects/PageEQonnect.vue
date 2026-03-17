<script setup lang="ts">
    import { eQonnect } from '../../data/projects/eQonnect';

    import NavBar from '../../components/layout/NavBar.vue'
    import ScrollToTop from '../../components/ui/ScrollToTop.vue'
    import MyFooter from '../../components/layout/Footer.vue'
    import SkillIcons from '../../components/ui/SkillsIcons.vue'
    import SeparatorProp from '../../components/ui/SeparatorProp.vue'

    import ImageViewer from '../../components/ui/ImageViewer.vue';
    const images = eQonnect.images
    
</script>



<template>

    <NavBar />

    <section class="section main-container mx-auto">

        <!-- les skills -->
        <div class="block is-vcentered mt-6">
            <h1 class="title">
                {{ eQonnect.name }}
            </h1>
        </div>
        <div class="block is-vcentered mt-6">
            <h1 class="title">
                    Zone de test img zoom on click
                </h1>
        </div> 
<SeparatorProp color="#095b16" />
<div v-for="image in images" :key="image">
    <ImageViewer :src="image" size="20rem" :alt="eQonnect.name" />

</div>


<SeparatorProp color="#095b16" />

        <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
            <div v-for="skill in eQonnect.allLinkedSkills" :key="skill.name" class="m-4">
                <SkillIcons :skill="skill" :hoverable="true" :desc="true"></SkillIcons>
            </div>
        </div>
    </section>

    <ScrollToTop />
    <MyFooter />

</template>

<style scoped>
    /* décollement du header */
    .section{
        padding-top: 10em;
    }
    .main-container{
        max-width: 1600px;
    }

</style>