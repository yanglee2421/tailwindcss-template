<template>
  <div>
    <swz-slot
      v-model:show="state.show"
      @swzChange="fun($event)"
      @swzInput="state.show=true"
      @swzClick="null"
      :name="{aa:'张三'}"
    >
      <template #default="{msg}">
        <p>{{msg}}</p>
      </template>
    </swz-slot>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive({
  show: false,
});
const fun = (param?: unknown) => {
  console.log(param);
};
</script>
<style lang='scss' scoped>
</style>