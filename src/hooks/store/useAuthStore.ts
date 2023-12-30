// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

// Firebase Imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/api/firebase";

export function useAuth() {
  const authStore = useAuthStore();

  const authRef = Vue.computed(() => {
    void authStore.updateAt;
    return getAuth(app);
  });

  const setUpdateAt = authStore.setUpdateAt.bind(authStore);

  Vue.watchPostEffect((onCleanup) => {
    const unsubscribe = onAuthStateChanged(getAuth(app), () => {
      authStore.setUpdateAt(Date.now());
    });

    onCleanup(() => {
      unsubscribe();
    });
  });

  return [authRef, setUpdateAt] as [typeof authRef, typeof setUpdateAt];
}

export const useAuthStore = defineStore(
  "auth",
  () => {
    const updateAtRef = Vue.ref(0);
    const localTokenRef = Vue.ref("");
    const sessionTokenRef = Vue.ref("");
    const accessToken = Vue.computed(() => {
      const localToken = Vue.unref(localTokenRef);
      const sessionToken = Vue.unref(sessionTokenRef);

      return localToken || sessionToken;
    });

    const setUpdateAt: Dispatch<SetStateAction<number>> = (action) => {
      const updateAt = (() => {
        if (typeof action === "function") {
          return action(Vue.unref(updateAtRef));
        }

        return action;
      })();

      updateAtRef.value = updateAt;
    };

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
      localToken: localTokenRef,
      sessionToken: sessionTokenRef,
      accessToken,
      setLocalToken,
      setSessionToken,

      updateAt: updateAtRef,
      setUpdateAt,
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
