<script lang="ts" setup></script>

<template>
  <div class="mx-auto max-w-sm bg-white px-6 py-5 shadow">
    <form>
      <div>
        <label
          for="username"
          class="block text-sm font-medium text-slate-700"
          >Username</label
        >
        <div class="mt-1">
          <input
            type="text"
            name="username"
            id="username"
            class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            value="tbone"
            disabled
          />
        </div>
      </div>
      <div class="mt-6">
        <label
          for="email"
          class="block text-sm font-medium text-slate-700"
          >Email</label
        >
        <div class="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            value="george@krugerindustrial."
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div class="mt-6">
        <label
          for="password"
          class="block text-sm font-medium text-slate-700"
          >Password</label
        >
        <div class="mt-1">
          <input
            type="password"
            name="password"
            id="password"
            class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            value="Bosco"
          />
        </div>
      </div>
      <div class="mt-6 text-right">
        <button
          class="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold leading-5 text-white hover:bg-sky-700"
        >
          Save changes
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
