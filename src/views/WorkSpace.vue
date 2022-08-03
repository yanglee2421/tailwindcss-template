<template>
  <div>
    <el-switch v-model="state.switch" />
    <el-button @click="state.visible=!state.visible">toggle</el-button>
    <template v-if="state.switch">
      <el-dialog v-model="state.visible">
        <hello-world></hello-world>
      </el-dialog>
    </template>
    <template v-else>
      <template v-if="state.visible">
        <hello-world></hello-world>
      </template>
    </template>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const state = reactive({
  visible: false,
  switch: false,
});
</script>
<style lang='scss' scoped>
</style>