// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

export const useStoreLogin = defineStore(
  "login",
  () => {
    // ** Local
    const local = Vue.reactive<State>({
      usr: null,
    });
    const setLocal = (dispatch: Dispatch) => dispatch(local);

    // ** Session
    const session = Vue.reactive<State>({
      usr: null,
    });
    const setSession = (dispatch: Dispatch) => dispatch(session);

    return {
      state: local,
      setState: setLocal,
      local,
      setLocal,
      session,
      setSession,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        { storage: localStorage, paths: ["local"] },
        { storage: sessionStorage, paths: ["session"] },
      ],
    },
  }
);

type Dispatch = (state: State) => void;

interface State {
  usr: Usr | null;
}

export interface Usr {
  role: string;
  email: string;
  loginAt: number;
}
