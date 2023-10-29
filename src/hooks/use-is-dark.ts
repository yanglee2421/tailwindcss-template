// Vue Imports
import { onUnmounted, customRef } from "vue";

export function useIsDark() {
  // Prepare Ref
  const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

  const controller = new AbortController();
  onUnmounted(() => {
    controller.abort();
  });

  return customRef((tarck, trigger) => {
    return {
      get() {
        tarck();

        const { signal } = controller;
        mediaQuery.addEventListener("change", trigger, { signal });

        return mediaQuery.matches;
      },
      set() {},
    };
  });
}
