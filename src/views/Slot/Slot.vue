<template>
  <div class="b">
    <h4>以下部分是Slot</h4>
    <slot
      :one="1"
      :two="2"
    >默认插槽</slot>
    <slot
      name="slot1"
      :three="3"
    >插槽01</slot>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>