import { defineStore } from "pinia";
import { reactive } from "vue";
/**
 * @function usePinia 中使用的类型
 */
export namespace Type {
  export interface state {
    isDark: boolean;
    currentUser: string;
    currentPage: string;
    userPermission: string[];
  }
}
/**
 * @function usePinia 返回全局 store 的 hook
 * @returns 全局 store
 */
export const usePinia = defineStore("demoState", () => {
  const state = reactive<Type.state>({
    isDark: false,
    currentUser: "",
    currentPage: "",
    userPermission: [],
  });

  function actIsDark(isDark: boolean) {
    const htmlClass = document.documentElement.classList;
    state.isDark = isDark;
    state.isDark ? htmlClass.add("dark") : htmlClass.remove("dark");
  }

  return { state, actIsDark };
});
