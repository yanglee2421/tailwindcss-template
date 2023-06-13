<script lang="ts" setup>
import { useLoginPost } from "./hooks";
import { useQuery } from "@tanstack/vue-query";

const { mutate } = useLoginPost();

useQuery({
  queryKey: ["unique"],
  async queryFn() {
    return { name: "xxx" };
  },
});
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
