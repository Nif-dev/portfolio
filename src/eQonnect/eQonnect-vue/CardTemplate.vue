<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import CardFormat from './CardFormat.vue'

import type { CardData, TemplateType } from '../EQonnectTypes.ts'

const props = defineProps<{
    cardData: CardData
}>()

// Mapping template → composant (lazy)
const getTemplateComponent = (template: TemplateType) => {
    const components = {
        simple: defineAsyncComponent(() => import('./templates/TemplateSimple.vue')),
        pro: defineAsyncComponent(() => import('./templates/TemplatePro.vue')),
        hexagon: defineAsyncComponent(() => import('./templates/TemplateHexagon.vue')),
    }
    
  return components[template] || components.simple // fallback
}

const TemplateComponent = computed(() => getTemplateComponent(props.cardData.template))
</script>

<template>
    <CardFormat >
        <Suspense>
        <template #default>
            <component :is="TemplateComponent" :card-data="cardData" />
        </template>
        <template #fallback>
            <div class="loading">Chargement template...</div>
        </template>
        </Suspense>
    </CardFormat>
</template>
