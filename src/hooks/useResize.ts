import { ref, unref, onMounted, onBeforeUnmount } from "vue";

/**
 * Hook for monitoring dom resize
 * @param callback Executed when dom is mounted and dom size changes
 * @returns ref used to specify dom
 */
export function useResize(
  callback: (params: { width: number; height: number }) => void | Function
) {
  const resizeRef = ref();
  let clearFn: Function | void;
  const observer = new ResizeObserver((entries) => {
    const [{ contentBoxSize }] = entries;
    const [{ inlineSize: width, blockSize: height }] = contentBoxSize;
    typeof clearFn === "function" && clearFn();
    clearFn = callback({ width, height });
  });
  onMounted(() => {
    const dom = unref(resizeRef);
    if (dom instanceof HTMLElement) {
      observer.observe(dom);
      return;
    }
    if (dom.$el instanceof HTMLElement) {
      observer.observe(dom.$el);
      return;
    }
    throw new Error("resizeRef必须指向一个htmlelement");
  });
  onBeforeUnmount(() => {
    typeof clearFn === "function" && clearFn();
    const unobserve = (dom: HTMLElement) => {
      observer.unobserve(dom);
      observer.disconnect();
    };
    const dom = unref(resizeRef);
    if (dom instanceof HTMLElement) {
      unobserve(dom);
      return;
    }
    if (dom.$el instanceof HTMLElement) {
      unobserve(dom.$el);
      return;
    }
    throw new Error("resizeRef必须指向一个htmlelement");
  });
  return resizeRef;
}
