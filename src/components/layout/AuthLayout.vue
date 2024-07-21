<script lang="ts" setup>
import * as Vue from "vue";
import { RouterView } from "vue-router";
import AuthGuard from "@/components/guard/AuthGuard.vue";
import ScrollView from "@/components/ui/ScrollView.vue";

const state = Vue.reactive({
  showAside: false,
});
</script>

<template>
  <AuthGuard>
    <div class="relative flex dark:bg-black dark:text-white">
      <aside
        :class="[
          'absolute inset-y-0  z-10 flex h-dvh w-full flex-shrink-0 flex-grow-0 flex-col bg-white transition-all sm:sticky sm:start-0 sm:w-72 sm:border-r dark:bg-black dark:text-white',
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
          <ScrollView
            :options="{ wheelPropagation: false, suppressScrollX: true }"
          >
            <nav class="flex flex-col gap-2 p-5">
              <RouterLink
                :to="{ name: 'home' }"
                class="hover:text-blue-500 aria-[current=page]:text-blue-500"
                >home</RouterLink
              >
              <RouterLink
                :to="{ name: 'tailwindcss' }"
                class="hover:text-blue-500 aria-[current=page]:text-blue-500"
                >tailwindcss</RouterLink
              >
              <RouterLink
                :to="{ name: 'button' }"
                class="hover:text-blue-500 aria-[current=page]:text-blue-500"
                >button</RouterLink
              >
            </nav>

            <div
              v-for="item in 5"
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
        <main class="p-6">
          <RouterView />
        </main>
        <footer class="border-t px-5 py-2">footer</footer>
      </div>
    </div>
  </AuthGuard>
</template>

<style lang="scss" scoped></style>
