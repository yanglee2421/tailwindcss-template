<template>
  <div>
    <swz-slot
      v-model="state.show"
      :name="{aa:'张三'}"
      :ref="el=>state.el=el"
      @input="fun($event)"
    >
      <template #default="{msg}">
        <p>{{msg}}</p>
      </template>
    </swz-slot>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive<Record<string, unknown>>({
  show: "传",
  el: null,
});
const fun = (param?: unknown) => {
  console.log(param);
};
</script>
<style lang='scss' scoped>
</style>