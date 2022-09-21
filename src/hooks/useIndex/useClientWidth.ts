import { onBeforeUnmount, onMounted, ref } from "vue";
const controller = new AbortController();
const signal = controller.signal;
export default (el: HTMLElement) => {
  const clientWidth = ref(0);
  onMounted(() => {
    window.addEventListener(
      "resize",
      () => {
        clientWidth.value = el.clientWidth;
      },
      { signal }
    );
  });
  onBeforeUnmount(() => {
    controller.abort();
  });
  return clientWidth;
};
