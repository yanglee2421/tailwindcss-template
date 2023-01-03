import { onBeforeUnmount, onMounted, ref } from "vue";
const useResize = <T extends HTMLElement>(
  callback: (params: { width: number; height: number }) => void
) => {
  const domRef = ref<T>();
  const observer = new ResizeObserver(
    ([
      {
        contentBoxSize: [{ inlineSize: width, blockSize: height }],
      },
    ]) => {
      callback({ width, height });
    }
  );
  onMounted(() => {
    if (!domRef.value) return;
    observer.observe(domRef.value);
  });
  onBeforeUnmount(() => {
    if (!domRef.value) return;
    observer.unobserve(domRef.value);
    observer.disconnect();
  });
  return domRef;
};
export default useResize;
