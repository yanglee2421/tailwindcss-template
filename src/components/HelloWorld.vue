<template>
  <h1>{{ num }}</h1>
  <el-button @click="num++">num++</el-button>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const num = computed({
  get() {
    return store.state.num
  },
  set(newVal) {
    store.commit("num", newVal)
  }
})
</script>
<style lang='scss' scoped>
//
</style>