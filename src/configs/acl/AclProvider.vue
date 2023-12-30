<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";

// Acl Imports
import { defineAbilityFor } from "./defineAbilityFor";
import { useAcl } from "./useAcl";

// Store Imports
import { useAuth } from "@/hooks/store";

const [authRef] = useAuth();
const acl = useAcl();

Vue.watch(
  authRef,
  (auth) => {
    acl.update(defineAbilityFor(auth.currentUser ? "" : "").rules);
  },
  {
    immediate: true,
    flush: "post",
  }
);
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
