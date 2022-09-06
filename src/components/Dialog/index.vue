<template>
  <teleport to="body">
    <transition>
      <div
        v-if="modelValue"
        v-track="{}"
        class="swz-dialog"
      >
        <el-button>按钮一</el-button>
        <el-button>按钮二</el-button>
        <el-button>按钮三</el-button>
        <el-button>按钮四</el-button>
        <el-button>按钮五</el-button>
        <el-button>按钮六</el-button>
        <el-button>按钮七</el-button>
        <el-button
          @click="$emit('update:modelValue',false)"
          type="danger"
        >关闭</el-button>
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
    },
  },
  emits: ["update:modelValue"],
};
</script>
<script lang='ts' setup>
/* import { reactive } from "vue";
interface _props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  modelValue: true,
});
interface _emit {
  (event: "update:modelValue", $event: boolean): void;
}
const emit = defineEmits<_emit>(); */
</script>
<style lang='scss' scoped>
.swz-dialog {
  @include pos-center;
  background-color: rgba(0, 0, 0, 0.5);
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