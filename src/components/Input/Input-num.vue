<template>
  <div>
    <el-input
      v-model="state.value"
      @input="state.value = $event.replace(/[^.\d]/g, '')"
      @change="fun($event, state, 'value')"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  value: "",
});
const fun = ($event: string, state: Record<string, unknown>, key: string) => {
  const res = Number.parseFloat($event).toFixed(2);
  state[key] = res === "NaN" ? "0" : res;
};
</script>
<style lang="scss" scoped></style>
