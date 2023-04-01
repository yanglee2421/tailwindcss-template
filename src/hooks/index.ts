import { onBeforeUnmount, onMounted, ref, unref } from "vue";

// 自定义指令
export { vDrag } from "./v-drag";
export { vLazy } from "./v-lazy";
export { vVis } from "./v-vis";

/**
 * Hook for listening to browser theme changes
 * @param callback Executed when RC is mounted and browser theme is switched
 */
export function useDark(callback: (mediaQuery: MediaQueryList) => void) {
  const controller = new AbortController();
  const { signal } = controller;
  onMounted(() => {
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", () => callback(darkQuery), { signal });
    callback(darkQuery);
  });
  onBeforeUnmount(() => controller.abort());
}

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
  const observer = new ResizeObserver(
    ([
      {
        contentBoxSize: [{ inlineSize: width, blockSize: height }],
      },
    ]) => {
      typeof clearFn === "function" && clearFn();
      clearFn = callback({ width, height });
    }
  );
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
