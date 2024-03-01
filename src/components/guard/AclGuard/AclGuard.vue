<script setup lang="ts">
import NotAuthorization from "./NotAuthorization.vue";
import { useAcl } from "@/configs/acl/useAcl";

const props = defineProps<{
  action: string;
  subject: string;
}>();

const acl = useAcl();
</script>
<template>
  <slot v-if="acl.can(props.action, props.subject)"></slot>
  <NotAuthorization v-else></NotAuthorization>
</template>
<style lang="scss" scoped></style>
