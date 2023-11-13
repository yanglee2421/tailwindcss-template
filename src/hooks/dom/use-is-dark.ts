// Vue Imports
import * as Vue from "vue";

export function useIsDark() {
  // Prepare Ref
  const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

  const controller = new AbortController();
  Vue.onUnmounted(() => {
    controller.abort();
  });

  return Vue.customRef((tarck, trigger) => {
    return {
      get() {
        tarck();

        mediaQuery.addEventListener("change", trigger, {
          signal: controller.signal,
        });

        return mediaQuery.matches;
      },
      set() {},
    };
  });
}
