<template>
  <div>
    <h1>儿子中</h1>
    <el-input v-model="state.value" />
  </div>
</template>
<script lang='ts' setup>
import { computed, reactive, watchEffect } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update"]);
interface Sta {
  value?: unknown;
}
const state = reactive<Sta>({});
state.value = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("update", value);
  },
});
</script>
<style lang='scss' scoped>
</style>