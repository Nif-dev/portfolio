import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

export function useThemedSvgBackground(lightSvg: string, darkSvg: string) {
  const theme = ref('light');

  function createSvgBgStyle(svgContent: string) {
    const encodedSvg = encodeURIComponent(svgContent);
    return {
      backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto',
    };
  }

  let observer: MutationObserver | null = null;

  onMounted(() => {
    theme.value = document.documentElement.getAttribute('data-theme') || 'light';

    observer = new MutationObserver(() => {
      // Utilisation de nextTick pour assurer la réactivité Vue
      nextTick(() => {
        theme.value = document.documentElement.getAttribute('data-theme') || 'light';
      });
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  const bgStyle = computed(() =>
    theme.value === 'dark' ? createSvgBgStyle(darkSvg) : createSvgBgStyle(lightSvg)
  );

  return bgStyle;
}
