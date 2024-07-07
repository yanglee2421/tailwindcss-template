<script lang="ts" setup>
import * as Vue from "vue";
const state = Vue.reactive({
  collapsed: false,
  isHovered: false,
});
</script>

<template>
  <div class="text-el-text-color-regular flex">
    <aside
      :class="[
        'sticky top-0 z-10 h-[100dvh] transition-all',
        state.collapsed ? 'w-16' : 'w-56',
      ]"
    >
      <div
        class="relative h-full w-full transition-all hover:w-56"
        @mouseenter="state.isHovered = true"
        @mouseleave="state.isHovered = false"
      >
        <div
          class="bg-el-bg-color border-el-border-color relative box-border flex h-full w-full flex-col overflow-hidden border-0 border-r border-solid"
        >
          <div class="flex overflow-hidden px-4 py-2">
            <RouterLink
              :to="{ name: 'home' }"
              class="flex no-underline dark:text-red-500"
            >
              <span
                v-if="state.isHovered || !state.collapsed"
                class="ml-3"
                >Title</span
              >
            </RouterLink>
          </div>
          <hr
            class="border-el-border-color my-0 w-full border-0 border-b border-solid"
          />
          <div></div>
        </div>
      </div>
    </aside>
    <div class="flex-auto">
      <header></header>
      <main>
        <RouterView v-slot="{ Component }">
          <component :is="Component"></component>
        </RouterView>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
