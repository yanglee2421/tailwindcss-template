import { defineStore } from "pinia";
import * as Vue from "vue";

export const useThemeStore = defineStore("theme", () => {
  const state = Vue.reactive<ThemeStore>({
    mode: "system",
  });

  return {
    state,
  };
});

type Mode = "system" | "dark" | "light";

interface ThemeStore {
  mode: Mode;
}
