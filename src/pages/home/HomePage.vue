<script lang="ts" setup>
import { signOut, getAuth } from "firebase/auth";
import * as Vue from "vue";
import { app } from "@/api/firebase/app";
import AuthGuard from "@/components/guard/AuthGuard.vue";
import ScrollView from "@/components/ui/ScrollView.vue";
import TransitionDialog from "./TransitaionDialog.vue";

const state = Vue.reactive({
  showAside: false,
  showDialog: false,
});
</script>

<template>
  <AuthGuard>
    <div class="relative flex dark:bg-black dark:text-white">
      <aside
        :class="[
          'absolute inset-y-0  z-10 flex h-dvh w-full flex-col bg-white transition-all sm:sticky sm:start-0 sm:w-72 sm:border-r dark:bg-black dark:text-white',
          state.showAside ? 'start-0' : '-start-full',
        ]"
      >
        <div class="flex justify-between px-5 py-2">
          <h2 class="text-xl font-medium">aside</h2>
          <button
            class="flex sm:hidden"
            @click="state.showAside = !state.showAside"
          >
            list
          </button>
        </div>
        <div class="flex-1 overflow-hidden border-t">
          <ScrollView :options="{ wheelPropagation: false }">
            <div
              v-for="item in 10"
              :key="item"
              class="h-96"
            ></div>
          </ScrollView>
        </div>
      </aside>
      <div class="flex-grow">
        <header
          class="sticky top-0 z-10 flex justify-between gap-3 border-b bg-white px-5 py-2 dark:bg-black dark:text-white"
        >
          <span class="text-xl uppercase"> header </span>

          <button
            class="flex sm:hidden"
            @click="state.showAside = !state.showAside"
          >
            list
          </button>
        </header>
        <main class="p-5">
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
          <div
            v-for="item in 5"
            :key="item"
            class="h-96"
          ></div>
        </main>
        <footer class="border-t px-5 py-2">footer</footer>
      </div>
    </div>
  </AuthGuard>
</template>

<style lang="scss" scoped></style>
