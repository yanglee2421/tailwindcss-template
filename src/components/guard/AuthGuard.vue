<script setup lang="ts">
import * as Vue from "vue";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { useRouter } from "vue-router";
import LoadingScreen from "@/components/shared/LoadingScreen.vue";

const store = useAuthStore();
const router = useRouter();

Vue.watchPostEffect(() => {
  if (store.value.auth.currentUser) {
    return;
  }

  if (!router.currentRoute.value.matched.length) {
    return;
  }

  router.push({
    name: "login",
    query: {
      ...router.currentRoute.value.query,
      redirect_url: router.currentRoute.value.path,
    },
  });
});
</script>
<template>
  <slot v-if="store.value.auth.currentUser"></slot>
  <LoadingScreen v-else></LoadingScreen>
</template>
<style lang="scss" scoped></style>
