import { onMounted, onBeforeUnmount } from "vue";

/**
 * Hook for listening to browser theme changes
 * @param callback Executed when RC is mounted and browser theme is switched
 */
export function useDark(callback: (mediaQuery: MediaQueryList) => void) {
  const controller = new AbortController();
  const { signal } = controller;
  onMounted(() => {
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", () => callback(darkQuery), { signal });
    callback(darkQuery);
  });
  onBeforeUnmount(() => controller.abort());
}
