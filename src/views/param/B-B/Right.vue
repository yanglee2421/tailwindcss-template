<template>
  <div class="b p-1">
    <b>右</b>
    <el-input v-model="value" />
  </div>
</template>
<script lang='ts' setup>
import { computed, reactive } from "vue";
import { useStore, mapState } from "vuex";
const store = useStore();
const target = mapState({ mes: "aaa" });

const state = reactive<Record<string, unknown>>({});
Object.keys(target).forEach((key) => {
  state[key] = computed(
    target[key as keyof typeof target].bind({
      $store: store,
    })
  );
});

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