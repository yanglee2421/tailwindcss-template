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
const value = ref([]);
const arr01 = reactive(["123", "456", "789"]);
const log = (i) => {
  console.log(i);
};
const vDrag = (el, binding) => {
  const { index, arr } = binding.value;
  el.draggable = true;
  el.ondragstart = (e) => {
    e.dataTransfer.setData("dragIndex", index);
  };
  el.ondragover = (e) => {
    e.preventDefault();
    e.currentTarget.style.borderTop = "1px red solid";
  };
  el.ondragleave = (e) => {
    e.currentTarget.style.borderTop = "";
  };
  el.ondrop = (e) => {
    e.currentTarget.style.borderTop = "";
    const dragIndex = +e.dataTransfer.getData("dragIndex");
    arr.splice(index, 1, ...arr.splice(dragIndex, 1, arr[index]));
  };
};
</script>

<style lang="scss" scoped>
</style>
