<template>
  <h2>接收到的:{{ num }}</h2>
</template>
<script>
import bus from "./eventBus.js";
export default {
  name: "receive",
  data() {
    return {
      num: 0,
    };
  },
};
</script>