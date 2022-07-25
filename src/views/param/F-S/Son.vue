<template>
  <div>
    <h2>父向子：子</h2>
    <span>{{value}}</span>
  </div>
</template>
<script lang='ts' setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
</script>
<style lang='scss' scoped>
</style>