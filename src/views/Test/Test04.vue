<template>
  <div>
    <fw-switch v-model="state.val"></fw-switch>
    <el-button @click="state.val='50px'">50px</el-button>
    <el-button @click="state.val='10vh'">10vh</el-button>
    <el-button @click="state.val=''">空串</el-button>
    <el-button @click="state.val=0">0</el-button>
    <div
      v-vis="state.val"
      class="w-25 m-3"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus ipsam nihil perferendis ea quidem similique, maxime iste, laboriosam dicta at. Fuga excepturi quam ex hic voluptatibus provident mollitia tempore?
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive, watchEffect } from "vue";

const state = reactive<any>({
  val: false,
});
watchEffect(() => {
  console.log(state.val);
});
</script>
<style lang='scss' scoped>
</style>