<template>
  <div>
    <div>
      <h1>父亲中</h1>
      <span>{{param}}</span>
      <Son
        :value="param"
        @update="param=$event"
      ></Son>
    </div>
  </div>
</template>
<script lang='ts' setup>
import Son from "@/views/param/S-F/Son.vue";
import { ref } from "vue";
const param = ref<string>("父亲给儿子的");
</script>
<style lang='scss' scoped>
</style>