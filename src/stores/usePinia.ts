import { defineStore } from "pinia";
import { reactive } from "vue";

namespace t {
  export interface state {
    isDark: boolean;
    currentUser: string;
    currentPage: string;
    userPermission: string[];
  }
}

/**
 * Returns the store where the theme is saved
 * @returns theme store
 */
export const usePinia = defineStore("themeState", () => {
  const state = reactive<t.state>({
    isDark: false,
    currentUser: "",
    currentPage: "",
    userPermission: [],
  });

  const actIsDark = (isDark: boolean) => {
    const htmlClass = document.documentElement.classList;
    state.isDark = isDark;
    state.isDark ? htmlClass.add("dark") : htmlClass.remove("dark");
  };

  return { state, actIsDark };
});
