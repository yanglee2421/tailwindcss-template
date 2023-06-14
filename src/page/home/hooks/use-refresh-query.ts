// import { get_bing } from "@/api/get_bing";
import { get_pwd, Req } from "@/api/get_pwd";

// Query Imports
import { useQuery } from "@tanstack/vue-query";
import { computed, unref } from "vue";

export function useRefreshQuery(req: Req) {
  const paramsRef = computed(() => req);

  return useQuery({
    queryKey: ["auth_login", paramsRef],
    queryFn() {
      const params = unref(paramsRef);
      return get_pwd(params);
    },
  });
}
