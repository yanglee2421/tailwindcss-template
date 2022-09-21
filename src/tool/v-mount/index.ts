import { Directive } from "vue";
const vMount: Directive<HTMLElement, Function> = {
  mounted(el, binding) {
    const { value } = binding;
    value(el);
  },
};
export default vMount;
