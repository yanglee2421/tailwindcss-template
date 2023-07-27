<script lang="ts" setup>
interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {});
void props;
defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-col
    :xs="24"
    :sm="12"
    :md="6"
  >
    <el-card
      :header="title"
      class="h-100"
    >
      <slot></slot>
    </el-card>
  </el-col>
</template>

<style lang="scss" scoped></style>
