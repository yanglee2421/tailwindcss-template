<template>
  <div>
    <h3>父向子：子</h3>
    <span>儿子收到的：{{value}}</span>
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