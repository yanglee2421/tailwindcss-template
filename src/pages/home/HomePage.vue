<script lang="ts" setup>
import { ElRow, ElCol } from "element-plus";
import * as Vue from "vue";

const formValues = Vue.reactive<{
  checkbox: number[];
}>({
  checkbox: [],
});
</script>

<template>
  <div class="p-3">
    <ElRow>
      <ElCol
        v-for="item in 20"
        :key="item"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
      >
        <label
          :class="[
            'block cursor-pointer rounded border p-3 transition-colors',
            formValues.checkbox.includes(item) &&
              ' border-red-500 text-red-500',
          ]"
        >
          <input
            v-model="formValues.checkbox"
            @change="
              () => {
                console.log(formValues.checkbox);
              }
            "
            type="checkbox"
            hidden
            :value="item"
          />
          {{ item }}</label
        >
      </ElCol>
    </ElRow>
  </div>
</template>

<style lang="scss" scoped></style>
