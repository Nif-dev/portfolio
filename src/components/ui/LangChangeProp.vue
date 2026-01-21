<script setup lang="ts">
import { ref, computed } from 'vue';
import i18next, { changeLanguage } from 'i18next';

import frenchFlag from '../../assets/icons/common/frenchFlag.svg';
import englishFlag from '../../assets/icons/common/englishFlag.svg';

    const currentLang = ref(i18next.language);
    i18next.on('languageChanged', (lng) => {
        currentLang.value = lng
    });

    const nextLang = computed(() => currentLang.value === 'fr' ? 'en' : 'fr')

    const currentLangSVG = computed(() => currentLang.value === 'fr' ? frenchFlag : englishFlag)

    function changeLang() {
        changeLanguage(nextLang.value);
    }
</script>
<template>
    <button @click="changeLang" class="lang-prop">
        <img :src="currentLangSVG" alt="Langue" width="30" height="30" />
    </button>
</template>

<style scoped>
    .lang-prop{
        background-color: transparent;
        min-width: 40px;
    }
</style>