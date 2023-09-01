// Vue Imports
import { ref, watchPostEffect, readonly } from "vue";

export function useIsDark() {
  const controller = new AbortController();
  const { signal } = controller;

  const queryRef = ref<boolean>(false);

  watchPostEffect((clearEffect) => {
    // ** Mounted
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    queryRef.value = darkQuery.matches;

    // Bind Change
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
