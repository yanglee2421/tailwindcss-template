<template>
  <div>
    <div class="test"></div>
  </div>
</template>
<script lang="ts">
import { ref, watch } from "vue";

export default {
  inheritAttrs: true,
  data() {
    return {
      r: 0,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  setup() {
    const r = ref(0);
    watch(
      r,
      () => {
        console.log("watch-setup");
      },
      { immediate: true }
    );
    console.log("setup");
  },
  watch: {
    r: {
      immediate: true,
      handler() {
        console.log("watch");
      },
    },
  },
};
</script>
<style lang="scss" scoped></style>
