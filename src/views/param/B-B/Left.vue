<template>
  <div class="b p-1">
    <b>左</b>
    <el-input v-model="value" />
  </div>
</template>
<script lang='ts' setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const value = computed<string>({
  get() {
    return store.state.mod1.value;
  },
  set(value) {
    store.dispatch("mod1/value", value);
  },
});
</script>
<style lang='scss' scoped>
</style>