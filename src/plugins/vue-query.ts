// Query Imports
import {
  VueQueryPluginOptions,
  DefaultOptions,
  VueQueryPlugin,
} from "@tanstack/vue-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/query-persist-client-core";

// Vue Imports
import * as Vue from "vue";

export const vueQuery: Vue.Plugin = {
  install(app) {
    app.use(VueQueryPlugin, clientConfig());
  },
};

function clientConfig(): VueQueryPluginOptions {
  return {
    queryClientConfig: {
      defaultOptions: {
        queries: queries(),
        mutations: mutations(),
      },
    },
    clientPersister(queryClient) {
      return persistQueryClient({
        queryClient,
        persister: createSyncStoragePersister({
          storage: sessionStorage,
          key: import.meta.env.VITE_QUERY_PERSISTER_KEY,
        }),
      });
    },
  };
}

// Client configuration
function queries(): DefaultOptions["queries"] {
  return {
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 2,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retryDelay(attemptIndex) {
      return Math.min(1000 * 2 ** attemptIndex, 1000 * 8);
    },
  };
}

function mutations(): DefaultOptions["mutations"] {
  return {};
}
