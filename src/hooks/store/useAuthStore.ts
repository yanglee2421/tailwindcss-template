// Pinia Imports
import { defineStore } from "pinia";

// Vue Imports
import * as Vue from "vue";

// Firebase Imports
import { getAuth } from "firebase/auth";
import { app } from "@/api/firebase";

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
