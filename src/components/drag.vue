<template>
  <div>
    <div class="flex-row">
      <el-checkbox-group v-model="value" class="b">
        <div
          v-for="(item, index) in arr01"
          :key="item"
          draggable="true"
          @dragstart="dragFn.start(index, $event)"
          @dragover.prevent="dragFn.over($event)"
          @dragleave="dragFn.leave($event)"
          @drop="dragFn.drop(index, $event)"
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
const value = ref([]);
const arr01 = reactive(["123", "456", "789"]);
const dragFn = {
  start(index, $event) {
    $event.dataTransfer.setData("dragIndex", index);
  },
  over($event) {
    $event.currentTarget.style.borderTop = "1px red solid";
  },
  leave($event) {
    $event.currentTarget.style.borderTop = "";
  },
  drop(index, $event) {
    const arr = arr01;
    $event.currentTarget.style.borderTop = "";
    const dragIndex = +$event.dataTransfer.getData("dragIndex");
    arr.splice(index, 1, ...arr.splice(dragIndex, 1, arr[index]));
  },
};
const log = (i) => {
  console.log(i);
};
</script>

<style lang="scss" scoped>
</style>
