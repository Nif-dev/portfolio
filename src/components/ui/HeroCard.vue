<script setup lang="ts">

    import {useTranslation} from 'i18next-vue'

    import logo from '../../assets/img/common/404-fox.png';

    const {t} = useTranslation();

    const logoNif = logo; 

</script>

<template>
    <div class="box">
        <article class="media is-hidden-mobile">
            <div class="media-left">
                <figure class="image is-128x128">
                    <img :src=logoNif alt="" />
                </figure>
            </div>

            <div class="media-content">
                <div class="content">
                    <div class="subtitle has-text-weight-bold">
                    <p class="is-size-4">
                        Yoann Le Goff 
                    </p>
                    <p class="mr-6"><small> {{ t('aboutMe:DIPLOMA') }} </small>
                    </p>
                    </div>
                </div>
            </div>
        </article>

        <article class="media is-hidden-tablet noBorderTop">
            <div class="media-left">
                <figure class="image is-96x96">
                    <img :src=logoNif alt="" />
                </figure>
            </div>

            <div class="media-content">
                <div class="content">
                    <div class="subtitle has-text-weight-bold">
                        <p class="is-size-4">
                            Yoann Le Goff 
                        </p>
                        <p class="mr-6"><small> {{ t('aboutMe:DIPLOMA') }} </small>
                        </p>
                    </div>
                </div>
            </div>
        </article>

    </div>
</template>