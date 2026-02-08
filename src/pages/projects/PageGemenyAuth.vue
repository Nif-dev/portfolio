<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ref,computed } from 'vue'

// DATA IMPORTS
import { gemenyAuth } from '../../data/projects/gemenyAuth'

import { useThemedSvgBackground } from '../../lib/useThemedBackground';
import simpleStripeSVGDark from '../../assets/background/dark/subtle-stripes.svg?raw';
import simpleStripeSVGLight from '../../assets/background/light/subtle-stripes.svg?raw';

    import dwwmLink_2 from '../../assets/Diapo-soutenance-DWWM.pdf';
    import dwwmLink_1 from '../../assets/Dossier-projets-Yoann_Le_Goff.pdf';

import NavBar from '../../components/layout/NavBar.vue'
import ScrollToTop from '../../components/ui/ScrollToTop.vue'
import MyFooter from '../../components/layout/Footer.vue'
import SkillIcons from '../../components/ui/skillsIcons.vue'
import SeparatorProp from '../../components/ui/SeparatorProp.vue'

const { t } = useTranslation()
const activeTab = ref<'gestion' | 'design' | 'code'>('gestion')

const simpleStripeSVG = useThemedSvgBackground(simpleStripeSVGLight, simpleStripeSVGDark);
const background = computed(() => ({ simpleStripe:simpleStripeSVG.value }));

</script>

