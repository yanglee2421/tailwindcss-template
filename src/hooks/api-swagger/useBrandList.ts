import { useQuery } from "@tanstack/vue-query";
import * as Vue from "vue";
import { get_brand_list } from "@/api/swagger/get_brand_list";
import type { ID } from "@/api/swagger/get_brand_list";

export function useBrandList(brandIdRef: Vue.Ref<ID>) {
  return useQuery({
    queryKey: ["get_machine_list", brandIdRef],
    queryFn({ signal }) {
      return get_brand_list({ signal }, Vue.unref(brandIdRef));
    },

    enabled: Vue.computed(() => !!Vue.unref(brandIdRef)),
  });
}
