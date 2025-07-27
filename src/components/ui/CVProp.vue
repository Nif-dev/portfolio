<script setup lang="ts">

    import { ref,watch } from 'vue';

    import CVjpg from '../../assets/img/common/CV-ylg.jpg';

    import CVpdf from '../../assets/CV_Alternance_CDA_YLG.pdf' ;

    import { useTranslation } from 'i18next-vue';
    const { t } = useTranslation('');

    const showZoom = ref(false);

    watch(showZoom, (val) => {
        if (val) {
            document.body.classList.add('body-modal-open');
        } else {
            document.body.classList.remove('body-modal-open');
        }
    });


</script>

<template>
    <div class="card">
        <div class="card-image">
            <p class="card-header-title is-flex is-justify-content-center mb-0"> {{ t('aboutMe:CV') }}</p>
            <p class="has-text-centered has-text-danger has-text-weight-bold">{{ t('errors:FRENCH_ONLY') }}</p>
        
            <figure class="image miniature my-5"
                style="position: relative;"
                @click="showZoom = true"
            >
                <img :src="CVjpg" alt="CV Icon" />
            </figure>

            </div>
            <div class="card-footer">
                <a :href="CVpdf" class="card-footer-item" target="_blank" rel="noreferrer">
                    {{ t('aboutMe:CV_PDF') }}
                </a>
            <button class="card-footer-item" @click="showZoom = true">
                {{ t('aboutMe:CV_ZOOM') }}
            </button>
        </div>
    </div>

    <!-- Modal Zoom -->
    <Teleport to="body">
    <div v-if="showZoom" class="modal is-active">
        <div class="modal-background" @click="showZoom = false"></div>
        <div class="modal-content scrollable-modal">
        <img
            :src="CVjpg"
            alt="Curriculum Vitae"
        />
        </div>
        <button class="modal-close is-large" @click="showZoom = false" aria-label="close"></button>
    </div>
    </Teleport>

</template>

<style scoped>

.modal-content.scrollable-modal img {
    max-width: 100%;
    height: auto;
    display: block;
}

.card-footer-item {
    text-decoration: none !important;
    color: inherit !important;

}

.miniature {
  /* Le conteneur de l'image */

    display: block;
    width: 90%;
    border-radius: 30px 30px 30px 30px; 
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    cursor: zoom-in;
    margin: 0 auto;
}


.image {
    overflow: hidden;
}

.modal-content.scrollable-modal {
    max-height: 100vh;
    max-width: 80%;
    width: auto;
    display: block;
    margin: 0 auto;
}
.modal.is-active {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scrollable-modal {
    overflow-y: auto;
    overflow-x: hidden;
    /* Masquer scrollbar pour Firefox */
    scrollbar-width: thin;
    /* Masquer scrollbar pour Chrome, Edge, Safari */
    -ms-overflow-style: thin;
}
.scrollable-modal::-webkit-scrollbar {
    display: thin; 
    /* Chrome, Safari et Opera */
}

</style>
