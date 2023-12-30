// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

// Firebase Imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/api/firebase";

export function useAuth() {
  const authStateRef = Vue.shallowRef(getAuth(app));
  const authRef = Vue.readonly(authStateRef);

  const updateAuth = () => {
    authStateRef.value = getAuth(app);
  };

  Vue.watchPostEffect((onCleanup) => {
    const unsubscribe = onAuthStateChanged(getAuth(app), updateAuth);

    onCleanup(() => {
      unsubscribe();
    });
  });

  return [Vue.readonly(authRef), updateAuth] as [
    typeof authRef,
    typeof updateAuth
  ];
}

export const useAuthStore = defineStore(
  "auth",
  () => {
    const localTokenRef = Vue.ref("");
    const sessionTokenRef = Vue.ref("");
    const accessToken = Vue.computed(() => {
      return Vue.unref(localTokenRef) || Vue.unref(sessionTokenRef);
    });

    const setLocalToken: Dispatch<SetStateAction<string>> = (action) => {
      const localToken = (() => {
        if (typeof action === "function") {
          return action(Vue.unref(localTokenRef));
        }

        return action;
      })();

      localTokenRef.value = localToken;
    };

    const setSessionToken: Dispatch<SetStateAction<string>> = (action) => {
      const sessionToken = (() => {
        if (typeof action === "function") {
          return action(Vue.unref(sessionTokenRef));
        }

        return action;
      })();

      sessionTokenRef.value = sessionToken;
    };

    return {
      localToken: Vue.readonly(localTokenRef),
      sessionToken: Vue.readonly(sessionTokenRef),
      accessToken,
      setLocalToken,
      setSessionToken,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage,
          paths: ["localToken"],
        },
        {
          storage: sessionStorage,
          paths: ["sessionToken"],
        },
      ],
    },
  }
);
