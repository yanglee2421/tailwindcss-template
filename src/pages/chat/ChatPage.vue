<script lang="ts" setup></script>

<template>
  <div
    class="contentFixed scrollbar-thin flex h-full snap-x snap-mandatory overflow-auto rounded shadow"
  >
    <div
      v-for="item in 3"
      :key="item"
      class="flex-none basis-full snap-center snap-always border lg:min-w-0 lg:flex-1"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scrollbar-none {
  scrollbar-width: none;
}
.scrollbar-thin {
  scrollbar-width: thin;
}
</style>
