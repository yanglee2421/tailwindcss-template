// Vue Imports
import * as Vue from "vue";

export function useIsDark() {
  // Prepare Ref
  const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

  const isDarkRef = Vue.ref(mediaQuery.matches);

  Vue.watchPostEffect((onCleanup) => {
    const controller = new AbortController();

    mediaQuery.addEventListener("change", (evt) => {
      isDarkRef.value = evt.matches;
    });

    onCleanup(() => {
      controller.abort();
    });
  });

  return Vue.readonly(isDarkRef);
}
