import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import * as Vue from "vue";
import "@/assets/css/style.css";
import "@/assets/scss/global.scss";
import { router } from "@/router/router";
import App from "./App.vue";

Vue.createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60,
          gcTime: 1000 * 60 * 2,

          refetchOnMount: true,
          refetchOnWindowFocus: true,
          refetchOnReconnect: true,

          retry: 1,
          retryDelay(attemptIndex) {
            return Math.min(1000 * 2 ** attemptIndex, 1000 * 8);
          },
        },
      },
    },
  })
  .mount("#root");
