<template>
  <el-table-column
    v-for="(item,index) in columns"
    :key="index"
  >

  </el-table-column>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
interface _props {
  columns?: Record<string, unknown>[];
}
const props = withDefaults(defineProps<_props>(), {
  columns: () => [],
});
</script>
<style lang='scss' scoped>
</style>