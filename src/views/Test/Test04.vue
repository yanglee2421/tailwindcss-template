<template>
  <div>
    <el-switch v-model="state.isShow" />
    <el-dialog
      v-model="state.isShow"
      destroy-on-close
    >
      <el-form
        v-track="`弹窗存活的时长`"
        :model="formState.data"
      >
        <el-form-item label="输入框">
          <el-input
            v-model.trim="formState.data.input"
            v-track:change="(event:any)=>`输入框${event.target.value}`"
          />
        </el-form-item>
        <el-form-item label="选择器">
          <el-select v-model="formState.data.select">
            <el-option
              v-for="item in 5"
              v-track:click="(event:any)=>`选择器的值为${formState.data.select}`"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button
          @click="state.meta='更新后'"
          v-track:click="`更新：${state.meta}`"
        >更新</el-button>
        <el-button
          v-track:click="`更新并关闭：${state.meta}`"
          @click="state.meta='更新后';state.isShow=false"
        >更新并关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import mixins from "@/hooks/track-mixins";
export default {
  inheritAttrs: true,
  /* mixins: [mixins],
  mounted() {
    this.$track__setMeta("这是测试页面4--mixins");
  }, */
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";
import trackHook from "@/hooks/track-hook";
const setMeta = trackHook("这是测试页04--hook改前");
const buryingPoint = setMeta("这是测试页04--hook改后");
const state = reactive({
  isShow: false,
  meta: "更新前",
});
const formState = reactive({
  data: {
    input: "",
    select: "",
  },
});
</script>
<style lang='scss' scoped>
</style>