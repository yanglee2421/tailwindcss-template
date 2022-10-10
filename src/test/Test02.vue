<template>
  <div>
    <el-cascader
      v-model="state.value"
      :options="opt"
      :props="{ checkStrictly: true }"
    >
    </el-cascader>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import img from "@/assets/picList/1.jpg";
import { reactive, watch } from "vue";
const state = reactive({
  value: "",
});
watch(
  () => state.value,
  (value) => {
    console.log(value);
  }
);

const opt = reactive([
  {
    label: "1",
    value: "1",
    children: [
      {
        label: "1-1",
        value: "1-1",
        children: [{ label: "1-1-1", value: "1-1-1" }],
      },
    ],
  },
]);
</script>
<style lang="scss" scoped></style>
