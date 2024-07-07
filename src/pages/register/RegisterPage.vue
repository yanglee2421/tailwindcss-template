<script lang="ts" setup>
import { useForm } from "@tanstack/vue-form";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import AuthPage from "@/components/layout/AuthPage.vue";

const form = useForm({
  defaultValues: {
    email: "",
  },
});

const { Field } = form;
</script>

<template>
  <GuestGuard>
    <AuthPage>
      <form action="">
        <div>
          <label class="text-sm font-medium capitalize text-slate-700"
            >email</label
          >
          <Field name="email">
            <input
              type="text"
              class="block w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm"
            />
          </Field>
        </div>
      </form>
    </AuthPage>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
