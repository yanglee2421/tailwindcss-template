<template>
  <teleport to="body">
    <transition>
      <div
        v-if="modelValue"
        class="swz-dialog"
      >
        <div class="content">
          <el-button
            @click="$emit('update:modelValue',false)"
            type="danger"
          >关闭</el-button>
          这是一个弹窗
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
  props: {
    modelValue: {
      type: [Boolean, Object],
      default: false,
    },
  },
  watch: {
    modelValue(newValue) {
      console.log(newValue);
    },
  },
};
</script>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.swz-dialog {
  @include pos-center;
  @include flex-center;
  background-color: rgba(0, 0, 0, 0.5);
}
.content {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #fff;
  .el-button {
    position: absolute;
    @include pos-list(0, 0, auto, auto);
  }
}
.v-enter-active,
.v-leave-active {
  transition: 0.5s;
  will-change: transform;
}
.v-enter-from,
.v-leave-to {
  transform: scale(0);
}
.v-enter-to,
.v-leave-from {
  transform: scale(1);
}
</style>