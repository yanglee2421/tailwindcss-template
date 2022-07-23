<template>
  <div>
    <div class="box m-center mt-2">
      <span>{{a}}</span>
      <el-button @click="fun('vuex中的值（1变）')">变一下</el-button>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const a = computed(() => store.state.mod1.a);
const fun = (value: unknown) => {
  store.dispatch("mod1/b", value);
};
</script>
<style lang='scss' scoped>
.box {
  width: 500px;
  height: 400px;
}
</style>