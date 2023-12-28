// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const localTokenRef = Vue.ref("");
    const sessionTokenRef = Vue.ref("");

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
      setLocalToken,
      sessionToken: Vue.readonly(sessionTokenRef),
      setSessionToken,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        { storage: localStorage, paths: ["localToken"] },
        { storage: sessionStorage, paths: ["sessionToken"] },
      ],
    },
  }
);
