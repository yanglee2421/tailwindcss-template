<script lang="ts" setup>
import { useForm } from "@tanstack/vue-form";
import { useMutation } from "@tanstack/vue-query";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { RouterLink } from "vue-router";
import { z } from "zod";
import { app } from "@/api/firebase/app";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import GuestLayout from "@/components/layout/GuestLayout.vue";

const mutation = useMutation<void, Error, string>({
  mutationFn(email) {
    return sendPasswordResetEmail(getAuth(app), email);
  },
});

const form = useForm({
  defaultValues: {
    email: "",
  },

  async onSubmit(props) {
    await mutation.mutateAsync(props.value.email);
  },
  validatorAdapter: zodValidator(),
});

const { Field, Subscribe } = form;
</script>

<template>
  <GuestGuard>
    <GuestLayout>
      <form
        novalidate
        autocomplete="off"
        class="space-y-5"
        @submit="
          async (evt) => {
            evt.preventDefault();
            evt.stopPropagation();

            await form.handleSubmit();
          }
        "
        @reset="form.reset()"
      >
        <Field
          name="email"
          :validators="{ onChange: z.string().email() }"
        >
          <template #default="{ field, state }">
            <div
              class="group space-y-1"
              :data-errors="!!state.meta.errors.length"
            >
              <label
                class="text-sm font-medium text-slate-700 group-data-[errors=true]:text-red-500"
              >
                Email
              </label>
              <input
                :value="field.state.value"
                type="email"
                class="block w-full rounded-md border px-3 py-3 text-sm shadow-sm hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none group-data-[errors=true]:border-red-500 group-data-[errors=true]:text-red-500"
                @input="
                  (evt) => {
                    field.handleChange((evt.target as HTMLInputElement).value);
                  }
                "
                @blur="field.handleBlur()"
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

        <Subscribe>
          <template #default="{ canSubmit }">
            <button
              :disabled="!canSubmit"
              type="submit"
              class="block w-full rounded bg-blue-500 px-3 py-2 uppercase text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              send reset email
            </button>
          </template>
        </Subscribe>
      </form>
      <RouterLink
        :to="{ name: 'login' }"
        class="mt-2 rounded px-3 py-2 text-center uppercase text-blue-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-slate-200"
      >
        back to login
      </RouterLink>
    </GuestLayout>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
