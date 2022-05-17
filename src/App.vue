<template>
  <el-cascader v-model="value" :options="cascader" :props="{ emitPath: false }" :show-all-levels="false" clearable />
</template>
<script setup>
import { reactive, ref, watchEffect } from 'vue';
import axios from "axios"
const cascader = reactive([
  {
    label: '1',
    value: 1,
    children: [
      {
        label: "1-1",
        value: 100
      },
    ]
  }
])
const value = ref()
watchEffect(() => {
  console.log(value.value);
})
</script>
<style lang='scss' scoped>
//
</style>