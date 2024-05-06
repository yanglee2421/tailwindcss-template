import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import * as Vue from "vue";
import { app } from "@/api/firebase/app";

export const useAuthStore = defineStore("auth", () => {
  const valueRef = Vue.shallowRef({
    auth: getAuth(app),
    updateCount: 0,
  });

  return {
    value: valueRef,
    update() {
      valueRef.value = {
        auth: getAuth(app),
        updateCount: Vue.unref(valueRef).updateCount + 1,
      };
    },
  };
});
