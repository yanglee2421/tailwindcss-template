<template>
  <div>
    <h2>左</h2>
    <el-input v-model="num" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const num = computed({
  get() {
    return store.state.num;
  },
  set(newVal) {
    store.dispatch("num", newVal);
  },
});
</script>
<style lang='scss' scoped>
* {
  @extend.m-1;
}
</style>