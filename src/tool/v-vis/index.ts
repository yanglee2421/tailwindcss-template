import { Directive } from "vue";
/**
 * value可以是一个boolean，也可以是一个string
 * true，高度为''
 * false，高度为0
 * string，高度为该string
 */
import "./v-vis.scss";
const vVis: Directive<HTMLElement, string | boolean> = {
  mounted(dom, binding) {
    dom.classList.add("swz-vis-clearfix");
    const { value } = binding;
    switch (value) {
      case true:
        break;
      case false:
        dom.style.maxHeight = "0";
        break;
      default:
        dom.style.maxHeight = value;
    }
    dom.addEventListener("transitionend", () => {
      dom.classList.remove("swz-vis-trans");
      dom.scrollHeight === dom.clientHeight && (dom.style.maxHeight = "");
    });
  },
  updated(dom, binding) {
    const { value, oldValue } = binding;
    // value变化才执行
    if (value !== oldValue) {
      // 获取变化前后的高度
      const currentValue = dom.offsetHeight + "px";
      dom.style.maxHeight = currentValue;
      dom.classList.add("swz-vis-trans");
      setTimeout(() => {
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
      });
    }
  },
};
export default vVis;
