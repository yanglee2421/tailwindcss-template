import type { Directive } from "vue";
/**
 * value可以是一个boolean，也可以是一个string
 * true，高度为''
 * false，高度为0
 * string，高度为该string
 */
import "./v-vis.scss";
const chgHeight = (dom: HTMLElement, value: string | boolean) => {
  switch (value) {
    case true:
      break;
    case false:
      dom.style.maxHeight = "0";
      break;
    default:
      dom.style.maxHeight = value;
  }
};
const vVis: Directive<HTMLElement, string | boolean> = {
  mounted(dom, binding) {
    const { value } = binding;
    dom.classList.add("swz-vis-clearfix");
    chgHeight(dom, value);
    dom.addEventListener("transitionend", () => {
      dom.classList.remove("swz-vis-trans");
      dom.scrollHeight === dom.clientHeight && (dom.style.maxHeight = "");
    });
  },
  updated(dom, binding) {
    const { value, oldValue } = binding;
    // value变化才执行
    if (value !== oldValue) {
      const currentHeight = dom.offsetHeight + "px";
      dom.style.maxHeight = currentHeight;
      dom.classList.add("swz-vis-trans");
      setTimeout(() => {
        chgHeight(dom, value);
      }, 0);
    }
  },
};
export default vVis;
