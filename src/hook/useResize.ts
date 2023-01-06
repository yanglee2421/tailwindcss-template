import { onBeforeUnmount, onMounted, ref, unref } from "vue";
/**
 * 监听 dom resize 的钩子
 * @param callback 挂载、dom resize时执行
 * @returns 用于指定 dom 的 ref
 */
export function useResize(
  callback: (params: { width: number; height: number }) => void
) {
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
}
