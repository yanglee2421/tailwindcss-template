// Query Imports
import type {
  VueQueryPluginOptions,
  DefaultOptions,
} from "@tanstack/vue-query";

// Persist Imports
import { persistQueryClient } from "@tanstack/query-persist-client-core";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export { VueQueryPlugin } from "@tanstack/vue-query";

export function queryClientConfig(): VueQueryPluginOptions {
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

// ** Config
function queries(): DefaultOptions["queries"] {
  return {
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 2,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retryDelay(attemptIndex) {
      return Math.min(1000 * 2 ** attemptIndex, 30000);
    },
  };
}

function mutations(): DefaultOptions["mutations"] {
  return {};
}
