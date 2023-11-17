<script lang="ts" setup>
// Store Imports
import { useStoreTheme, useIsDark, useLogin, useLoginMe } from "@/hooks";

// Vue Imports
import * as Vue from "vue";

// Acl Imports
import { useAclProvider } from "@/configs/acl";

// Dark mode and theme binding
const { state, setState } = useStoreTheme();
const isDarkRef = useIsDark();
const login = useLogin();
const allowOrigins = new Set<string>();
allowOrigins.add(import.meta.env.VITE_REACT_ANTD_URL);
allowOrigins.add(import.meta.env.VITE_REACT_MUI_URL);
allowOrigins.add(import.meta.env.VITE_VUE_ELE_URL);

// Control DOM by vue state
Vue.watchPostEffect(() => {
  if (state.isDark) {
    document.documentElement.classList.add("dark");
    return;
  }
  document.documentElement.classList.remove("dark");
});

// Dark theme follows browser mode
Vue.watchPostEffect(() => {
  setState((state) => {
    state.isDark = Vue.unref(isDarkRef);
  });
});

// SSO subscription
Vue.watchPostEffect((onCleanup) => {
  const controller = new AbortController();
  window.addEventListener(
    "message",
    (evt) => {
      if (allowOrigins.has(evt.origin)) {
        return;
      }

      const data = JSON.parse(evt.data);
      if (data.type !== "sso-login") {
        return;
      }

      login.signIn(
        {
          email: data.email,
          role: data.role,
          loginAt: data.loginAt,
        },
        data.rememberMe
      );
    },
    {
      signal: controller.signal,
    }
  );

  onCleanup(() => {
    controller.abort();
  });
});

useAclProvider();
useLoginMe();
</script>

<template>
  <router-view #default="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
.el-pagination {
  padding-top: 10px !important;
}
.el-image {
  vertical-align: bottom;
}
</style>
