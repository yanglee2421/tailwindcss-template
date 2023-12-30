// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

export const useThemeStore = defineStore(
  "theme",
  () => {
    const bgAlphaRef = Vue.ref(0);
    const bgBlurRef = Vue.ref(0);

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

    return {
      bgAlpha: Vue.readonly(bgAlphaRef),
      bgBlur: Vue.readonly(bgBlurRef),
      setBgAlpha,
      setBgBlur,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);
