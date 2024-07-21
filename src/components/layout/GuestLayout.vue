<script lang="ts" setup></script>

<template>
  <div class="fixed inset-0 flex h-full">
    <div class="hidden flex-grow overflow-hidden md:block">
      <slot name="illustrations"></slot>
    </div>

    <div
      class="flex w-full flex-col justify-center border-l p-8 shadow md:max-w-md md:p-6"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
