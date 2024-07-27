<script lang="ts" setup></script>

<template>
  <div class="max-w-sm bg-white px-6 pb-5 pt-6 shadow">
    <form>
      <label class="block">
        <span
          class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
          >Email</span
        >
        <input
          id="email"
          type="email"
          name="email"
          class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="you@example.com"
        />
      </label>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
