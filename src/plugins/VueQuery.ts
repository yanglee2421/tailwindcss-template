import { VueQueryPlugin } from "@tanstack/vue-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { persistQueryClient } from "@tanstack/query-persist-client-core";
import * as Vue from "vue";

export const VueQuery: Vue.Plugin = (app) => {
  app.use(VueQueryPlugin, {
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
  });
};
