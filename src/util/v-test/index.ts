import type { Directive } from "vue";
import store from "@/plugins/store";
const {
  state: { mod1 },
} = store as any;
const vTest: Directive<HTMLElement, boolean> = {
  mounted(dom, { value }) {
    console.log(mod1);
    value || dom.remove();
  },
  updated(dom, { value }) {
    value || dom.remove();
  },
};
export default vTest;
