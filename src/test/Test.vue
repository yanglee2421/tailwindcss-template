<template>
  <div class="h-100 overflow-hidden">
    <embed
      :src="pdf"
      type="application/pdf"
      width="100%"
      height="100%"
    />
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import pdf from "@/assets/resume.pdf";
</script>
<style lang="scss" scoped></style>
