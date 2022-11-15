import store from "@/plugin/store";
import { computed, unref } from "vue";
export default (btnType: string) => {
  const userPermission: string[] = store.getters["mod1/userPermission"];
  return unref(computed(() => userPermission.includes(btnType)));
};
