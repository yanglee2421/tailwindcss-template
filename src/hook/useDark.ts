import { onBeforeUnmount, onMounted } from "vue";
/**
 * 类型
 */
export namespace Type {
  export type callback = (mediaQuery: MediaQueryList) => void;
}
/**
 * 组件挂载时，执行回调
 * 浏览器主题改变时，执行回调
 */
export function useDark(callback: Type.callback) {
  const controller = new AbortController();
  const { signal } = controller;
  onMounted(() => {
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", () => callback(darkQuery), { signal });
    callback(darkQuery);
  });
  onBeforeUnmount(() => controller.abort());
}
