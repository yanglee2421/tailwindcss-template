<template>
  <label class="pl-1 h-100 flex center-center">
    <input
      v-model="state.isChk"
      type="checkbox"
      class="none"
    />
    <span
      :class="[state.isChk ? 'text-danger' : 'text-primary']"
      class="flex center-center"
    >
      <el-icon
        class="trans"
        :class="{ 'rotate-180': !state.isChk }"
        ><ArrowUp
      /></el-icon>
      {{ state.isChk ? "拆叠" : "展开" }}</span
    >
  </label>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { computed, reactive } from "vue";
interface _props {
  modelValue: string | boolean;
  falseValue?: string | boolean;
}
const props = withDefaults(defineProps<_props>(), {
  falseValue: false,
});
interface _emit {
  (event: "update:modelValue", $event: string | boolean): void;
}
const emit = defineEmits<_emit>();
const getIsChk = () => {
  const { modelValue, falseValue } = props;
  return modelValue !== falseValue;
};
const state = reactive({
  isChk: computed({
    get() {
      return getIsChk();
    },
    set(value) {
      emit("update:modelValue", value ? true : props.falseValue);
    },
  }),
});
</script>
<style lang="scss" scoped>
.trans {
  transition: transform 0.3s;
  will-change: transform;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
