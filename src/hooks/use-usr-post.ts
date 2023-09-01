// API Imports
import { usr_post } from "@/api/mock";
import { useMutation } from "@tanstack/vue-query";
import { Req, Res } from "@/api/mock/usr_post";

// Element Imports
import { ElMessage } from "element-plus";

// Stores Imports
import { useStoreLogin } from "./use-store-login";

// Router Imports
import {
  useRouter,
  useRoute,
  LocationQueryValue,
  RouteLocationRaw,
} from "vue-router";

// Vue Imports
import { nextTick } from "vue";

export function useUsrPost() {
  // Router Hooks
  const router = useRouter();
  const route = useRoute();

  // Store Hooks
  const { setState } = useStoreLogin();

  // API Hooks
  return useMutation<Res, Error, Req>({
    mutationFn(req) {
      return usr_post(req);
    },
    async onSuccess(data) {
      setState((state) => {
        state.usr = data;
      });
      await nextTick();

      const homeRoute = toHomeRoute(route.query.returnUrl);
      await router.push(homeRoute);
      ElMessage.success("Wellcome back!");
    },
    onError(err) {
      ElMessage.error(err.message);
    },
  });
}

function toHomeRoute(params: ToHomeRouteParams): RouteLocationRaw {
  if (Array.isArray(params)) {
    return { name: "home" };
  }
  if (!params) return { name: "home" };
  return { path: decodeURIComponent(params) };
}
type ToHomeRouteParams = LocationQueryValue | LocationQueryValue[];
