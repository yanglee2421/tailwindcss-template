<template>
  <el-checkbox-group v-model="state.val">
    <div
      :ref="(el) => list.push(el)"
      v-for="(item, index) in arr"
      :key="item"
      draggable="true"
      @dragstart="start(index, $event)"
      @dragover.prevent="over($event)"
      @dragleave="leave($event)"
      @drop="drop(index, $event)"
    >
      <el-checkbox :label="'-' + item" />
    </div>
  </el-checkbox-group>
</template>

<script setup>
import { reactive, ref, watchEffect } from "vue";

const arr = reactive(["123", "456", "789"]);
const state = reactive({
  val: [],
});
const list = ref([]);
watchEffect(() => {
  console.log(state.val);
});
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
</script>

<style lang="scss" scoped>
//
</style>
