import { onBeforeUnmount, onMounted } from "vue";
const useDark = (callback: (mediaQuery: MediaQueryList) => void) => {
  const controller = new AbortController();
  const { signal } = controller;
  onMounted(() => {
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    callback?.(darkQuery);
    darkQuery.addEventListener(
      "change",
      () => {
        callback?.(darkQuery);
      },
      { signal }
    );
  });
  onBeforeUnmount(() => {
    controller.abort();
  });
};
export default useDark;
