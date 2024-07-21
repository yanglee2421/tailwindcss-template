<script lang="ts" setup></script>

<template>
  <div class="flex flex-wrap gap-3">
    <button
      class="rounded bg-indigo-500 px-5 py-2 uppercase hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-800 disabled:text-slate-300"
    >
      primary
    </button>
    <button
      class="rounded bg-green-500 px-5 py-2 uppercase hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 active:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-800 disabled:text-slate-300"
    >
      success
    </button>
    <button
      class="rounded bg-gray-500 px-5 py-2 uppercase hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 active:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-300"
    >
      info
    </button>
    <button
      class="rounded bg-yellow-500 px-5 py-2 uppercase hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 active:bg-yellow-700 disabled:cursor-not-allowed disabled:bg-yellow-800 disabled:text-gray-300"
    >
      warning
    </button>
    <button
      class="disabled:text-Gray-300 rounded bg-red-500 px-5 py-2 uppercase hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 active:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-800 disabled:text-gray-300"
    >
      error
    </button>
  </div>
  <hr class="my-4" />
  <div class="flex flex-wrap gap-3">
    <button
      disabled
      class="rounded bg-indigo-500 px-5 py-2 uppercase hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-800 disabled:text-slate-300"
    >
      primary
    </button>
    <button
      disabled
      class="rounded bg-green-500 px-5 py-2 uppercase hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 active:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-800 disabled:text-slate-300"
    >
      success
    </button>
    <button
      disabled
      class="rounded bg-gray-500 px-5 py-2 uppercase hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 active:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-300"
    >
      info
    </button>
    <button
      disabled
      class="rounded bg-yellow-500 px-5 py-2 uppercase hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 active:bg-yellow-700 disabled:cursor-not-allowed disabled:bg-yellow-800 disabled:text-gray-300"
    >
      warning
    </button>
    <button
      disabled
      class="disabled:text-Gray-300 rounded bg-red-500 px-5 py-2 uppercase hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 active:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-800 disabled:text-gray-300"
    >
      error
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
