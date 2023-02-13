import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import { reactive } from "vue";

type user = ReturnType<typeof init>[0];

export const useUser = defineStore("user", () => {
  const state = reactive(init());
  const register = ({ user, pwd }: Omit<user, "id">) => {
    const id = crypto.randomUUID();
    state.push({ user, pwd, id });
  };
  const loginOut = (id: string) => {
    try {
      const index = state.findIndex((item) => item.id === id);
      if (index === -1) throw new Error();
      state.splice(index, 1);
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

function init() {
  return [
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
  ];
}
