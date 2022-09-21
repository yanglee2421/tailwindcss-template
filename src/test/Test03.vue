<template>
  <div>
    <h2 class="m-1 mb-2">测试输入框的收集</h2>
    <el-form class="b m-3">
      <el-form-item label="输入框01">
        <el-input
          v-model.trim="state.input01"
          maxlength="20"
          v-track:change="() => `在输入框01输入了${state.input01}`"
        />
      </el-form-item>
      <el-form-item label="输入框02">
        <el-input
          v-model.trim="state.input02"
          maxlength="20"
          v-track:change="() => `在输入框02输入了${state.input02}`"
        />
      </el-form-item>
      <el-form-item label="输入框03">
        <el-input
          v-model.trim="state.input03"
          maxlength="20"
          v-track:change="() => `在输入框03输入了${state.input03}`"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import trackHook from "@/tool/track-hook";
trackHook("测试页03--hook方案");
const state = reactive({
  input01: "",
  input02: "",
  input03: "",
});
</script>
<style lang="scss" scoped>
.el-form {
  @include m-center;
}
</style>
