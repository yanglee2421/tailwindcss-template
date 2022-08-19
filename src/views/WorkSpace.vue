<template>
  <div>
    <swz-slot
      @swzChange="null"
      :name="{aa:'张三'}"
    ></swz-slot>
  </div>
</template>
<script lang='ts' setup>
const fun = () => {
  console.log(777);
};
</script>
<style lang='scss' scoped>
</style>