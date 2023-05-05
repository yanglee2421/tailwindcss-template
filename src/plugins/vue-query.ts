import type { VueQueryPluginOptions } from "@tanstack/vue-query";

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
  };
}
