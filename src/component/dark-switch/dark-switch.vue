<template>
  <el-switch v-model="switchState.model" />
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { usePinia } from "@/hook";
import { reactive, watch } from "vue";
const { state, actIsDark } = usePinia();
const switchState = reactive({
  model: state.isDark,
});
watch(
  () => switchState.model,
  (model) => actIsDark(model)
);
</script>
<style lang="scss" scoped></style>
