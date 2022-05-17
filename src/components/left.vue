<template>
  <!-- <el-input v-model="state.arr" /> -->
  <p>{{ state.arr }}</p>
</template>
<script setup>
import { computed } from 'vue';
import { mapState, useStore } from 'vuex';

const store = useStore()
const state = computed(() => store.state.mod)
console.log(state.value.arr);
</script>
<style lang='scss' scoped>
//
</style>