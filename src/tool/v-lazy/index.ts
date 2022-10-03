import type { Directive } from "vue";
/**
 * img标签出现在可视区时才加载图片
 */
const vLazy: Directive<HTMLImageElement, string> = {
  mounted(el, { value }) {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = value;
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  },
};
export default vLazy;
