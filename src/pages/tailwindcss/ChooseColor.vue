<script lang="ts" setup></script>

<template>
  <div class="max-w-sm bg-white px-6 pb-4 pt-6 shadow">
    <form>
      <legend>Choose a theme:</legend>
      <div class="mt-4 grid grid-flow-col">
        <label
          for="theme-1"
          class="text-sm font-medium text-slate-700"
        >
          <div
            class="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-slate-50 has-[:checked]:border-cyan-500 has-[:checked]:bg-cyan-50 has-[:checked]:text-cyan-50 forced-colors:border-0"
          >
            <input
              id="theme-1"
              type="radio"
              name="themes"
              class="appearance-none forced-colors:appearance-auto"
              checked
            />
            <p class="hidden forced-colors:block">Cyan</p>
            <div
              class="absolute left-3 top-3 h-6 w-6 rounded-full bg-cyan-200 forced-colors:hidden"
            ></div>
            <div
              class="absolute bottom-3 right-3 h-6 w-6 rounded-full bg-cyan-500 ring-2 ring-current forced-colors:hidden"
            ></div>
          </div>
        </label>
        <label
          for="theme-2"
          class="text-sm font-medium text-slate-700"
        >
          <div
            class="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-50 forced-colors:border-0"
          >
            <input
              id="theme-2"
              type="radio"
              name="themes"
              class="appearance-none forced-colors:appearance-auto"
            />
            <p class="hidden forced-colors:block">Blue</p>
            <div
              class="absolute left-3 top-3 h-6 w-6 rounded-full bg-blue-200 forced-colors:hidden"
            ></div>
            <div
              class="absolute bottom-3 right-3 h-6 w-6 rounded-full bg-blue-500 ring-2 ring-current forced-colors:hidden"
            ></div>
          </div>
        </label>
        <label
          for="theme-3"
          class="text-sm font-medium text-slate-700"
        >
          <div
            class="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-slate-50 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-50 forced-colors:border-0"
          >
            <input
              id="theme-3"
              type="radio"
              name="themes"
              class="appearance-none forced-colors:appearance-auto"
            />
            <p class="hidden forced-colors:block">Indigo</p>
            <div
              class="absolute left-3 top-3 h-6 w-6 rounded-full bg-indigo-200 forced-colors:hidden"
            ></div>
            <div
              class="absolute bottom-3 right-3 h-6 w-6 rounded-full bg-indigo-500 ring-2 ring-current forced-colors:hidden"
            ></div>
          </div>
        </label>
        <label
          for="theme-4"
          class="text-sm font-medium text-slate-700"
        >
          <div
            class="relative grid h-16 w-16 items-center justify-center rounded-xl border border-transparent bg-transparent text-white hover:bg-slate-50 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50 has-[:checked]:text-purple-50 forced-colors:border-0"
          >
            <input
              id="theme-4"
              type="radio"
              name="themes"
              class="appearance-none forced-colors:appearance-auto"
            />
            <p class="hidden forced-colors:block">Purple</p>
            <div
              class="absolute left-3 top-3 h-6 w-6 rounded-full bg-purple-200 forced-colors:hidden"
            ></div>
            <div
              class="absolute bottom-3 right-3 h-6 w-6 rounded-full bg-purple-500 ring-2 ring-current forced-colors:hidden"
            ></div>
          </div>
        </label>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
