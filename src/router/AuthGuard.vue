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
          await router.replace({ name: "401" });
          break;
        }

        // Can access route
        if (
          acl.can(
            String(route.meta.aclAction || "read"),
            String(route.meta.aclSubject || "fallback")
          )
        ) {
          break;
        }

        // Can not access route
        await router.replace({ name: "403" });
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
