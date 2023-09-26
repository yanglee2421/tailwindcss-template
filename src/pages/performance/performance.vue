<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="h-full flex flex-col">
    <header class="pb-6 bg-white shadow fixed top-0 inset-x-0">
      <h1 class="text-7xl mx-auto w-fit">position sticky</h1>
    </header>
    <div class="mx-auto mt-28 max-w-screen-lg grid grid-cols-2 gap-6">
      <ul class="space-y-2">
        <li
          v-for="item in 10"
          :key="item"
          class="bg-red-400 p-3 h-96 rounded"
        >
          {{ item }}
        </li>
      </ul>
      <article class="border sticky top-28 self-start p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima
        temporibus consequatur porro. Consequatur eligendi dicta veniam
        repudiandae sit dignissimos error esse perferendis illo iure!
        Praesentium iste rerum fugit hic!
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
