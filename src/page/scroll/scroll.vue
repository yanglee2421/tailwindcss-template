<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div>
    <select
      name="select"
      value="5"
    >
      <option value="">null</option>
      <option
        v-for="item in 5"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
