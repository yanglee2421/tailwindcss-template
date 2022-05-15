<template>
  <div>
    <h2>left</h2>
    <el-input v-model="obj.name" />
    <el-button @click="fun">add</el-button>
    <div v-for="item, index in arr" :key="index">{{ item }}</div>
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { computed, reactive, watch, ref } from 'vue';
import { mapState, useStore } from 'vuex';
const store = useStore()
const obj = computed(() => store.state.obj)
const arr = computed(() => store.state.arr)
const fun = () => {
  store.commit('pushArr', ++id)
}
let id = 0
</script>
<style lang='scss' scoped>
//
</style>