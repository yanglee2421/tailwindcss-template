import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { router } from "@/route";
import { ElMessage } from "element-plus";

namespace Type {
  export interface loginParams {
    user: string;
    invalidTime: number;
    token: string;
  }
}

export const useAuth = defineStore("auth", () => {
  const state = reactive({
    isLogined: false,
    user: "",
    token: "",
    invalidTime: 0,
  });

  // 登出行为
  const actSignUp = () => {
    const defAuth = { isLogined: false, user: "", token: "", invalidTime: 0 };
    Object.assign(state, defAuth);
    router.replace({ name: "login" });

    clearTimeout(timer);

    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  };

  // 登录行为
  let timer: number | NodeJS.Timeout = 0;
  const actLogin = (payload: Type.loginParams, isRemember = false) => {
    const { user, invalidTime, token } = payload;
    Object.assign(state, { user, invalidTime, token, isLogined: true });

    router.replace({ name: "home" });
    clearTimeout(timer);
    timer = setTimeout(actSignUp, invalidTime - Date.now());

    if (isRemember) {
      localStorage.setItem("auth", JSON.stringify(state));
      localStorage.setItem("token", token);
    }
  };

  // 还原上次登录行为
  const prevAuth = () => {
    try {
      const prevJson = localStorage.getItem("auth");
      if (!prevJson) return false;

      const prevAuth = JSON.parse(prevJson);
      const { user, token, invalidTime } = prevAuth;
      if (!user || !token || !invalidTime) throw new Error();
      if (typeof user !== "string") throw new Error();
      if (typeof token !== "string") throw new Error();
      if (typeof invalidTime !== "number") throw new Error();
      if (invalidTime - Date.now() < 1000 * 60 * 5) throw new Error();

      actLogin({ user, token, invalidTime });
      return true;
    } catch (err) {
      console.error(err);
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
      ElMessage.warning("登录信息已失效");
    }
    return false;
  };

  // 是否已登录
  const isLogined = computed(() => state.isLogined || prevAuth());

  return { isLogined, state, actLogin, actSignUp };
});
