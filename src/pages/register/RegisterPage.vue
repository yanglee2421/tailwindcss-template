<script lang="ts" setup>
import AuthPage from "@/components/layout/AuthPage.vue";
import GuestGuard from "@/components/guard/GuestGuard.vue";
import { useForm } from "@tanstack/vue-form";

const form = useForm({
  defaultValues: {},
});
</script>

<template>
  <GuestGuard>
    <AuthPage>
      <form action="">
        <div>
          <label class="text-sm font-medium capitalize text-slate-700"
            >email</label
          >
          <input
            type="text"
            class="block w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm"
          />
        </div>
      </form>
    </AuthPage>
  </GuestGuard>
</template>

<style lang="scss" scoped></style>
