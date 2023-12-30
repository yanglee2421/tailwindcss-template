<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";

// Store Imports
import { useAuth } from "@/hooks/store";
import { useRouter } from "vue-router";
import { useAcl } from "@/configs/acl";

const router = useRouter();
const [authRef] = useAuth();
const acl = useAcl();

Vue.watch(
  [router.currentRoute, authRef],
  async ([route, auth]) => {
    switch (route.meta.auth) {
      case "guest": {
        if (auth.currentUser) {
          await router.replace({ name: "home" });
        }

        break;
      }

      case "none":
        break;

      case "auth":
      default: {
        // Not logged in
        if (!auth.currentUser) {
          await router.replace({ name: "login" });
          break;
        }

        // Can access route
        const canAccess = acl.can(
          String(route.meta.aclAction || "read"),
          String(route.meta.aclSubject || "fallback")
        );

        if (canAccess) {
          break;
        }

        // Can not access route
        await router.replace({ name: "401" });
      }
    }
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
