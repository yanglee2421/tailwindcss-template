<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <div class="p-8 pt-7">
      <p class="mb-2 text-sm font-medium text-slate-500">Light mode</p>
      <div
        class="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5"
      >
        <div>
          <span
            class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </span>
        </div>
        <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900">
          Writes Upside-Down
        </h3>
        <p class="mt-2 text-sm text-slate-500">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
    <div class="bg-slate-900 p-8 pt-7">
      <p class="mb-2 text-sm font-medium text-slate-400">Dark mode</p>
      <div
        class="rounded-lg bg-slate-800 px-6 py-8 shadow-xl ring-1 ring-slate-900/5"
      >
        <div>
          <span
            class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </span>
        </div>
        <h3 class="mt-5 text-base font-medium tracking-tight text-white">
          Writes Upside-Down
        </h3>
        <p class="mt-2 text-sm text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
