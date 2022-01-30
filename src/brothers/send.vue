<template>
  <h2>发送出的:{{ num }}</h2>
</template>
<script>
import bus from "./eventBus.js";
export default {
  name: "send",
  data() {
    return {
      num: 0,
    };
  },
  created() {
    bus.emit("numChange", (num) => {
      this.num = num;
    });
  },
};
</script>