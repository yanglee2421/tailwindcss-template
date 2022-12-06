import { usePinia } from "@/hook";
import { computed, unref } from "vue";
export default (btnType: string) => {
  const state = usePinia();
  const userPermission: string[] = state.userPermission;
  return unref(computed(() => userPermission.includes(btnType)));
};
