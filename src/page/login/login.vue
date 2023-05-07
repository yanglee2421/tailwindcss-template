<script lang="ts" setup>
import { useLoginPost } from "./hooks";
const { mutate } = useLoginPost();
</script>

<template>
  <div>
    <button @click="() => mutate()">login</button>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
