<script lang="ts" setup>
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
  if (store.value.auth.currentUser) {
    return;
  }

  const timer = setTimeout(() => {
    router.push({
      name: "login",
      query: {
        ...router.currentRoute.value.query,
        redirect_url: encodeURIComponent(router.currentRoute.value.path),
      },
    });
  }, 300);

  onCleanup(() => {
    clearTimeout(timer);
  });
});
</script>

<template>
  <slot v-if="store.value.auth.currentUser"></slot>
  <LoadingScreen v-else />
</template>

<style lang="scss" scoped></style>
