import { defineStore } from "pinia";
import { reactive } from "vue";
/**
 * @function usePinia 中使用的类型
 */
export namespace Type {
  export interface state {
    isDark: boolean;
    docTitle: string;
    // 登录校验
    isLogined: boolean;
    invalidTime: number;
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
    docTitle: document.title,
    // 登录校验
    isLogined: true,
    invalidTime: 0,
    currentUser: "",
    currentPage: "",
    userPermission: [],
  });
  function setIsDark(isDark: boolean) {
    state.isDark = Boolean(isDark);
  }
  function setDocTitle(title: string) {
    if (typeof title !== "string") return;
    state.docTitle = title;
    document.title = title;
  }
  return { state, setIsDark, setDocTitle };
});
