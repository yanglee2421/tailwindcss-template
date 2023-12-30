// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

export const useThemeStore = defineStore(
  "theme",
  () => {
    const bgAlphaRef = Vue.ref(0);
    const bgBlurRef = Vue.ref(0);
    const modeRef = Vue.ref<Mode>("auto");

    const setBgAlpha: Dispatch<SetStateAction<number>> = (action) => {
      const bgAlpha = (() => {
        if (typeof action === "function") {
          return action(Vue.unref(bgAlphaRef));
        }

        return action;
      })();

      bgAlphaRef.value = bgAlpha;
    };

    const setBgBlur: Dispatch<SetStateAction<number>> = (action) => {
      const bgBlur = (() => {
        if (typeof action === "function") {
          return action(Vue.unref(bgBlurRef));
        }

        return action;
      })();

      bgBlurRef.value = bgBlur;
    };

    const setMode: Dispatch<SetStateAction<Mode>> = (action) => {
      const mode = (() => {
        if (typeof action === "function") {
          return action(Vue.unref(modeRef));
        }

        return action;
      })();

      modeRef.value = mode;
    };

    return {
      bgAlpha: bgAlphaRef,
      bgBlur: bgBlurRef,
      setBgAlpha,
      setBgBlur,

      mode: modeRef,
      setMode,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);

type Mode = "auto" | "dark" | "light";
