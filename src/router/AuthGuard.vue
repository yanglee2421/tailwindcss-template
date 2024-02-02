<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";

// Store Imports
import { useAuthStore } from "@/hooks/store";
import { useRouter } from "vue-router";
import { useAcl, defineAbilityFor } from "@/configs/acl";

// Firebase Imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/api/firebase";

const router = useRouter();
const authStore = useAuthStore();
const acl = useAcl();

Vue.watchPostEffect((onCleanup) => {
  const unsubscribe = onAuthStateChanged(
    getAuth(app),
    () => {
      authStore.update();
    },
    (error) => {
      console.error(error);
    }
  );

  onCleanup(() => {
    unsubscribe();
  });
});

Vue.watchPostEffect(async () => {
  const route = Vue.unref(router.currentRoute);
  const auth = authStore.value.auth;

  acl.update(defineAbilityFor(auth.currentUser ? "admin" : "").rules);

  if (!route.matched.length) {
    return;
  }

  switch (route.meta.auth) {
    case "none":
      break;

    case "guest":
      if (auth.currentUser) {
        await router.replace({ name: "home" });
      }
      break;

    case "auth":
    default:
      if (!auth.currentUser) {
        await router.replace({ name: "401" });
        break;
      }

      if (
        acl.can(
          String(route.meta.aclAction || "read"),
          String(route.meta.aclSubject || "fallback")
        )
      ) {
        break;
      }

      await router.replace({ name: "403" });
  }
});
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
