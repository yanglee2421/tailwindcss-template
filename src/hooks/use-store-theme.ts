// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import Vue from "vue";

export const useStoreTheme = defineStore(
  "theme",
  () => {
    // State && Dispatch
    const state = Vue.reactive({
      isDark: false,
    });
    const setState = (dispatch: Dispatch) => {
      dispatch(state);
    };

    return { state, setState };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);

interface State {
  isDark: boolean;
}
type Dispatch = (s: State) => void;
