import { buryingPoint } from "./v-track";
import type { _action } from "./v-track";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      $track__item: {
        meta: null,
        beginTime: 0,
        endTime: 0,
        way: "",
      },
      $track__controller: new AbortController(),
    };
  },
  methods: {
    $track__setMeta(meta: unknown) {
      this.$data.$track__item.meta = typeof meta === "function" ? meta() : meta;
      return buryingPoint;
    },
    $track__enter() {
      /**
       * 记录时间
       * 处理绑定事件
       */
      this.$data.$track__item.beginTime = Date.now();
      /**
       * 取消上一个事件
       * 生成新控制器
       * 新事件标记
       * 重新绑定事件
       */
      this.$data.$track__controller?.abort();
      this.$data.$track__controller = new AbortController();
      const signal = this.$data.$track__controller.signal;
      window.addEventListener(
        "unload",
        () => {
          this.$data.$track__item.endTime = Date.now();
          this.$data.$track__item.way = "unload";
          buryingPoint.push(this.$data.$track__item);
          buryingPoint.setItem();
        },
        { signal }
      );
    },
    $track__leave() {
      /**
       * 解绑事件
       * 记录数据
       * 推入事件队列
       */
      this.$data.$track__controller?.abort();
      this.$data.$track__item.endTime = Date.now();
      buryingPoint.push(this.$data.$track__item);
    },
  },
  mounted() {
    this.$track__enter();
  },
  activated() {
    this.$track__enter();
  },
  deactivated() {
    this.$track__leave();
  },
  beforeUnmount() {
    this.$track__leave();
  },
});
