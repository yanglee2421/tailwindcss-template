<script lang="ts" setup>
import { useAcl } from "@/hooks/useAcl";
import NotAuthorization from "./NotAuthorization.vue";

const props = defineProps<{
  action: string;
  subject: string;
}>();

const acl = useAcl();
</script>

<template>
  <slot v-if="acl.can(props.action, props.subject)"></slot>
  <NotAuthorization v-else />
</template>

<style lang="scss" scoped></style>
