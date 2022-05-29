<template>
  <div class="m-1 b">
    <h2 class="p-1">子</h2>
    <el-input class="m-1 w-25" @input="out" v-model="num" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(["event"])
const num = ref('')
const out = () => {
  emit("event", num.value)
}
</script>
<style lang='scss' scoped>
//
</style>