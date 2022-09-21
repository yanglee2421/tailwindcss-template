<template>
  <teleport to="body">
    <transition>
      <div
        v-if="modelValue"
        class="swz-dialog"
      >
        <div class="content">
          <el-button
            @click="$emit('update:modelValue', false)"
            type="danger"
            >关闭</el-button
          >
          这是一个弹窗
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import {
  nextTick,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from "vue";

interface _props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<_props>(), {});
interface _emit {
  (event: "update:modelValue", $event: boolean): void;
  (event: "swz-switch", $event: boolean): void;
}
const emit = defineEmits<_emit>();
watch(
  () => props.modelValue,
  (newVal) => {
    console.log("watch");
    switch (newVal) {
      case false:
        break;
      case true:
        break;
      default:
    }
    /* emit("swz-switch", newVal);
    console.log("弹窗变化了，emit之后"); */
  },
  {
    immediate: true,
  }
);
watchSyncEffect(() => {
  const a = props.modelValue;
  console.log("watchSyncEffect");
});
watchEffect(() => {
  const a = props.modelValue;
  console.log("watchEffect");
});
watchPostEffect(() => {
  const a = props.modelValue;
  console.log("watchPostEffect");
});
nextTick(() => {
  console.log("nextTick");
});
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
});
</script>
<style lang="scss" scoped>
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
