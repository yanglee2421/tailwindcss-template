<script lang="ts" setup>
// Components Imports
import frameMain from "./frame-main.vue";
import frameTabs from "./frame-tabs.vue";

// Store Imports
import { useStoreFrame } from "@/hooks";

const store = useStoreFrame();

defineOptions({ inheritAttrs: true });
</script>

<template>
  <section class="mx-auto max-w-2xl space-y-6">
    <div class="bg-gradient-to-b from-purple-500 to-pink-500">
      <h2 class="text-white text-center font-bold text-2xl p-2 my-0">
        {{ store.dialogTitle }}
      </h2>
    </div>
    <div class="flex flex-col items-center">
      <div class="sm:w-10/12 px-2">
        <frame-tabs />
        <frame-main />
        <div>
          <b class="capitalize">notes</b>
          <p class="text-gray-500 text-xs mt-1 font-light">
            To protect your rights, please login before submitting photos. If
            you do not have a Smoant account yet, please click here to register.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
:global(.frame__dialog .el-dialog__header) {
  padding: 0;
  margin: 0;
}
</style>
