import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { router } from "@/route";
import { ElMessage } from "element-plus";

export const useAuth = defineStore("auth", () => {
  const state = reactive(initAuth());

  // 登出行为
  let timer: number | NodeJS.Timeout = 0;
  const actSignUp = () => {
    Object.assign(state, initAuth());
    router.push({ name: "login" });
    clearTimeout(timer);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  };
  const actLogin = (
    { user, expiration, token }: ReturnType<typeof initAuth>,
    isRemember = false
  ) => {
    Object.assign(state, { user, token, expiration });
    if (router.currentRoute.value.name === "login")
      router.replace({ name: "home" });
    clearTimeout(timer);
    timer = setTimeout(actSignUp, expiration - Date.now());
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
      const { user, token, expiration } = prevAuth;
      if (!user || !token || !expiration) throw new Error();
      if (typeof user !== "string") throw new Error();
      if (typeof token !== "string") throw new Error();
      if (typeof expiration !== "number") throw new Error();
      if (expiration - Date.now() < 1000 * 60 * 5) throw new Error();

      actLogin({ user, token, expiration });
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
  const isLogined = computed(() => Boolean(state.expiration) || prevAuth());

  return { isLogined, state, actLogin, actSignUp };
});

function initAuth() {
  return {
    user: "",
    token: "",
    expiration: 0,
  };
}
