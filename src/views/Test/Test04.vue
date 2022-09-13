<template>
  <div>
    <fw-switch v-model="state.val"></fw-switch>
    <el-dialog
      v-model="state.val"
      fullscreen
    >
      <el-form>
        <el-form-item label="123">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive({
  val: true,
});
</script>
<style lang='scss' scoped>
</style>