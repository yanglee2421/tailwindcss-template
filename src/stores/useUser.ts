import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import { reactive } from "vue";

interface user {
  id: string;
  user: string;
  pwd: string;
}
export const useUser = defineStore("user", () => {
  const state = reactive<user[]>([
    {
      id: crypto.randomUUID(),
      user: "admin",
      pwd: "admin",
    },
    {
      id: crypto.randomUUID(),
      user: "123456",
      pwd: "123456",
    },
  ]);
  const register = ({ user, pwd }: Omit<user, "id">) => {
    const id = crypto.randomUUID();
    state.push({ user, pwd, id });
  };
  const loginOut = (id: string) => {
    try {
      const user = state.find((item) => item.id === id);
      if (!user) throw new Error();
      state.splice(state.indexOf(user), 1);
    } catch {
      ElMessage.warning("no user");
    }
  };
  const validate = ({ user, pwd }: Omit<user, "id">) => {
    const target = state.find((item) => item.user === user);
    try {
      if (!target) throw new Error();
      if (target.pwd === pwd) return true;
    } catch {
      ElMessage.warning("用户或密码错误");
    }
    return false;
  };
  return { state, register, loginOut, validate };
});
