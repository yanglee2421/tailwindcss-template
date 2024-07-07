<script lang="ts" setup></script>

<template>
  <div class="mx-auto max-w-sm bg-white px-6 pb-4 pt-6 shadow">
    <form>
      <div>
        <label
          for="contrast-example"
          class="block text-sm font-medium text-slate-700"
          >Social Security Number</label
        >
        <div class="mt-1">
          <input
            id="contrast-example"
            type="text"
            name="contrast-example"
            class="block w-full rounded-md border border-slate-200 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 sm:text-sm"
            placeholder="000-00-0000"
          />
          <p
            class="mt-2 text-sm text-slate-600 opacity-10 contrast-more:opacity-100"
          >
            We need this to steal your identity.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
