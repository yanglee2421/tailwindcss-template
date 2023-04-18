import type { Directive } from "vue";
import "@/assets/scss/v-vis.scss";

/**
 * value可以是一个boolean，也可以是一个string
 * true，高度为''
 * false，高度为0
 * string，高度为该string
 */
export const vVis: Directive<HTMLElement, string | boolean> = {
  mounted(dom, { value }) {
    dom.classList.add("swz-vis-clearfix");
    chgHeight(dom, value);
    dom.style.maxHeight = "";
    dom.addEventListener("transitionend", () => {
      dom.classList.remove("swz-vis-trans");
      dom.scrollHeight === dom.clientHeight && (dom.style.maxHeight = "");
    });
  },
  updated(dom, { value, oldValue }) {
    // value变化才执行
    if (value !== oldValue) {
      const currentHeight = dom.offsetHeight + "px";
      dom.style.maxHeight = currentHeight;
      dom.classList.add("swz-vis-trans");
      setTimeout(() => chgHeight(dom, value), 0);
    }
  },
};

function chgHeight(dom: HTMLElement, value: string | boolean) {
  switch (value) {
    case true:
      dom.style.maxHeight = dom.scrollHeight + "px";
      break;
    case false:
      dom.style.maxHeight = "0";
      break;
    default:
      dom.style.maxHeight = value;
  }
}
