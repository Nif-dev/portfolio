<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'
    const {t} = useTranslation();

    import ContactForm from '../ui/ContactForm.vue';
    import ContactLinks from '../ui/ContactLinks.vue';
    import SeparatorProp from '../ui/SeparatorProp.vue';
    import CVButton from '../ui/CVButton.vue';

</script>

<template>
    <section id="contact" class="section is-align-content-center">
        <div class="container ">

            
            <div class="box">
                <p class="title has-text-centered is-1">{{ t('contactMe:TITLE') }}</p>
                <SeparatorProp size="16px" margin="1em" color="var(--color-light-purple)" colorDark="var(--color-dark-orange)"/>
                <h1 class="title is-4 mb-5 mx-2 has-text-centered"> {{ t('contactMe:SUBTITLE') }} </h1>
                <h2 class="subtitle is-5 mb-3 has-text-centered"> {{ t('contactMe:CTA') }} </h2>
            </div>

                        <!-- CV CTA -->
            <div class="has-text-centered my-4">
                <CVButton />
            </div>
            
            <div class="columns is-centered mb-6">
                
                <!-- formulaire de contact -->
                <div class="column has-text-centered is-three-fifths my-6">
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


</style>