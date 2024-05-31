<script lang="ts" setup>
import { useForm } from "@tanstack/vue-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as Vue from "vue";
import { z } from "zod";
import { app } from "@/api/firebase/app";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import { timeout } from "@/utils/timeout";

const form = useForm({
  defaultValues: {
    email: "yanglee2421@gmail.com",
    password: "",
  },

  async onSubmit(props) {
    await timeout(1000);
    console.log(props.value);
  },
});

const formState = Vue.reactive({
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
          @reset="
            (evt) => {
              evt.preventDefault();
              evt.stopPropagation();
              form.reset();
            }
          "
          novalidate
          autocomplete="off"
          class="space-y-4"
        >
          <form.Field
            name="email"
            :validatorAdapter="zodValidator"
            :validators="{ onChange: z.string().email() }"
          >
            <template #default="{ field, state }">
              <div
                class="group space-y-1"
                :data-errors="!!state.meta.errors.length"
              >
                <label
                  :for="field.name"
                  class="block text-sm font-medium text-slate-700 group-data-[errors=true]:text-red-500"
                  >Email</label
                >
                <input
                  type="email"
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
                  class="block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus-visible:border-sky-500 focus-visible:outline-none group-data-[errors=true]:border-red-500 group-data-[errors=true]:text-red-500 sm:text-sm"
                />
                <p
                  v-for="(error, idx) in state.meta.errors"
                  :key="idx"
                  class="text-sm text-red-500"
                >
                  {{ error }}
                </p>
              </div>
            </template>
          </form.Field>
          <form.Field
            name="password"
            :validatorAdapter="zodValidator"
            :validators="{ onChange: z.string().min(8).max(16) }"
          >
            <template #default="{ field, state }">
              <div
                class="group space-y-1"
                :data-errors="!!state.meta.errors.length"
              >
                <label
                  :for="field.name"
                  class="block text-sm font-medium text-slate-700 group-data-[errors=true]:text-red-500"
                  >Password</label
                >
                <div
                  class="flex w-full overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-sky-500 group-data-[errors=true]:border-red-500 group-data-[errors=true]:text-red-500"
                >
                  <input
                    :type="formState.showPassword ? 'text' : 'password'"
                    class="flex-grow px-3 py-2 placeholder-slate-400 focus-visible:outline-none sm:text-sm"
                    :value="field.state.value"
                    @input="
                      (evt) => {
                        field.handleChange(
                          (evt.target as HTMLInputElement).value,
                        );
                      }
                    "
                    @blur="field.handleBlur"
                    :id="field.name"
                    :name="field.name"
                  />
                  <button
                    @click="formState.showPassword = !formState.showPassword"
                    type="button"
                    class="px-2 hover:bg-slate-50 focus-visible:bg-slate-100 focus-visible:outline-none active:bg-slate-200"
                  >
                    {{ formState.showPassword ? "0" : "O" }}
                  </button>
                </div>
                <p
                  v-for="(error, idx) in state.meta.errors"
                  :key="idx"
                  class="text-sm text-red-500"
                >
                  {{ error }}
                </p>
              </div>
            </template>
          </form.Field>
          <div>
            <a
              href="#"
              class="text-sm font-medium capitalize text-sky-500 underline hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >forgot password?</a
            >
          </div>
          <form.Subscribe>
            <template #default="{ canSubmit }">
              <div>
                <button
                  type="submit"
                  :disabled="!canSubmit"
                  class="w-full rounded-md bg-sky-500 px-5 py-2.5 text-sm uppercase leading-5 text-white ring-sky-200 hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 disabled:cursor-not-allowed disabled:bg-sky-300 disabled:text-white"
                >
                  login
                </button>
              </div>
            </template>
          </form.Subscribe>
          <div
            class="flex items-center justify-center gap-3 text-sm font-medium"
          >
            <span class="text-slate-500">New on out platform?</span>
            <a
              href="#"
              class="text-sky-500 underline hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
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
              @click="
                () => {
                  signInWithPopup(getAuth(app), new GoogleAuthProvider());
                }
              "
              type="button"
              class="rounded-md border px-3 py-2 text-sm uppercase text-slate-400 transition-colors hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-slate-50"
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
