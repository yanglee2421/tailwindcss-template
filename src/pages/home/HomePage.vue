<script lang="ts" setup>
import { signOut, getAuth } from "firebase/auth";
import * as Vue from "vue";
import { app } from "@/api/firebase/app";
import TransitionDialog from "./TransitaionDialog.vue";

const state = Vue.reactive({
  showAside: false,
  showDialog: false,
});
</script>

<template>
  <TransitionDialog :open="state.showDialog">
    <div class="mt-3 rounded border px-5 py-2">
      <p>hello dialog</p>
      <button
        class="rounded bg-indigo-500 px-3 py-1.5 font-medium uppercase text-white hover:bg-indigo-600 focus-visible:bg-indigo-700"
        @click="state.showDialog = !state.showDialog"
      >
        close
      </button>
    </div>
  </TransitionDialog>
  <div class="space-y-6">
    <div class="flex gap-3">
      <button
        class="rounded bg-red-500 px-3 py-1.5 text-white hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500/50 active:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-500/50"
        @click="signOut(getAuth(app))"
      >
        sign out
      </button>
      <button
        class="rounded bg-indigo-500 px-3 py-1.5 font-medium uppercase text-white hover:bg-indigo-600 focus-visible:bg-indigo-700"
        @click="state.showDialog = !state.showDialog"
      >
        open
      </button>
    </div>
    <div
      class="flex h-96 snap-x snap-mandatory divide-x overflow-auto border bg-white"
    >
      <div
        v-for="item in 3"
        :key="item"
        class="h-full flex-none basis-full snap-center snap-always md:min-w-0 md:flex-1 md:basis-auto"
      >
        {{ item }}
      </div>
    </div>
    <div
      v-for="item in 5"
      :key="item"
      class="h-96 rounded border shadow"
    ></div>
  </div>
</template>

<style lang="scss" scoped></style>
