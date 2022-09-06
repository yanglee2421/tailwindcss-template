<template>
  <div>
    <el-checkbox v-model="state.vis">打开</el-checkbox>
    <el-button @click="state.vis={inp:'4399'}">edit</el-button>
    <swz-dialog
      v-model="state.vis"
      v-model:model="state.model"
    >
      <el-form :model="state.model">
        <el-form-item>
          <el-input v-model="state.model.inp"></el-input>
        </el-form-item>
      </el-form>
    </swz-dialog>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";
const state = reactive<any>({
  vis: false,
  model: {
    inp: "",
  },
});
</script>
<style lang='scss' scoped>
</style>