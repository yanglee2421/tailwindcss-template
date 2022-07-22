<template>
  <div>
    <Slot :data="data">

    </Slot>
  </div>
</template>
<script setup>
import Slot from "@/components/Slot.vue";
import { reactive } from "vue";
const data = reactive({
  name: 444
})
</script>
<style lang='scss' scoped>
</style>