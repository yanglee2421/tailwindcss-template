import type { Directive } from "vue";
/**
 * img标签出现在可视区时才加载图片
 */
export const vLazy: Directive<HTMLImageElement, string> = {
  mounted(el, { value }) {
    // 类型检查
    if (!(el instanceof HTMLImageElement)) {
      throw new Error("v-lazy指令仅适用于img标签");
    }
    if (typeof value !== "string") {
      throw new Error("v-lazy指令的value应该是一个string");
    }
    // 监听Img
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = value;
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  },
};
