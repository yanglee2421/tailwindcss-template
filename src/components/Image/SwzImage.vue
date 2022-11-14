<template>
  <el-image
    v-bind="$attrs"
    lazy
    class="swz-image"
  >
    <template #error>
      <slot name="error">
        <div class="image-slot">
          <el-icon size="30"><Picture /></el-icon>
        </div>
      </slot>
    </template>
  </el-image>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
</style>
