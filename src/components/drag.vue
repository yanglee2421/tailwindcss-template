<template>
  <div>
    <div class="flex-row">
      <el-checkbox-group v-model="value" class="b">
        <div
          v-for="(item, index) in arr"
          :key="item"
          draggable="true"
          @dragstart="start(index, $event)"
          @dragover.prevent="over($event)"
          @dragleave="leave($event)"
          @drop="drop(index, $event)"
        >
          <el-checkbox :label="item" />
        </div>
      </el-checkbox-group>
      <div class="b"><el-button @click="log(arr)">输出</el-button></div>
    </div>
    <progress class="p-1" max="100" value="70">50%</progress>
    <el-progress :percentage="70"></el-progress>
  </div>
</template>
<script setup>
import { reactive, ref, watchEffect } from "vue";
const arr = reactive(["123", "456", "789"]);
const value = ref([]);
const start = (index, $event) => {
  $event.dataTransfer.setData("dragIndex", index);
};
const over = ($event) => {
  $event.currentTarget.style.borderTop = "1px red solid";
};
const leave = ($event) => {
  $event.currentTarget.style.borderTop = "";
};
const drop = (index, $event) => {
  $event.currentTarget.style.borderTop = "";
  const dragIndex = +$event.dataTransfer.getData("dragIndex");
  arr.splice(index, 1, ...arr.splice(dragIndex, 1, arr[index]));
};
const log = (i) => {
  console.log(i);
};
</script>

<style lang="scss" scoped>
</style>
