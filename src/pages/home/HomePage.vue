<script lang="ts" setup>
import { signOut, getAuth } from "firebase/auth";
import * as Vue from "vue";
import { app } from "@/api/firebase/app";
import AuthGuard from "@/components/guard/AuthGuard.vue";

const formValues = Vue.reactive<{
  checkbox: number[];
}>({
  checkbox: [],
});
</script>

<template>
  <AuthGuard>
    <div class="p-3">
      <button
        class="rounded bg-red-500 px-3 py-1.5 text-white hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500/50 active:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-500/50"
        @click="signOut(getAuth(app))"
      >
        sign out
      </button>
    </div>
    <div
      class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <label
        v-for="item in 20"
        :key="item"
        class="block cursor-pointer rounded border p-3 transition-colors has-[:checked]:border-red-500 has-[:checked]:text-red-500"
        @click="
          () => {
            console.log(formValues.checkbox);
          }
        "
      >
        <input
          v-model="formValues.checkbox"
          type="checkbox"
          hidden
          :value="item"
        />
        {{ item }}</label
      >
    </div>
  </AuthGuard>
</template>

<style lang="scss" scoped></style>
