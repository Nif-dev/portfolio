<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'

    import SeparatorProp from './SeparatorProp.vue';
    import logo from '../../assets/img/common/nif-dev-128.png';

    const {t} = useTranslation();

    const logoNif = logo; 

</script>

<template>

    <!-- Desktop -->
    <div class="box is-hidden-touch">
        <article class="media">
            <div class="media-left">
                <figure class="image is-128x128">
                    <img :src=logoNif alt="" />
                </figure>
            </div>
            <div class="media-content">
                <div class="content has-text-centered">
                    <div class="subtitle has-text-weight-bold">
                        <p class="mr-6 is-size-3">
                            <span> Yoann </span>
                            <span class="nif-brand"> 'Nif' </span>
                            <span> Le Goff </span>
                        </p>
                    <SeparatorProp color="var(--color-orange)" size="12px"/>
                    <p class="mr-6 is-size-4"><small> {{ t('aboutMe:DIPLOMA') }} </small>
                    </p>
                    </div>
                </div>
            </div>
        </article>
    </div>

    <!-- Mobile -->
    <div class="box is-hidden-desktop mt-6">
        <article class="media">
            <div class="media-left">
                <figure class="image is-96x96">
                    <img :src=logoNif alt="" />
                </figure>
            </div>
            <div class="media-content">
                <div class="content has-text-centered">
                    <div class="subtitle has-text-weight-bold is-size-5">
                        <p class="mr-4 is-size-5">
                            <span> Yoann </span>
                            <span class="nif-brand"> 'Nif' </span>
                            <span class="no-space"> Le Goff </span>
                        </p>
                        
                    <SeparatorProp color="var(--color-orange)" size="12px" />
                        <p class="mr-4 is-size-6"><small> {{ t('aboutMe:DIPLOMA') }} </small>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>

</template>

<style scoped>
    .box{
        max-width: 40rem;
        margin: 0 auto;
    }

    .nif-brand{
        font-family: 'JetBrains Mono', 'SF Mono', 'Roboto Mono', monospace;
        color: var(--color-light-purple);
    }

    .no-space{
        white-space: nowrap;
        display: inline;
    }
</style>