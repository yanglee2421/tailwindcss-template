<script setup lang="ts">
import * as Vue from "vue";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { useRouter } from "vue-router";
import LoadingScreen from "@/components/shared/LoadingScreen.vue";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "@/api/firebase/app";

const store = useAuthStore();
const router = useRouter();

Vue.watchPostEffect((onCleanup) => {
  onCleanup(onAuthStateChanged(getAuth(app), store.update));
});

Vue.watchPostEffect((onCleanup) => {
  if (!store.value.auth.currentUser) {
    return;
  }

  const timer = setTimeout(() => {
    router.push({
      path: (() => {
        const redirect_url =
          router.currentRoute.value.query.redirect_url || "/";

        if (typeof redirect_url === "string") {
          return decodeURIComponent(redirect_url);
        }

        return "/";
      })(),

      query: {
        ...router.currentRoute.value.query,
        redirect_url: void 0,
      },
    });
  }, 300);

  onCleanup(() => {
    clearTimeout(timer);
  });
});
</script>
<template>
  <LoadingScreen v-if="store.value.auth.currentUser" />
  <slot v-else></slot>
</template>
<style lang="scss" scoped></style>
