<template>
  <div>
    <div class="flex-row">
      <el-checkbox-group v-model="value" class="b">
        <div
          v-for="(item, index) in arr01"
          :key="item"
          v-drag="{ index, arr: arr01 }"
        >
          <el-checkbox :label="item" />
        </div>
      </el-checkbox-group>
      <div class="b"><el-button @click="log(arr)">输出</el-button></div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import vDrag from "@/hook/vDrag.js";
const value = ref([]);
const arr01 = reactive(["123", "456", "789"]);
const log = (i) => {
  console.log(i);
};
</script>

<style lang="scss" scoped>
</style>
