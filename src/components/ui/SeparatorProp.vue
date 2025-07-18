<!-- src/components/ui/SeparatorProp.vue -->
<template>
  <div
    class="separator"
    :style="{
      '--separator-color': separatorColor,
      '--separator-size': separatorSize,
      '--separator-margin': separatorMargin,
    }"
  ></div>
</template>

<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from 'vue';

const theme = ref<'light' | 'dark'>('light');

function updateTheme() {
  theme.value =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light';
}

onMounted(() => {
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  updateTheme();
  onUnmounted(() => observer.disconnect());
});

const props = defineProps<{
  color?: string
  colorDark?: string
  size?: string
  margin?: string
}>()

const separatorSize = computed(()=> props.size || '15px');

const separatorMargin = computed(()=> props.margin || '1em');

const separatorColor = computed(() => {
  if (theme.value === 'dark' && props.colorDark)
    return props.colorDark;
  return props.color;
});

</script>

<style scoped>
.separator {
  border: 0;
  height: var(--separator-size);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--separator-color),
    rgba(0, 0, 0, 0)
  );
  margin-top: var(--separator-margin);
  margin-bottom: var(--separator-margin);
  width: 100%;

  position: relative;
}

[data-theme="dark"] .separator {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--separator-color),
    rgba(0, 0, 0, 0)
  );
}
</style>
