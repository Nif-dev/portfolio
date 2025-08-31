<script setup lang="ts">
  import { useTranslation } from 'i18next-vue'
  import { computed } from 'vue'

  import { portfolio } from '../../data/projects/portfolio'
  import { useThemedSvgBackground } from '../../lib/useThemedBackground'

  import simpleStripeSVGDark from '../../assets/background/dark/subtle-stripes.svg?raw'
  import simpleStripeSVGLight from '../../assets/background/light/subtle-stripes.svg?raw'

  import constellationSVGDark from '../../assets/background/dark/endless-constellation.svg?raw'
  import constellationSVGLight from '../../assets/background/light/endless-constellation.svg?raw'

  import hexagonsSVGDark from '../../assets/background/dark/hexagons.svg?raw'
  import hexagonsSVGLight from '../../assets/background/light/hexagons.svg?raw'

  import meteorSVGDark from '../../assets/background/dark/meteor.svg?raw'
  import meteorSVGLight from '../../assets/background/light/meteor.svg?raw'

  import randomizedSVGDark from '../../assets/background/dark/pattern-randomized.svg?raw'
  import randomizedSVGLight from '../../assets/background/light/pattern-randomized.svg?raw'

  import trianglesSVGDark from '../../assets/background/dark/repeating-triangles.svg?raw'
  import trianglesSVGLight from '../../assets/background/light/repeating-triangles.svg?raw'

  import simpleGreenSVGDark from '../../assets/background/dark/simple-green.svg?raw'
  import simpleGreenSVGLight from '../../assets/background/light/simple-green.svg?raw'


  import NavBar from '../../components/layout/NavBar.vue'
  import ScrollToTop from '../../components/ui/ScrollToTop.vue'
  import MyFooter from '../../components/layout/MyFooter.vue'
  import SeparatorProp from '../../components/ui/SeparatorProp.vue'

  const { t } = useTranslation()

  const simpleStripeSVG = useThemedSvgBackground(simpleStripeSVGLight, simpleStripeSVGDark);
  const hexagonsSVG = useThemedSvgBackground(hexagonsSVGLight, hexagonsSVGDark);
  const trianglesSVG = useThemedSvgBackground(trianglesSVGLight, trianglesSVGDark);
  const meteorSVG = useThemedSvgBackground(meteorSVGLight, meteorSVGDark);
  const constellationSVG = useThemedSvgBackground(constellationSVGLight, constellationSVGDark);
  const randomizedSVG = useThemedSvgBackground(randomizedSVGLight, randomizedSVGDark);
  const simpleGreenSVG = useThemedSvgBackground(simpleGreenSVGLight, simpleGreenSVGDark);

  const background = computed(() => ({ 
    simpleStripe: simpleStripeSVG.value,
    hexagons: hexagonsSVG.value,
    triangles: trianglesSVG.value,
    meteor: meteorSVG.value,
    constellation: constellationSVG.value,
    randomized: randomizedSVG.value,
    simpleGreen: simpleGreenSVG.value
    
  }));

</script>

<template>
  <NavBar />
  <div :style= background.simpleGreen>

    <section class="section main-container mx-auto has-text-centered">

      <div class="block">
        <h1 class="title">{{ portfolio.name }}</h1>
        <h2 class="subtitle mb-6">
          {{ t(`projects:${portfolio.localesName}.DESCRIPTION`) }}
        </h2>
      </div>

      <SeparatorProp color="var(--color-dark-orange-transparent)" color-dark="var(--color-dark-grey)" />

      <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.GOAL_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.GOAL_DESCRIPTION`) }}</h2>
      </div>
      
      <SeparatorProp color="var(--color-dark-orange-transparent)" color-dark="var(--color-dark-grey)" />
      
      <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.ORGANISATION_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.ORGANISATION_DESCRIPTION`) }}</h2>
      </div>

      <SeparatorProp color="var(--color-dark-orange-transparent)" color-dark="var(--color-dark-grey)" />

      <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.ENVIRONMENT_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.ENVIRONMENT_DESCRIPTION`) }}</h2>
      </div>

      <SeparatorProp color="var(--color-dark-orange-transparent)" color-dark="var(--color-dark-grey)" />
      
      <!-- <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.UX_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.UX_DESCRIPTION`) }}</h2>
      </div> -->

      <!-- <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.MAINTAIN_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.MAINTAIN_DESCRIPTION`) }}</h2>
      </div> -->
      
      <!-- <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.SEO_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.SEO_DESCRIPTION`) }}</h2>
      </div> -->
      
      <!-- <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.DOWNLOADS_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.DOWNLOADS_DESCRIPTION`) }}</h2>
      </div> -->
      
      <div class="block">
        <h1 class="title">{{ t(`projects:${portfolio.localesName}.DEPLOY_TITLE`) }}</h1>
        <h2 class="subtitle">{{ t(`projects:${portfolio.localesName}.DEPLOY_DESCRIPTION`) }}</h2>
      </div>
    </section>
    
    <ScrollToTop />
    <MyFooter />
  </div>

</template>

<style scoped>
.block { margin: 2em; }
.main-container { max-width: 1600px; }
.section { padding-top: 8em; min-height: 100vh; }
</style>
