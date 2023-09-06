// API Imports
import { usr_get } from "@/api/mock";
import { Res } from "@/api/mock/usr_get";
import { useQuery } from "@tanstack/vue-query";

// Login Imports
import { useLogin } from "./use-login";

// Vue Imports
import { computed, unref, watch } from "vue";

// Element Imports
import { ElMessage } from "element-plus";

export function useLoginMe() {
  // Login Hooks
  const { usr, updateUsr, signOut } = useLogin();

  const enabled = computed(() => {
    const res = unref(usr);
    return Boolean(res);
  });

  // API Hooks
  const { data, error } = useQuery<Res, Error>({
    enabled,
    queryKey: ["usr_get"],
    queryFn({ signal }) {
      return usr_get({ signal, params: unref(usr) });
    },

    // Initial Data
    initialData() {
      const res = unref(usr);
      if (!res) return;
      return res;
    },
    initialDataUpdatedAt() {
      return unref(usr)?.loginAt;
    },

    // ** Refetch
    refetchInterval: import.meta.env.DEV ? 1000 * 10 : 1000 * 60 * 30,

    // ** Retry
    retry: 2,
    retryDelay: 1000 * 3,
  });

  // ** Success
  watch(
    data,
    (data) => {
      if (!data) return;
      updateUsr(data);
    },
    { flush: "post", immediate: true }
  );

  // ** Fail
  watch(
    error,
    async (error) => {
      if (!error) return;
      await signOut();
      ElMessage.error(error.message);
    },
    { flush: "post", immediate: true }
  );
}
