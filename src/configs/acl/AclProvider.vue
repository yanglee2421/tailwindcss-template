<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";

// Acl Imports
import { defineAbilityFor } from "./defineAbilityFor";
import { provideAbility } from "@casl/vue";

const acl = defineAbilityFor("");
provideAbility(acl);

Vue.watchPostEffect(() => {
  acl.update(defineAbilityFor("").rules);
});
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
