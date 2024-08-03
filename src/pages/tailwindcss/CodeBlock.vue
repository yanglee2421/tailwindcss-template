<script lang="ts" setup>
import * as Vue from "vue";
import ScrollView from "@/components/ui/ScrollView.vue";

const state = Vue.reactive({
  showCode: false,
});
</script>

<template>
  <div class="divide-y rounded border bg-white">
    <div class="p-6">
      <ScrollView>
        <slot></slot>
      </ScrollView>
    </div>
    <div>
      <div class="flex justify-end p-2">
        <button
          class="flex size-8 items-center justify-center rounded-full text-xl text-slate-500 hover:text-blue-500"
          @click="state.showCode = !state.showCode"
        >
          <i class="iconify mdi--xml"></i>
        </button>
      </div>
      <div
        :class="[
          state.showCode ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          'grid transition-all',
        ]"
      >
        <div class="overflow-hidden">
          <slot name="code"></slot>
        </div>
      </div>
    </div>
    <div
      v-if="state.showCode"
      class="sticky bottom-0 z-50 flex items-center justify-center bg-white p-3"
    >
      <button
        class="flex items-center justify-center hover:text-blue-500"
        @click="state.showCode = !state.showCode"
      >
        <i class="iconify text-xl mdi--expand-less"></i>
        <span>hidden</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
