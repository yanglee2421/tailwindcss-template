import { defineStore } from "pinia";
import { reactive } from "vue";

type Cb = (state: State) => void;

export const useStoreLogin = defineStore(
  "login-store",
  () => {
    const state = reactive<State>({
      usr: null,
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

interface State {
  usr: Usr | null;
}

interface Usr {
  role: string;
}
