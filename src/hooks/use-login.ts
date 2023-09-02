// Store Imports
import { useStoreLogin, Usr } from "./use-store-login";

// Router Imports
import {
  useRouter,
  useRoute,
  LocationQueryValue,
  RouteLocationRaw,
} from "vue-router";

// Vue Imports
import { nextTick } from "vue";

// Element Imports
import { ElMessage } from "element-plus";

export function useLogin() {
  // Router Hooks
  const router = useRouter();
  const route = useRoute();

  // Store Hooks
  const { state, setState } = useStoreLogin();

  // Sign In
  const signIn = async (data: Usr) => {
    // Change Store
    setState((state) => {
      state.usr = data;
    });

    // Change Router
    await nextTick();
    const homeRoute = toHomeRoute(route.query.returnUrl);
    await router.push(homeRoute);

    // Show Toast
    ElMessage.closeAll();
    ElMessage.success("Wellcome back!");
  };

  // Sign Out
  const signOut = async () => {
    // Change Store
    setState((state) => {
      state.usr = null;
    });

    // Change Router
    await nextTick();
    await router.push({ name: "login" });

    // Show Toast
    ElMessage.closeAll();
    ElMessage.success("Sign Out Successlly!");
  };

  return { signIn, signOut, state };
}

function toHomeRoute(params: ToHomeRouteParams): RouteLocationRaw {
  if (Array.isArray(params)) {
    return { name: "home" };
  }
  if (!params) return { name: "home" };
  return { path: decodeURIComponent(params) };
}
type ToHomeRouteParams = LocationQueryValue | LocationQueryValue[];
