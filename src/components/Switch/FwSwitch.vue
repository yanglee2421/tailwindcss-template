<template>
  <label :class="[{checked:inputValue}]">
    <input
      v-model="inputValue"
      type="checkbox"
    />
    <span>{{inputValue?trueText:falseText}}</span>
  </label>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { computed } from "vue";
interface _props {
  modelValue: string | number | boolean;
  trueText?: string;
  falseText?: string;
  trueValue?: string | number | boolean;
  falseValue?: string | number | boolean;
}
const props = withDefaults(defineProps<_props>(), {
  trueText: "启用",
  falseText: "禁用",
  trueValue: true,
  falseValue: false,
});
interface _emit {
  (event: "update:modelValue", $event: string | number | boolean): void;
}
const emit = defineEmits<_emit>();
const inputValue = computed({
  get() {
    return props.modelValue === props.trueValue;
  },
  set(value) {
    emit("update:modelValue", value ? props.trueValue : props.falseValue);
  },
});
</script>
<style lang='scss' scoped>
@mixin ball {
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #fff;
    transition: 0.5s;
  }
}
input[type="checkbox"] {
  display: none;
}
label {
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: bottom;
  padding: 5px 7px 5px 23px;
  border-radius: 20px;
  background-color: $danger;
  transition: 0.5s;
  color: #fff;
  @include ball;
}
.checked {
  padding: 5px 23px 5px 7px;
  background-color: $primary;
  &::before {
    @include ball;
    left: calc(100% - 21px);
  }
}
</style>