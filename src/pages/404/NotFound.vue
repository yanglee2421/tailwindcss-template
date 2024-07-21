<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-[100dvh] p-6">
    <div class="flex h-full rounded border sm:divide-x">
      <div
        class="hidden flex-shrink-0 flex-grow-0 basis-80 flex-col divide-y sm:flex"
      >
        <div>
          <h1 class="p-3 text-red-500">404</h1>
        </div>
        <div class="flex-1 overflow-auto">
          <div class="h-[1400px]"></div>
        </div>
      </div>
      <div class="flex flex-1 flex-col divide-y">
        <div class="flex p-3">
          <h2 class="mr-auto">header</h2>
          <button class="sm:hidden">close</button>
        </div>
        <div class="flex-1 overflow-auto">
          <div class="flex h-[1400px] items-center justify-center">
            <RouterLink
              :to="{ name: 'home' }"
              class="rounded-full border bg-indigo-500 px-4 py-2 text-xl text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:bg-indigo-700"
            >
              take me home
            </RouterLink>
          </div>
        </div>
        <div class="flex px-6 py-3">
          <button
            class="ml-auto rounded border bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:bg-indigo-700"
          >
            chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
