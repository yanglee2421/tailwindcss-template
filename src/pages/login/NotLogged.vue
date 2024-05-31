<script lang="ts" setup>
import { useForm } from "@tanstack/vue-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import * as Vue from "vue";
import { z } from "zod";
import GuestGuard from "@/components/guard/GuestGuard.vue";

const form = useForm({
  defaultValues: {
    email: "yanglee2421@gmail.com",
    password: "",
  },

  async onSubmit(props) {
    console.log(props.value);
  },
});

const state = Vue.reactive({
  showPassword: false,
});
</script>

<template>
  <GuestGuard>
    <div class="fixed inset-0 flex h-full">
      <!-- Empty Container -->
      <div class="hidden flex-grow md:block"></div>

      <!-- Login Form -->
      <div
        class="flex w-full flex-col justify-center border-l p-8 shadow md:max-w-md md:p-6"
      >
        <form
          @submit="
            (evt) => {
              evt.preventDefault();
              evt.stopPropagation();
              form.handleSubmit();
            }
          "
          @reset="form.reset()"
          novalidate
          autocomplete="off"
          class="space-y-4"
        >
          <div>
            <form.Field
              name="email"
              :validatorAdapter="zodValidator"
              :validators="{ onChange: z.string().email() }"
            >
              <template #default="{ field, state }">
                <label
                  :for="field.name"
                  class="block text-sm font-medium text-slate-700"
                  >Email</label
                >
                <input
                  type="email"
                  :class="[
                    'mt-1 block w-full rounded-md border  bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-1   disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm',
                    state.meta.errors.length
                      ? 'border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'
                      : 'border-slate-300 focus:border-sky-500 focus:ring-sky-500',
                  ]"
                  placeholder="you@example.com"
                  :id="field.name"
                  :name="field.name"
                  :value="field.state.value"
                  @blur="field.handleBlur"
                  @input="
                    (e) => {
                      field.handleChange((e.target as HTMLInputElement).value);
                    }
                  "
                />
                <p
                  v-for="(error, idx) in state.meta.errors"
                  :key="idx"
                  class="mt-2 text-sm text-pink-600"
                >
                  {{ error }}
                </p>
              </template>
            </form.Field>
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-slate-700"
              >Password</label
            >
            <div
              class="mt-1 flex w-full overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500"
            >
              <input
                :type="state.showPassword ? 'text' : 'password'"
                class="flex-grow px-3 py-2 placeholder-slate-400 invalid:border-pink-500 invalid:text-pink-600 focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
                value="Bosco"
              />
              <button
                @click="state.showPassword = !state.showPassword"
                type="button"
                class="px-2 hover:bg-slate-50 focus:bg-slate-100 focus:outline-none active:bg-slate-200"
              >
                {{ state.showPassword ? "eye" : "0y0" }}
              </button>
            </div>
          </div>
          <div>
            <a
              href="#"
              class="text-sm font-medium capitalize text-sky-500 underline hover:text-sky-600 focus:text-sky-300 focus:outline-none"
              >forgot password?</a
            >
          </div>
          <div>
            <button
              type="submit"
              class="w-full rounded-md bg-sky-500 px-5 py-2.5 text-sm uppercase leading-5 text-white ring-sky-200 hover:bg-sky-700 focus:bg-sky-400 focus:outline-none"
            >
              login
            </button>
          </div>
          <div
            class="flex items-center justify-center gap-3 text-sm font-medium"
          >
            <span class="text-slate-500">New on out platform?</span>
            <a
              href="#"
              class="text-sky-500 underline"
              >Create an account</a
            >
          </div>
          <div class="flex items-center gap-3">
            <hr class="flex-grow border-t" />
            <span class="text-base">or</span>
            <hr class="flex-grow border-t" />
          </div>
          <div class="flex justify-center">
            <button
              type="button"
              class="rounded-md border px-3 py-2 text-sm uppercase text-slate-400 transition-colors hover:border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 active:bg-slate-50"
            >
              sign in with google
            </button>
          </div>
        </form>
      </div>
    </div>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
