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
    <div class="relative flex">
      <aside
        :class="[
          'absolute inset-y-0 z-20 flex h-dvh w-full flex-shrink-0 flex-grow-0 flex-col bg-white  transition-all sm:sticky sm:start-0 sm:w-72 sm:border-r ',
          state.showAside ? 'start-0' : '-start-full',
        ]"
      >
        <div class="flex items-center justify-between px-5 py-2">
          <RouterLink
            :to="{ name: 'index' }"
            class="flex items-center gap-3"
          >
            <i class="iconify text-2xl text-blue-500 mdi--vuejs"></i>
            <span class="text-xl font-medium uppercase">app name</span>
          </RouterLink>
          <button
            class="flex size-10 items-center justify-center rounded-full text-2xl text-blue-500 transition-colors hover:bg-slate-500 sm:hidden"
            @click="state.showAside = !state.showAside"
          >
            <i class="iconify mdi--close"></i>
          </button>
        </div>
        <div class="flex-1 overflow-hidden border-t">
          <ScrollView
            :options="{ wheelPropagation: false, suppressScrollX: true }"
          >
            <nav class="flex flex-col gap-2 p-5 text-base">
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
              <RouterLink
                :to="{ name: 'chat' }"
                class="hover:text-blue-500 aria-[current=page]:text-blue-500"
                >chat</RouterLink
              >
            </nav>
          </ScrollView>
        </div>
      </aside>
      <div
        class="w-full min-w-0 has-[.contentFixed]:flex has-[.contentFixed]:h-dvh has-[.contentFixed]:flex-col"
      >
        <header
          class="sticky top-0 z-10 flex items-center border-b bg-white px-5 py-2"
        >
          <span class="text-xl uppercase"> header </span>

          <button
            class="ms-auto flex size-10 items-center justify-center rounded-full text-2xl hover:bg-slate-500 sm:hidden"
            @click="state.showAside = !state.showAside"
          >
            <i class="iconify mdi--menu"></i>
          </button>
        </header>
        <main
          class="p-6 text-base has-[.contentFixed]:min-h-0 has-[.contentFixed]:flex-1"
        >
          <RouterView />
        </main>
        <footer class="border-t px-5 py-2">
          &copy;2024, Made with ❤️ by
          <a
            href="https://github.com/yanglee2421"
            class="text-blue-500 hover:underline"
            >YangLee2421</a
          >
        </footer>
      </div>
    </div>
  </AuthGuard>
</template>

<style lang="scss" scoped></style>
