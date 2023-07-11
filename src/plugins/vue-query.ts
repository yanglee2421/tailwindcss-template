// Query Imports
import type { VueQueryPluginOptions } from "@tanstack/vue-query";
import { persistQueryClient } from "@tanstack/query-persist-client-core";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export { VueQueryPlugin } from "@tanstack/vue-query";

export function queryClientConfig(): VueQueryPluginOptions {
  return {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 10 * 5,
          refetchOnWindowFocus: false,
        },
      },
    },
    clientPersister(queryClient) {
      return persistQueryClient({
        queryClient,
        persister: createSyncStoragePersister({
          storage: globalThis.sessionStorage,
        }),
      });
    },
  };
}
