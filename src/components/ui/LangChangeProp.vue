<script setup lang="ts">
import { ref } from 'vue';
import i18next, { changeLanguage } from 'i18next';

import frenchFlag from '../../assets/icons/common/frenchFlag.svg';
import englishFlag from '../../assets/icons/common/englishFlag.svg';
// import spanishFlag from '../../assets/icons/common/spanishFlag.svg';

const availableLanguages = [
    { code: 'fr', flag: frenchFlag, name: 'fr' },
    { code: 'en', flag: englishFlag, name: 'en' },
//   { code: 'es', flag: spanishFlag, name: 'es' }
];

const currentLang = ref(i18next.language);

const currentFlag = ref(availableLanguages.find(l => l.code === currentLang.value)?.flag || frenchFlag);

i18next.on('languageChanged', (lng) => {
    currentLang.value = lng;
});


const changeLang = (newLangCode: string) => {
    // fonction i18next pour changer la langue
    changeLanguage(newLangCode);
    // fonction custom de mise a jour de l'icone drapeau
    changeCurrentFlag(newLangCode);
};

const changeCurrentFlag = (newLangCode: string) => {
    currentFlag.value = availableLanguages.find(l => l.code === newLangCode)?.flag || frenchFlag
}

</script>

<template>
    <div class="dropdown is-hoverable is-centered language-dropdown">
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="language-dropdown">
                <span class="icon is-small">
                <img :src="currentFlag" alt="Langue actuelle" width="24" height="18" />
                </span>
            </button>
        </div>
        <div class="dropdown-menu compact-dropdown" id="language-dropdown" role="menu">
            <div class="dropdown-content">
                <a v-for="lang in availableLanguages" :key="lang.code" class="dropdown-item" :class="{ 'is-active': currentLang === lang.code }" @click="changeLang(lang.code)">
                <span class="icon is-small mr-3">
                    <img :src="lang.flag" alt="Drapeau" width="20" height="15" />
                </span>
                {{ lang.name.toUpperCase() }}
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .compact-dropdown {
        min-width: 5rem !important;
        max-width: 5rem !important;
    }

    .language-dropdown {
        min-width: 2rem;
    }

    img {
        display: block;
    }

    .dropdown-item {
        display: flex !important;
        align-items: center;
    }

</style>
