import { defineStore } from "pinia";
import { reactive } from "vue";
import { ElMessage } from "element-plus";

export const useAuth = defineStore("auth", () => {
  const state = reactive(initAuth());
  let timer: number | NodeJS.Timeout = 0;

  // signOut & signIn
  const signOut = async () => {
    clearTimeout(timer);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    Object.assign(state, initAuth());
  };
  const signIn = async (
    { user, expiration, token }: ReturnType<typeof initAuth>,
    isRemember = false
  ) => {
    clearTimeout(timer);
    timer = setTimeout(signIn, expiration - Date.now());
    const next = { user, token, expiration };
    if (isRemember) {
      localStorage.setItem("auth", JSON.stringify(next));
      localStorage.setItem("token", token);
    }
    Object.assign(state, next);
  };

  return { state, signOut, signIn };
});

/**
 * function to generate initial state
 * @returns a initital state for auth
 */
function initAuth() {
  const init = {
    user: "",
    token: "",
    expiration: 0,
  };
  try {
    const prevJson = localStorage.getItem("auth");
    if (!prevJson) return init;

    const prevAuth = JSON.parse(prevJson);
    const { user, token, expiration } = prevAuth;
    if (!user || !token || !expiration)
      throw new Error("There are fields that are empty");
    if (typeof user !== "string")
      throw new Error("The user field is not a string");
    if (typeof token !== "string")
      throw new Error("The token field is not a string");
    if (typeof expiration !== "number")
      throw new Error("The expiration field is not a number");
    if (expiration - Date.now() < 1000 * 60 * 5)
      throw new Error("token has expired");

    return { user, token, expiration };
  } catch (err) {
    console.error(err);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    ElMessage.warning("登录信息已失效");
  }
  return init;
}
