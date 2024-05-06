<script lang="ts" setup>
import * as Vue from "vue";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { useAcl } from "@/hooks/useAcl";
import { defineAbilityFor } from "@/libs/defineAbilityFor";
import NotAuthorization from "./NotAuthorization.vue";

const props = defineProps<{
  action: string;
  subject: string;
}>();

const authStore = useAuthStore();
const acl = useAcl();

Vue.watchPostEffect(() => {
  const newAcl = defineAbilityFor(
    authStore.value.auth.currentUser?.metadata.creationTime || "admin",
  );

  acl.update(newAcl.rules);
});
</script>

<template>
  <slot v-if="acl.can(props.action, props.subject)"></slot>
  <NotAuthorization v-else />
</template>

<style lang="scss" scoped></style>
