<script lang="ts" setup>
import { useForm } from "@tanstack/vue-form";
import { useMutation } from "@tanstack/vue-query";
import { zodValidator } from "@tanstack/zod-form-adapter";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as Vue from "vue";
import { RouterLink } from "vue-router";
import { z } from "zod";
import { app } from "@/api/firebase/app";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import AuthPage from "@/components/layout/AuthPage.vue";
import type { UserCredential } from "firebase/auth";

type LoginParams = {
  email: string;
  password: string;
};

const mutation = useMutation<UserCredential, Error, LoginParams>({
  mutationFn(params) {
    return signInWithEmailAndPassword(
      getAuth(app),
      params.email,
      params.password,
    );
  },
  onError(error) {
    console.error(error);
  },
});

const form = useForm({
  defaultValues: {
    email: "yanglee2421@gmail.com",
    password: "",
  },

  async onSubmit(props) {
    await mutation.mutateAsync(props.value);
  },
});

const { Field, Subscribe } = form;

const formState = Vue.reactive({
  showPassword: false,
});
</script>

<template>
  <GuestGuard>
    <AuthPage>
      <form
        novalidate
        autocomplete="off"
        class="space-y-4"
        @submit="
          async (evt) => {
            evt.preventDefault();
            evt.stopPropagation();

            await form.handleSubmit();

            const errorEntries = Object.entries(form.state.fieldMeta)
              .map(([key, value]) => {
                return [key, value.errors];
              })
              .filter(([, error]) => error.length);

            if (!errorEntries.length) {
              return;
            }

            console.error(
              'Error Message:',
              '\n',
              Object.fromEntries(errorEntries),
              '\n',
              'Form Values:',
              '\n',
              form.state.values,
            );
          }
        "
        @reset="
          (evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            form.reset();
          }
        "
      >
        <Field
          name="email"
          :validator-adapter="zodValidator"
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
              >
                Email
              </label>
              <input
                :id="field.name"
                type="email"
                :name="field.name"
                :value="field.state.value"
                placeholder="you@email.com"
                class="block w-full rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus-visible:border-blue-500 focus-visible:outline-none group-data-[errors=true]:border-red-500 group-data-[errors=true]:text-red-500 sm:text-sm"
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
                class="text-sm text-red-500"
              >
                {{ error }}
              </p>
            </div>
          </template>
        </Field>
        <Field
          name="password"
          :validator-adapter="zodValidator"
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
              >
                Password
              </label>
              <div
                class="flex w-full overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-blue-500 group-data-[errors=true]:border-red-500 group-data-[errors=true]:text-red-500"
              >
                <input
                  :id="field.name"
                  :type="formState.showPassword ? 'text' : 'password'"
                  class="flex-grow px-3 py-2 placeholder-slate-400 focus-visible:outline-none sm:text-sm"
                  :value="field.state.value"
                  :name="field.name"
                  @input="
                    (evt) => {
                      field.handleChange(
                        (evt.target as HTMLInputElement).value,
                      );
                    }
                  "
                  @blur="field.handleBlur"
                />
                <button
                  type="button"
                  class="px-2 hover:bg-slate-50 focus-visible:bg-slate-100 focus-visible:outline-none active:bg-slate-200"
                  @click="formState.showPassword = !formState.showPassword"
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
        </Field>
        <div>
          <RouterLink
            :to="{ name: 'forgot-password' }"
            class="text-sm font-medium capitalize text-blue-500 hover:text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            forgot password?
          </RouterLink>
        </div>
        <Subscribe>
          <template #default="{ canSubmit }">
            <div>
              <button
                type="submit"
                :disabled="!canSubmit"
                class="w-full rounded-md bg-blue-500 px-5 py-2.5 text-sm uppercase leading-5 text-white ring-blue-200 transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:text-white"
              >
                login
              </button>
            </div>
          </template>
        </Subscribe>
        <div
          class="flex items-center justify-center gap-3 pt-2 text-sm font-medium"
        >
          <span class="text-slate-500">New on out platform?</span>
          <RouterLink
            :to="{ name: 'register' }"
            class="text-blue-500 hover:text-blue-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Create an account
          </RouterLink>
        </div>
        <div class="flex items-center gap-3">
          <hr class="flex-grow border-t" />
          <span class="text-base text-slate-500">or</span>
          <hr class="flex-grow border-t" />
        </div>
        <div class="flex justify-center">
          <button
            type="button"
            class="rounded-md border px-3 py-2 text-sm uppercase text-slate-400 transition-colors hover:border-blue-500 hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:bg-slate-50"
            @click="signInWithPopup(getAuth(app), new GoogleAuthProvider())"
          >
            sign in with google
          </button>
        </div>
      </form>
    </AuthPage>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
