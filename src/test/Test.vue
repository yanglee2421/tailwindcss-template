<template>
  <div>
    <div class="test">
      <el-link @click="linkFn">走人</el-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
const linkFn = () => {
  localStorage.setItem("linkFn", 789);
  window.location.replace("http://10.32.16.160:1818/#/work");
};
</script>
<style lang="scss" scoped></style>
