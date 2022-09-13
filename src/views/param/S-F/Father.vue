<template>
  <div>
    <div>
      <h3>父亲中</h3>
      <span>父亲收到的：{{param}}</span>
      <div class="p-1 mt-1 b">
        <Son
          :value="param"
          @update="param=$event"
        ></Son>
      </div>
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