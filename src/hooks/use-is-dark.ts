// Vue Imports
import { ref, watchPostEffect, readonly } from "vue";

export function useIsDark() {
  // Prepare Ref
  const { matches } = matchMedia("(prefers-color-scheme: dark)");
  const isDarkRef = ref<boolean>(matches);

  // Bind Change
  watchPostEffect((clearEffect) => {
    const controller = new AbortController();
    const { signal } = controller;

    const mediaQuery = matchMedia("(prefers-color-scheme: dark)");
    isDarkRef.value = mediaQuery.matches;

    mediaQuery.addEventListener(
      "change",
      (evt) => {
        isDarkRef.value = evt.matches;
      },
      { signal }
    );

    // Clear Effect
    clearEffect(() => {
      controller.abort();
    });
  });

  return readonly(isDarkRef);
}
