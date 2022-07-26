<template>
  <div class="box">
    <Left></Left>
    <Right></Right>
  </div>
</template>
<script lang='ts' setup>
import Left from "./Left.vue";
import Right from "./Right.vue";
</script>
<style lang='scss' scoped>
.box {
  display: grid;
  grid-template: auto/repeat(2, 1fr);
  gap: 20px;
}
</style>