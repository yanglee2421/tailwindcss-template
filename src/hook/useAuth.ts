import { ElMessage } from "element-plus";
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
  const state = reactive(initState());

  function actLogin(payload: Type.loginParams, isRemember = false) {
    const { user, invalidTime, token } = payload;
    Object.assign(state, { user, invalidTime, token, isLogined: true });
    ElMessage.success("登录成功");
    if (!isRemember) return;
    localStorage.setItem("auth", JSON.stringify(state));
    localStorage.setItem("token", token);
    router.replace({ name: "home" });
    setTimeout(actSignUp, invalidTime - Date.now());
  }

  function actSignUp() {
    Object.assign(state, {
      isLogined: false,
      user: "",
      invalidTime: 0,
      token: "",
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    ElMessage.success("已注销");
    router.replace({ name: "login" });
  }
  return { state, actLogin, actSignUp };
});

function initState() {
  const target = {
    isLogined: false,
    user: "",
    invalidTime: 0,
    token: "",
  };
  try {
    const prevJson = localStorage.getItem("auth");
    if (!prevJson) return target;

    const prevState = JSON.parse(prevJson);
    const { user, invalidTime, token } = prevState;

    if (!user || !invalidTime || !token) throw new Error();
    if (typeof user !== "string") throw new Error();
    if (typeof invalidTime !== "number") throw new Error();
    if (invalidTime < Date.now() + 1000 * 60 * 15) throw new Error();
    if (typeof token !== "string") throw new Error();

    Object.assign(target, { user, invalidTime, token, isLogined: true });
    localStorage.setItem("token", token);
  } catch (err: any) {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    ElMessage.warning("登录信息已失效");
  } finally {
    return target;
  }
}
