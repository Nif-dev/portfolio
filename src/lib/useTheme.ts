import { ref, onMounted, onUnmounted } from 'vue';

export function useTheme() {
  const theme = ref('light');
  let observer: MutationObserver | null = null;

  onMounted(() => {
    theme.value = document.documentElement.getAttribute('data-theme') || 'light';

    observer = new MutationObserver(() => {
      theme.value = document.documentElement.getAttribute('data-theme') || 'light';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { theme };
}
