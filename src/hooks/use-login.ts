// Vue Imports
import * as Vue from "vue";

// Store Imports
import { useStoreLogin, Usr } from "./use-store-login";

// API Imports
import { useQueryClient } from "@tanstack/vue-query";

// Router Imports
import { useRouter, useRoute } from "vue-router";
import { toHomeRoute } from "@/router";

// Toast Imports
import { ElMessage } from "element-plus";

export function useLogin() {
  // Store Hooks
  const store = useStoreLogin();

  const usr = Vue.computed(() => {
    return store.local.usr || store.session.usr;
  });

  // Router Hooks
  const router = useRouter();
  const route = useRoute();

  // Sign In
  const signIn = async (data: Usr, remember?: boolean) => {
    // Local
    if (remember) {
      store.setLocal((state) => {
        state.usr = data;
      });

      // Session
    } else {
      store.setSession((state) => {
        state.usr = data;
      });
    }

    // ** Router
    await Vue.nextTick();
    const homeRoute = toHomeRoute(route.query.returnUrl);
    await router.push(homeRoute);

    // ** Toast
    ElMessage.closeAll();
    ElMessage.success("Wellcome back!");
  };

  // API Hooks
  const queryClient = useQueryClient();

  // Sign Out
  const signOut = async () => {
    // Clear Store
    store.setSession((state) => {
      state.usr = null;
    });
    store.setLocal((state) => {
      state.usr = null;
    });

    // Clear Query
    queryClient.clear();

    await Vue.nextTick();
    await router.push({
      name: "login",
      query: {
        returnUrl: encodeURIComponent(router.currentRoute.value.fullPath),
      },
    });
  };

  // Update User
  const updateUsr = (usr: Partial<Usr>) => {
    // ** Session
    store.setSession((state) => {
      const prev = state.usr;
      if (!prev) return;
      Object.assign(prev, usr);
    });

    // ** Local
    store.setLocal((state) => {
      const prev = state.usr;
      if (!prev) return;
      Object.assign(prev, usr);
    });
  };

  return { signIn, signOut, updateUsr, usr };
}
