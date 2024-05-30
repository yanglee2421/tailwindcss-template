<script lang="ts" setup>
import GuestGuard from "@/components/guard/GuestGuard.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <GuestGuard>
    <div class="fixed inset-0 flex h-full">
      <div class="hidden md:block">
        <div
          class="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg"
        >
          <div class="shrink-0">
            <img
              class="h-12 w-12"
              src="/img/logo.svg"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
          </div>
        </div>
      </div>
      <div
        class="ms-auto flex w-full flex-col justify-center border-l p-6 md:max-w-96"
      >
        <form>
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >Username</label
            >
            <div class="mt-1">
              <input
                type="text"
                class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
                disabled
              />
            </div>
          </div>
          <div class="mt-6">
            <label class="block text-sm font-medium text-slate-700"
              >Email</label
            >
            <div class="mt-1">
              <input
                type="email"
                class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
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
                class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
                value="Bosco"
              />
            </div>
          </div>
          <div class="mt-6 text-right">
            <button
              class="w-full rounded-md bg-sky-500 px-5 py-2.5 text-sm uppercase leading-5 text-white hover:bg-sky-700"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
