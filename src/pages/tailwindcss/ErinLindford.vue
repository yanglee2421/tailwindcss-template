<script lang="ts" setup>
import img from "@/assets/image/erin-lindford.jpg";
const imgHref = new URL(img, import.meta.url).href;
</script>

<template>
  <div
    class="max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4"
  >
    <img
      class="block h-24 rounded-full sm:mx-0 sm:shrink-0"
      :src="imgHref"
      alt="Woman's Face"
    />
    <div class="space-y-2 text-center sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg font-semibold text-black">Erin Lindford</p>
        <p class="font-medium text-slate-500">Product Engineer</p>
      </div>
      <button
        class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Message
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
