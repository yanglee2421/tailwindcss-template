// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

// Assets Imports
import frame from "@/assets/image/fabric/frame.png";

export const useStoreFrame = defineStore("frame", () => {
  // ** State
  const initState = getInitState();
  const state = Vue.reactive<FrameState>(initState);

  // ** Computed
  const dialogTitle = Vue.computed(() => {
    switch (state.tab) {
      case 1:
        return "Upload a photo";
      case 2:
        return "Download";
      default:
        return "";
    }
  });

  // ** Methods
  const setState = (fn: SetState) => fn(state);
  const reset = () => {
    Object.assign(state, getInitState());
  };

  return {
    state,
    dialogTitle,
    setState,
    reset,
  };
});

function getInitState(): FrameState {
  return {
    tab: 1,
    upload: "",
    result: "",
    current: frame,
    frame,
    loading: false,
  };
}

interface FrameState {
  tab: number;
  upload: string;
  result: string;
  current: string;
  frame: string;
  loading: boolean;
}
type SetState = (state: FrameState) => void;
