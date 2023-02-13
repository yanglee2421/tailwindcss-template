<script lang="ts" setup>
import { useDark } from "@/hook";
import { usePinia, useAuth } from "@/stores";
import { watch } from "vue";
import { useRouter } from "vue-router";

/**
 * Realize that the page style follows the browser theme
 */
const { actIsDark } = usePinia();
useDark(({ matches }) => actIsDark(matches));

/**
 * Implement routing to follow login status
 */
const router = useRouter();
const stores = useAuth();
stores.$onAction(({ after }) => {
  const isLogined = Boolean(stores.state.expiration);
  switch (isLogined) {
    // signOut
    case true:
      after(() => {
        Boolean(stores.state.expiration) || router.push("/login");
      });
      return;
    // signIn
    case false:
      after(() => {
        const isInPageLogin = router.currentRoute.value.path === "/login";
        isInPageLogin &&
          Boolean(stores.state.expiration) &&
          router.replace("/");
      });
      return;
    default:
      return;
  }
});

/* watch(
  () => stores.state.expiration,
  (curr, prev, clearFn) => {
    // signOut
    if (curr && !prev) {
      router.push("/login");
      return;
    }
    // signIn
    if (!curr && prev) {
      const isInPageLogin = router.currentRoute.value.path === "/login";
      isInPageLogin && router.replace("/");
      return;
    }
  }
); */
</script>

<template>
  <router-view #default="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
@import "@/assets/reset.scss";
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
