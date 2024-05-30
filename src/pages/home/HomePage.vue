<script lang="ts" setup>
import * as Vue from "vue";
import AuthGuard from "@/components/guard/AuthGuard.vue";
import { signOut, getAuth } from "firebase/auth";
import { app } from "@/api/firebase/app";

const formValues = Vue.reactive<{
  checkbox: number[];
}>({
  checkbox: [],
});
</script>

<template>
  <AuthGuard>
    <div>
      <button @click="signOut(getAuth(app))">sign out</button>
    </div>
    <div
      class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <label
        v-for="item in 20"
        :key="item"
        :class="[
          'block cursor-pointer rounded border p-3 transition-colors',
          formValues.checkbox.includes(item) && ' border-red-500 text-red-500',
        ]"
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
