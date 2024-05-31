<script setup lang="ts"></script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center text-7xl text-sky-500 dark:bg-slate-800"
  >
    <svg
      width="1em"
      height="1em"
      class="animate-spin motion-reduce:hidden"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped></style>
