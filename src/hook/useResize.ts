import { onBeforeUnmount, onMounted, ref, unref } from "vue";
namespace Type {
  interface cbParams {
    width: number;
    height: number;
  }
  export interface cb {
    (params: cbParams): void | Function;
  }
}
/**
 * 监听 dom resize 的钩子
 * @param callback 挂载、dom resize时执行
 * @returns 用于指定 dom 的 ref
 */
export function useResize(callback: Type.cb) {
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

    const dom = unref(resizeRef);
    if (dom instanceof HTMLElement) {
      observer.unobserve(dom);
      observer.disconnect();
      return;
    }
    if (dom.$el instanceof HTMLElement) {
      observer.unobserve(dom.$el);
      observer.disconnect();
      return;
    }
    throw new Error("resizeRef必须指向一个htmlelement");
  });

  return resizeRef;
}
