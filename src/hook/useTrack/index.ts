import { buryingPoint } from "../../util/v-track";
import { onMounted, onBeforeMount, onActivated, onDeactivated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import type { _action } from "../../util/v-track";
export default (meta: unknown) => {
  /**
   * 事件控制器
   * 事件标记
   * 进入时执行
   * 离开时执行
   */
  const item: _action = { meta: typeof meta === "function" ? meta() : meta };
  let controller: AbortController = null as unknown as AbortController;
  let signal: AbortSignal = null as unknown as AbortSignal;
  const enter = () => {
    item.beginTime = Date.now();
    /**
     * 取消上一个事件
     * 生成新控制器
     * 新事件标记
     * 重新绑定事件
     */
    controller?.abort();
    controller = new AbortController();
    signal = controller.signal;
    window.addEventListener(
      "unload",
      () => {
        item.endTime = Date.now();
        buryingPoint.push(item);
        buryingPoint.setItem();
      },
      { signal }
    );
  };
  const leave = () => {
    controller?.abort();
    item.endTime = Date.now();
    buryingPoint.push(item);
  };
  onMounted(() => {
    enter();
  });
  onActivated(() => {
    enter();
  });
  onBeforeRouteLeave((to, from) => {
    item.toPath = to.fullPath;
  });
  onDeactivated(() => {
    leave();
  });
  onBeforeMount(() => {
    leave();
  });
  const setMeta = (meta: unknown) => {
    item.meta = typeof meta === "function" ? meta() : meta;
    return buryingPoint;
  };
  return setMeta;
};
