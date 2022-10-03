import type { Directive } from "vue";
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
