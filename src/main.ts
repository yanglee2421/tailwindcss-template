import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { persistQueryClient } from "@tanstack/query-persist-client-core";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import * as Vue from "vue";
import "@/assets/css/style.css";
import "@/assets/scss/global.scss";
import { router } from "@/router/router";
import App from "./App.vue";

const app = Vue.createApp(App);

app
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
    clientPersister(queryClient) {
      return persistQueryClient({
        queryClient,
        persister: createAsyncStoragePersister({
          storage: sessionStorage,
          key: import.meta.env.VITE_QUERY_PERSISTER_KEY,
        }),
      });
    },
  })
  .mount("#root");
