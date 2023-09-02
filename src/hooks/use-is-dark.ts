// Vue Imports
import { ref, watchPostEffect, readonly } from "vue";

export function useIsDark() {
  const controller = new AbortController();
  const { signal } = controller;

  const { matches } = matchMedia("(prefers-color-scheme: dark)");
  const queryRef = ref<boolean>(matches);

  // Bind Change
  watchPostEffect((clearEffect) => {
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    queryRef.value = darkQuery.matches;

    darkQuery.addEventListener(
      "change",
      (evt) => {
        queryRef.value = evt.matches;
      },
      { signal }
    );

    // Clear Effect
    clearEffect(() => {
      controller.abort();
    });
  });

  return readonly(queryRef);
}
