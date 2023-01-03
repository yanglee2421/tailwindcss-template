<template>
  <div>
    <ly-counter></ly-counter>
    <div>
      <el-icon
        v-for="(item, index) in arr"
        :key="index"
        v-drag="{ arr, index }"
        >{{ item }}
        <Search />
      </el-icon>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";

const arr = reactive([1, 2, 3]);
</script>
<style lang="scss" scoped></style>
