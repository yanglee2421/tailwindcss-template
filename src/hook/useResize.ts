import { onBeforeUnmount, onMounted, ref, unref } from "vue";
const useResize = (
  callback: (params: { width: number; height: number }) => void
) => {
  const resizeRef = ref();
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
    const dom = unref(resizeRef);
    if (dom instanceof HTMLElement) {
      observer.observe(dom);
    }
  });
  onBeforeUnmount(() => {
    const dom = unref(resizeRef);
    if (dom instanceof HTMLElement) {
      observer.unobserve(dom);
      observer.disconnect();
    }
  });
  return resizeRef;
};
export default useResize;
