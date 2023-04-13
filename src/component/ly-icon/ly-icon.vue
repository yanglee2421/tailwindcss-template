<script lang="ts" setup>
import { computed, ref, unref, onMounted, onBeforeUnmount } from "vue";

interface props {
  modelValue?: boolean;
}
const props = withDefaults(defineProps<props>(), {
  modelValue: false,
});

interface emits {
  (event: "update:modelValue", $event: boolean): void;
}
const emits = defineEmits<emits>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

const el = ref<HTMLLabelElement>();
const observer = new IntersectionObserver(([{ isIntersecting }]) => {
  isIntersecting || emits("update:modelValue", isIntersecting);
});

onMounted(() => {
  const dom = unref(el);
  if (!dom) return;
  observer.observe(dom);
});

onBeforeUnmount(() => {
  const dom = unref(el);
  if (!dom) return;
  observer.unobserve(dom);
});
</script>

<template>
  <label
    :ref="(e:any) => (el = e)"
    class="ly-icon"
  >
    <input
      v-model="model"
      type="checkbox"
    />
    <div></div>
    <div></div>
    <div></div>
  </label>
</template>

<style lang="scss" scoped>
.ly-icon {
  position: relative;
  display: block;
  width: 25px;
  height: 15px;
  word-wrap: break-word;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    width: 100%;
    height: 2px;
    margin-bottom: 5px;
    background-color: #35404e;
    transition: 0.3s transform;
    will-change: transform;
  }

  input:checked {
    ~ div {
      position: absolute;
      top: 6px;
    }
    ~ div:nth-of-type(1) {
      transform: rotate(45deg);
    }
    ~ div:nth-of-type(2) {
      display: none;
    }
    ~ div:nth-of-type(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
