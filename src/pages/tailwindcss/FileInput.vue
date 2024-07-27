<script lang="ts" setup></script>

<template>
  <div class="max-w-sm bg-white px-6 py-8 shadow">
    <form class="flex items-center space-x-6">
      <div class="shrink-0">
        <img
          class="h-16 w-16 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1361&amp;q=80"
          alt="Current profile photo"
        />
      </div>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
