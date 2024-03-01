import { defineStore } from "pinia";
import * as Vue from "vue";

export const useThemeStore = defineStore("theme", () => {
  const bgAlphaRef = Vue.ref(0);
  const bgBlurRef = Vue.ref(0);
  const modeRef = Vue.ref<Mode>("auto");

  const state = Vue.reactive({
    mode: "system",
  });

  return {
    bgAlpha: bgAlphaRef,
    bgBlur: bgBlurRef,
    mode: modeRef,
    state,
  };
});

type Mode = "auto" | "dark" | "light";
