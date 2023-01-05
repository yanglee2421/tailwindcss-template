import { usePinia } from "@/hook";
import { computed, unref } from "vue";

function usePermission(btnType: string) {
  /* const state = usePinia();
  const userPermission: string[] = state.userPermission;
  return unref(computed(() => userPermission.includes(btnType))); */
}

export default usePermission;
