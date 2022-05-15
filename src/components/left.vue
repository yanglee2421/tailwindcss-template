<template>
  <div>
    <h2>left</h2>
    <el-input v-model="mes.name" />
    <!-- <el-input v-model="mes.age" /> -->
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { computed, reactive, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const mes = computed(() => store.state.obj)
</script>
<style lang='scss' scoped>
//
</style>