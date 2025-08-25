<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'

    import SeparatorProp from './SeparatorProp.vue';
    import logo from '../../assets/img/common/404-fox.png';

    const {t} = useTranslation();

    const logoNif = logo; 

</script>

<template>

    <div class="box is-hidden-mobile">
        <article class="media is-hidden-mobile">
            <div class="media-left">
                <figure class="image is-128x128">
                    <img :src=logoNif alt="" />
                </figure>
            </div>

            <div class="media-content">
                <div class="content">
                    <div class="subtitle has-text-weight-bold">
                    <p class="is-size-3 ml-6">
                        Yoann Le Goff 
                    </p>
                    <SeparatorProp color="var(--color-orange)" size="12px"/>
                    <p class="mr-6 is-size-4 has-text-centered"><small> {{ t('aboutMe:DIPLOMA') }} </small>
                    </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
    <div class="box is-hidden-tablet mt-6">
        <article class="media is-hidden-tablet">
            <div class="media-left">
                <figure class="image is-96x96">
                    <img :src=logoNif alt="" />
                </figure>
            </div>

            <div class="media-content">
                <div class="content">
                    <div class="subtitle has-text-weight-bold">
                        <p class="is-size-5">
                            Yoann Le Goff 
                        </p>
                        
                    <SeparatorProp color="var(--color-orange)" size="12px" />
                        <p class="mr-6 is-size-6"><small> {{ t('aboutMe:DIPLOMA') }} </small>
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
</style>