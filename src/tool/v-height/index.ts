import type { Directive } from "vue";
import "./v-height.scss";
let speed = 32;
/**
 * 停止动画的方法
 * @param shouldStop
 * @param animation
 * @param div
 * @param value
 */
const stopAnimationFn = (
  shouldStop: boolean,
  animation: number,
  div: HTMLElement,
  value: number | boolean
) => {
  shouldStop ? cancelAnimationFrame(animation) : animationFn(div, value);
};
/**
 * 开启动画的方法
 * @param div
 * @param value
 */
const animationFn = (div: HTMLElement, value: number | boolean) => {
  const animation = requestAnimationFrame(() => {
    const { clientHeight, offsetHeight, scrollHeight, style } = div;
    const maxHeight = typeof value === "number" ? value : scrollHeight;
    let targetHeight;
    switch (value) {
      case true:
        targetHeight = offsetHeight + speed;
        style.maxHeight = `${
          targetHeight > maxHeight ? maxHeight : targetHeight
        }px`;
        stopAnimationFn(clientHeight === scrollHeight, animation, div, value);
        break;
      case false:
        targetHeight = offsetHeight - speed;
        style.maxHeight = `${targetHeight < 0 ? 0 : targetHeight}px`;
        stopAnimationFn(offsetHeight === 0, animation, div, value);
        break;
      default:
        stopAnimationFn(offsetHeight === value, animation, div, value);
    }
  });
};
/**
 * 自定义指令
 */
const vHeight: Directive<HTMLElement, number | boolean> = {
  mounted({ classList, style }, { value }) {
    classList.add("v-height-box");
    switch (value) {
      case true:
        break;
      case false:
        style.maxHeight = "0";
        break;
      default:
        style.maxHeight = `${value}px`;
    }
  },
  updated(div, { value, oldValue }) {
    if (value !== oldValue) {
      animationFn(div, value);
    }
  },
};
export default vHeight;
