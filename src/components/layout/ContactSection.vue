<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';
    import ContactLinks from '../ui/ContactLinks.vue';

</script>

<template>
    <section id="contact" class="section is-align-content-center">
        <div class="container ">

            <div class="box">
                <h2 class="title is-4 mb-5 mx-2 has-text-centered"> {{ t('contactMe:SUBTITLE') }} </h2>
                <h1 class="title is-5 mb-3 has-text-centered"> {{ t('contactMe:CTA') }} </h1>
            </div>

            <div class="columns is-centered mb-6">
                <!-- formulaire de contact -->
                <div class="column has-text-centered is-three-fifths">
                    <ContactForm />
                </div>
            </div>
        
            <!-- liens réseaux -->
            <ContactLinks />
        </div>

        
    </section>
</template>

<style scoped>

    #contact{
        min-height: 100vh;
    }

    .contact-title{
        width: fit-content;
    }

    .bcg-blur-white{
        margin: auto;
        padding: 10px;
        margin-bottom: 1.5rem;
    }


</style>