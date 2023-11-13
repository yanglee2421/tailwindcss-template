// API Imports
import { usr_get } from "@/api/mock";
import { Res } from "@/api/mock/usr_get";
import { useQuery } from "@tanstack/vue-query";

// Login Imports
import { useLogin } from "./use-login";

// Vue Imports
import * as Vue from "vue";

// Element Imports
import { ElMessage } from "element-plus";

export function useLoginMe() {
  // Login Hooks
  const login = useLogin();

  const enabled = Vue.computed(() => {
    const res = Vue.unref(login.usr);
    return Boolean(res);
  });

  // API Hooks
  const query = useQuery<Res, Error>({
    queryKey: ["usr_get"],
    queryFn({ signal }) {
      return usr_get({ signal, params: Vue.unref(login.usr) });
    },

    enabled,

    // Initial Data
    initialData() {
      const res = Vue.unref(login.usr);
      if (res) return res;
    },
    initialDataUpdatedAt() {
      return Vue.unref(login.usr)?.loginAt;
    },

    // ** Refetch
    refetchInterval: import.meta.env.DEV ? 1000 * 30 : 1000 * 60 * 30,

    // ** Retry
    retry: 2,
    retryDelay: 1000 * 3,
  });

  Vue.watchPostEffect(async () => {
    // ** Success
    const data = Vue.unref(query.data);
    if (data) {
      login.updateUsr(data);
      return;
    }

    // ** Error
    const error = Vue.unref(query.error);
    if (error) {
      await login.signOut();
      ElMessage.error(error.message);
      return;
    }
  });
}
