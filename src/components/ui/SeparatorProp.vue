<!-- src/components/ui/SeparatorProp.vue -->
<template>
  <div
    class="separator"
    :style="{
      '--separator-color': separatorColor
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
}>()

const separatorColor = computed(() => {
  if (theme.value === 'dark' && props.colorDark)
    return props.colorDark;
  return props.color;
});

</script>

<style scoped>
.separator {
  border: 0;
  height: 15px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--separator-color),
    rgba(0, 0, 0, 0)
  );
  margin-top: 2em;
  margin-bottom: 2em;
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
