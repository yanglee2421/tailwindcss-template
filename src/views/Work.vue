<template>
  <div>
    <p>{{state.num&&`${state.num}h`}}</p>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive({
  num: null,
});
</script>
<style lang='scss' scoped>
</style>