<template>
<div :style="background.simpleStripe">

        <NavBar />
        
        <section class="section main-container mx-auto has-text-centered">
            
            <!-- le titre de la page -->
            <div class="block hero  ">
                <h1 class="title"> {{ gemenyAuth.name }} </h1>
                <h2 class="subtitle mb-6">
                    {{ t(`projects:${gemenyAuth.localesName}.DESCRIPTION`) }}
                </h2>
            </div>
            
            <!-- les skills -->
            <div class="block is-vcentered">
        <h1 class="title"> {{ t('projects:PROJECT_SKILLS') }} </h1>
        <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
            <div v-for="skill in gemenyAuth.allLinkedSkills" :key="skill.name" class="m-4">
            <SkillIcons :skill="skill" :hoverable="true" :desc="true" />
            </div>
        </div>
            </div>

            <!-- soutenance + CTA -->
            <div class="block is-vcentered">
                <h1 class="title">
                    {{ t(`projects:${gemenyAuth.localesName}.DWWM_TITLE`) }}
                </h1>
                <h2 class="subtitle">
                    {{ t(`projects:${gemenyAuth.localesName}.DWWM_DESCRIPTION`) }}
                </h2>
                <div class="buttons is-centered mt-4">
                    <a class="button is-link" :href="dwwmLink_1" target="_blank" rel="noopener">
                        {{ t(`projects:${gemenyAuth.localesName}.DWWM_LINK_1`) }}
                    </a>
                    <a class="button is-link" :href="dwwmLink_2" target="_blank" rel="noopener">
                        {{ t(`projects:${gemenyAuth.localesName}.DWWM_LINK_2`) }}
                    </a>
                </div>
            </div>
        <SeparatorProp color="#0070a3" margin="3em" />

        <div class="block columns is-vcentered">
        <div class="column">
            <img :src="gemenyAuth.images[0]" :alt="gemenyAuth.name" />
        </div>
        <div class="column has-text-centered">
            <h1 class="title">{{ t(`projects:${gemenyAuth.localesName}.COMPANY_NAME`) }}</h1>
            <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.COMPANY_DESCRIPTION`) }}</h2>
        </div>
        </div>

        <div class="block columns is-vcentered">
            <div class="column has-text-centered">
            <h1 class="title">{{ t(`projects:${gemenyAuth.localesName}.API_TITLE`) }}</h1>
            <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.API_DESCRIPTION`) }}</h2>
        </div>
        <div class="column">
            <img :src="gemenyAuth.images[1]" :alt="gemenyAuth.name" />
        </div>
        </div>

        <SeparatorProp color="#0070a3" margin="3em"/>

        <div class="block columns is-vcentered">
        <div class="column has-text-centered">
            <h1 class="title">{{ t(`projects:${gemenyAuth.localesName}.DIPLOMA_TITLE`) }}</h1>
            <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.DIPLOMA_DESCRIPTION`) }}</h2>
        </div>
        <div class="column">
            <img :src="gemenyAuth.images[2]" :alt="gemenyAuth.name" />
        </div>
        </div>

        <!-- objectifs -->
        <div class="block columns is-vcentered">
        <div class="column">
            <img :src="gemenyAuth.images[3]" alt="objectifs" class="is-hidden-touch image"/>
            <img :src="gemenyAuth.images[3]" alt="objectifs" class="is-hidden-desktop"/>
        </div>
        <div class="column has-text-justified ">
            <h1 class="title has-text-centered">{{ t(`projects:${gemenyAuth.localesName}.OBJECTIVES`) }}</h1>
            <div class="content is-size-5">
            <ul>
                <li>{{ t(`projects:${gemenyAuth.localesName}.OBJECTIVE_1`) }}</li>
                <li>{{ t(`projects:${gemenyAuth.localesName}.OBJECTIVE_2`) }}</li>
                <li>{{ t(`projects:${gemenyAuth.localesName}.OBJECTIVE_3`) }}</li>
                <li>{{ t(`projects:${gemenyAuth.localesName}.OBJECTIVE_4`) }}</li>
                <li>{{ t(`projects:${gemenyAuth.localesName}.OBJECTIVE_5`) }}</li>
            </ul>
            </div>
        </div>
        </div>

        <SeparatorProp color="#0070a3" margin="3em"/>

        <!-- tabs -->
        <h1 class="block title mb-3">{{ t(`projects:${gemenyAuth.localesName}.ENVIRONMENT_TITLE`) }}</h1>
        <div class="block is-vcentered">
        <div class="tabs is-boxed is-fullwidth is-medium tabs-header">
            <ul>
                <li :class="{ 'is-active': activeTab === 'gestion' }">
                <a @click="activeTab = 'gestion'"><span>Gestion</span></a>
            </li>
            <li :class="{ 'is-active': activeTab === 'design' }">
                <a @click="activeTab = 'design'"><span>Design</span></a>
            </li>
            <li :class="{ 'is-active': activeTab === 'code' }">
                <a @click="activeTab = 'code'"><span>Code</span></a>
            </li>
            </ul>
        </div>

        <div class="box tabs-content">
            <div v-if="activeTab === 'gestion'">
            <div class="block columns is-vcentered">
                <div class="column has-text-centered">
                <h2 class="title">{{ t(`projects:${gemenyAuth.localesName}.ORGANISATION_TITLE`) }}</h2>
                <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.ORGANISATION_DESCRIPTION`) }}</h2>
                <div class="m-6"></div>
                <h1 class="title mt-5">{{ t(`projects:${gemenyAuth.localesName}.DEPLOYMENT_TITLE`) }}</h1>
                <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.DEPLOYMENT_DESCRIPTION`) }}</h2>
                </div>
                <div class="column-separator"></div>
                <div class="column">
                    <img :src="gemenyAuth.images[5]" alt="gestion" class="kanban-img"/>
                </div>
            </div>
            </div>

            <div v-if="activeTab === 'design'">
            <div class="block columns is-vcentered">
                <div class="column has-text-centered">
                <h1 class="title">{{ t(`projects:${gemenyAuth.localesName}.DESIGN_TITLE`) }}</h1>
                <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.DESIGN_DESCRIPTION`) }}</h2>
                </div>
                <div class="column-separator"></div>
                <div class="column">
                <img :src="gemenyAuth.images[4]" alt="design" class="design-img"/>
                </div>
            </div>
            </div>

            <div v-if="activeTab === 'code'">
            <div class="block columns is-vcentered">
                <div class="column has-text-justified">
                <h1 class="title">{{ t(`projects:${gemenyAuth.localesName}.STRUCTURE_TITLE`) }}</h1>
                <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.STRUCTURE_DESCRIPTION`) }}</h2>
            </div>
            <div class="column-separator"></div>
                <div class="column has-text-justified">
                <img :src="gemenyAuth.images[6]" alt="tree">
                </div>
            </div>
            <div class="block columns is-vcentered">
                <div class="column-separator"></div>
                <div class="column has-text-justified">
                <h1 class="title">{{ t(`projects:${gemenyAuth.localesName}.REALISATION_TITLE`) }}</h1>
                <h2 class="subtitle">{{ t(`projects:${gemenyAuth.localesName}.REALISATION_DESCRIPTION`) }}</h2>
            </div>
        </div>
    </div>
</div>
</div>
        </section>
        
    <ScrollToTop />
    <MyFooter />
</div>
</template>

<style scoped>
    .main-container { 
        max-width: 1600px; 
    }

    .tabs-header{
        margin-bottom: 0px;
    }
    .tabs-content{
        margin-top: 0px;
        min-height: 60vh;
        border-top-left-radius: 0%;
        border-top-right-radius: 0%;
    }

.kanban-img, .design-img { max-height: 400px; }
.section { padding-top: 10em; }
.column-separator { width: 10px; margin-inline: 2rem; }
</style>
