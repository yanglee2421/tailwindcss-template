import { defineStore } from "pinia";
import { reactive } from "vue";

type Dispatch = (state: State) => void;

export const useStoreLogin = defineStore(
  "login",
  () => {
    // State && Dispatch
    const state = reactive<State>({
      usr: null,
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
  usr: Usr | null;
}

export interface Usr {
  role: string;
  email: string;
}
