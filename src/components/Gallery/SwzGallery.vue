<template>
  <el-image-viewer
    v-bind="$attrs"
    v-if="state.isShow"
    @close="state.isShow = false"
    :url-list="state.imgArr"
  ></el-image-viewer>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { onBeforeMount, reactive, watch } from "vue";
import isStrArr from "@/util/else/isStrArr";
const props = withDefaults(defineProps<{ modelValue: string[] | false }>(), {
  modelValue: false,
});
const emit = defineEmits<{
  (event: "update:modelValue", $event: false | string[]): void;
}>();
/**
 * isShow：是否展示画廊
 * imgArr：画廊的图片列表
 */
const state = reactive<{ isShow: boolean; imgArr: string[] }>({
  isShow: false,
  imgArr: [],
});
/**
 * 挂载前判断初始状态
 * 为false，走关闭流程
 * 检查是否为string[]
 */
onBeforeMount(() => {
  if (props.modelValue === false) return;
  try {
    isStrArr(props.modelValue);
  } catch (err: any) {
    throw new Error("swz-gallery的v-model必须为false或string[]");
  }
  state.isShow = true;
});
/**
 * 侦听props.modelValue
 * 为false，走关闭流程
 * 检查是否为string[]
 * 数组中全是字符串，则正常显示
 */
watch(
  () => props.modelValue,
  (model) => {
    if (model === false) {
      state.isShow = false;
      return;
    }
    try {
      isStrArr(model);
    } catch (err: any) {
      throw new Error("swz-gallery的v-model必须为false或string[]");
    }
    state.imgArr = model;
    state.isShow = true;
  }
);
/**
 * 侦听state.isShow
 * image-viewer卸载时，通知父元素
 */
watch(
  () => state.isShow,
  (isShow) => {
    if (!isShow) {
      emit("update:modelValue", false);
      return;
    }
  }
);
</script>
<style lang="scss" scoped></style>
