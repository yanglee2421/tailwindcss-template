<template>
  <div>
    <h2>left</h2>
    <el-input v-model="mes" />
    <!-- <el-input v-model="mes.age" /> -->
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { computed, reactive, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const mes = computed({
  get() {
    return store.state.obj
  },
  set(newVal) {
    store.dispatch('obj', newVal)
  }
})
</script>
<style lang='scss' scoped>
//
</style>