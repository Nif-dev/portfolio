<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';
    import ContactLinks from '../ui/ContactLinks.vue';

</script>

<template>
    <section id="contact" class="section is-align-content-center">
        <div class="container ">

            <div class="has-text-centered ">
                <div class="bcg-blur">
                    <h2 class="title is-4 mb-5"> {{ t('contactMe:SUBTITLE') }} </h2>
                    <h1 class="title is-5 mb-3"> {{ t('contactMe:CTA') }} </h1>
                </div>
            </div>

            <div class="columns is-centered ">
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
.bcg-blur{
    margin: auto;
    padding: 10px;
}


</style>