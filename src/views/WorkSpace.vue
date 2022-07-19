<template>
  <div>
    23143
    <div class="box m-center mt-2">
      <SlotAAA>
        <template #default="{one,two}">
          <div>{{7777+one-two}}</div>
        </template>
        <template #slot1="{three}">
          <div>{{7777+three}}</div>
        </template>
      </SlotAAA>
    </div>
  </div>
</template>
<script lang='ts' setup>
import SlotAAA from "@/views/Slot/Slot.vue";
</script>
<style lang='scss' scoped>
.box {
  width: 500px;
  height: 400px;
}
</style>