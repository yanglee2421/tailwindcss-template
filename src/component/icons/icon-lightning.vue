<script lang="ts" setup>
interface props {
  color?: string;
  size?: number;
}

const props = withDefaults(defineProps<props>(), {
  color: "black",
  size: 20,
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :stroke="color"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.25"
      d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
    />
  </svg>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
