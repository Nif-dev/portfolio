<script setup lang="ts">
    import { useTranslation } from 'i18next-vue';
    import NavBar from '../components/layout/NavBar.vue';

    const { t } = useTranslation();
</script>

<template>

    <NavBar />
    <section class="section content ml-6">
        <h1 class="title">{{ t('legal:TITLE', 'Mentions légales') }}</h1>

        <article>
            <h2>{{ t('legal:PUBLISHER', 'Éditeur du site') }}</h2>
            <p>Yoann Le Goff</p>
            <p>Email : <a href="mailto:contact@yoann-le-goff.fr">ylg29nifdev@gmail.com</a></p>
        </article>

        <article>
            <h2>{{ t('legal:HOSTING', 'Hébergement') }}</h2>
            <p>
                Ce site est hébergé sur Github-Pages
                <br />
                
            </p>
            
        </article>

        <article>
            <h2>{{ t('legal:COPYRIGHT', 'Propriété intellectuelle') }}</h2>
            <p>
                © {{ new Date().getFullYear() }} Yoann Le Goff - Tous droits réservés.  
                Toute reproduction, même partielle, est interdite sans autorisation.
            </p>
        </article>
    </section>

</template>

<style scoped>
    .section.content {
        max-width: 800px;
        padding: 0 1rem;
        font-family: Arial, sans-serif;
        line-height: 1.6;
        padding-top: 10em;
        background-color: var(--color-dutch-white);
        height: 100vh;
    }

    article {
        margin: 5em auto;
    }

</style>
