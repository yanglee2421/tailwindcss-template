import { onBeforeMount, onBeforeUnmount, onMounted } from "vue";

const useResize = (
  dom: HTMLElement,
  callback: (params: { width: number; height: number }) => void
) => {
  const observer = new ResizeObserver(
    ([
      {
        contentBoxSize: [{ inlineSize: width, blockSize: height }],
      },
    ]) => {
      callback({ width, height });
    }
  );
  onMounted(() => {
    observer.observe(dom);
  });
  onBeforeUnmount(() => {
    observer.unobserve(dom);
  });
};
