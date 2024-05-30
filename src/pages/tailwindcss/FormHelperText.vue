<script lang="ts" setup></script>

<template>
  <div class="mx-auto max-w-sm bg-white px-6 pb-5 pt-6 shadow">
    <form>
      <div>
        <label
          for="email-2"
          class="block text-sm font-medium text-slate-700"
          >Email</label
        >
        <div class="mt-1">
          <input
            type="email"
            name="email"
            id="email-2"
            class="peer block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
            value="george@krugerindustrial."
            placeholder="you@example.com"
          />
          <p class="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
            Please provide a valid email address.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
