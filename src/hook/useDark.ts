import { onBeforeUnmount, onMounted } from "vue";
/**
 * @function useDark 中使用的类型
 */
export namespace Type {
  export type callback = (mediaQuery: MediaQueryList) => void;
}
/**
 * 监听浏览器主题变换的钩子
 * @param callback 挂载、主题变化时执行
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
