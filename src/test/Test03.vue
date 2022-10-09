<template>
  <div>
    <div class="box b flex-column">
      <h1 class="mb-1">测试滚动组件</h1>
      <div class="flex-1-hidden">
        <swz-scroll>
          <div class="h b mx-1"></div>
        </swz-scroll>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.box {
  width: 300px;
  height: 400px;
}
.h {
  height: 1000px;
}
</style>
