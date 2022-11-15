import type { Directive } from "vue";
import store from "@/plugin/store";
const userPermission = store.getters["mod1/userPermission"] as string[];
const vTest: Directive<HTMLElement, string> = {
  mounted(dom, { value }) {
    userPermission.includes(value) || dom.remove();
  },
};
export default vTest;
