//
import { get_brand_list } from "@/api/swagger";
import { useQuery } from "@tanstack/vue-query";
import * as Vue from "vue";
import { ID } from "@/api/swagger/get_brand_list";

export function useMachineList(brandIdRef: Vue.Ref<ID>) {
  return useQuery({
    queryKey: ["get_machine_list", brandIdRef],
    queryFn({ signal }) {
      return get_brand_list({ signal }, Vue.unref(brandIdRef));
    },
  });
}
