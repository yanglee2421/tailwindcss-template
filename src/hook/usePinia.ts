import { defineStore } from "pinia";
import { reactive } from "vue";

export namespace type {
  export interface state {
    isDark: boolean;
    // 登录校验
    isLogined: boolean;
    invalidTime: number;
    currentUser: string;
    currentPage: string;
    userPermission: string[];
  }
}

const usePinia = defineStore("demoState", () => {
  const state = reactive<type.state>({
    isDark: false,
    // 登录校验
    isLogined: true,
    invalidTime: 0,
    currentUser: "",
    currentPage: "",
    userPermission: [],
  });
  function setIsDark(isDark: boolean) {
    state.isDark = isDark;
  }
  return { state, setIsDark };
});

export default usePinia;
