import { defineStore } from "pinia";
import { reactive } from "vue";

interface State {
  isLogined: boolean;
}

type Cb = (state: State) => void;

export const useLoginStore = defineStore(
  "login-store",
  () => {
    const state = reactive<State>({
      isLogined: false,
    });
    const setState = (cb: Cb) => cb(state);
    return { state, setState };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: sessionStorage,
        },
      ],
    },
  }
);
