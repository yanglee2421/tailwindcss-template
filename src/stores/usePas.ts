import { defineStore } from "pinia";
import { reactive } from "vue";

class Pas {
  id = getId();
  site = "";
  user = "";
  pwd = "";
}

export const usePas = defineStore("password", () => {
  const state = reactive(init());

  interface query extends Omit<Pas, "id"> {
    page: number;
    size: number;
  }

  const find = async ({ site, user, pwd, page, size }: query) => {
    try {
      const target = state.filter((item) => {
        const siteOk = item.site.includes(site || "");
        const userOk = item.user.includes(user || "");
        const pwdOk = item.pwd.includes(pwd || "");
        return siteOk && userOk && pwdOk;
      });
      const rows = target.slice((page - 1) * size, page * size);
      return clone({ total: target.length, rows });
    } catch {
      throw new Error("not found");
    }
  };
  const findOne = async (id: string) => {
    try {
      const target = state.find((item) => item.id === id);
      if (!target) throw new Error();
      return target;
    } catch {
      throw new Error("not found");
    }
  };
  const save = async ({ id, site, user, pwd }: Pas) => {
    const prev = state.find((item) => item.id === id);
    try {
      if (prev) return clone(Object.assign(prev, { site, user, pwd }));
      const neoId = getId();
      const target = { id: neoId, site, user, pwd };
      state.push(target);
      return clone(target);
    } catch {
      throw new Error("save error");
    }
  };
  const remove = async (id: string) => {
    try {
      const index = state.findIndex((item) => item.id === id);
      if (index === -1) throw new Error();
      return state.splice(index, 1);
    } catch {
      throw new Error("can`t delete this id");
    }
  };
  return { state, find, findOne, save, remove };
});

function getId() {
  return crypto.randomUUID();
}

function init(): Pas[] {
  const res = [
    {
      id: getId(),
      site: "4399",
      user: "4399",
      pwd: "4399",
    },
  ];
  for (let i = 0; i < 100; i++) {
    const pas = new Pas();
    pas.site = "site" + i;
    pas.user = "user" + i;
    pas.pwd = "pwd" + i;
    res.push(pas);
  }
  return res;
}

function clone<T>(target: T) {
  return JSON.parse(JSON.stringify(target)) as T;
}
