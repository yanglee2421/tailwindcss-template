import { defineStore } from "pinia";
import { reactive } from "vue";
import { router } from "@/route";

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

  let timer: number | NodeJS.Timeout = 0;
  function actLogin(payload: Type.loginParams, isRemember = false) {
    const { user, invalidTime, token } = payload;
    Object.assign(state, { user, invalidTime, token, isLogined: true });

    router.replace({ name: "home" });
    clearTimeout(timer);
    timer = setTimeout(actSignUp, invalidTime - Date.now());

    if (isRemember) {
      localStorage.setItem("auth", JSON.stringify(state));
      localStorage.setItem("token", token);
    }
  }

  function actSignUp() {
    const defAuth = { isLogined: false, user: "", token: "", invalidTime: 0 };
    Object.assign(state, defAuth);

    router.replace({ name: "login" });
    clearTimeout(timer);

    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  }
  return { state, actLogin, actSignUp };
});
