<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";
import { useBrandList } from "@/hooks/api-swagger";
import asideRadios from "./aside-radios.vue";

const category = {
  J: "手机",
  K: "平板",
  L: "笔记本",
  A: "相机",
  CD: "智能数码",
  ZC: "台式机",
  CPU: "电脑配件",
  DYJ: "办公设备",
};

const categoryRef = Vue.ref<keyof typeof category>("J");
const query = useBrandList(categoryRef);
</script>

<template>
  <div
    :class="[
      'max-w-96',
      'h-full',
      'box-border',
      'min-h-[32rem]',
      'flex',
      'flex-col',
      'p-3',
    ]"
  >
    <div>
      <el-scrollbar>
        <el-radio-group
          v-model="categoryRef"
          :class="['!flex-nowrap']"
        >
          <el-radio
            v-for="item in Object.entries(category)"
            :key="item[0]"
            :label="item[0]"
            >{{ item[1] }}</el-radio
          >
        </el-radio-group>
      </el-scrollbar>
    </div>
    <el-divider :class="['!my-2']"></el-divider>
    <div
      v-if="Vue.unref(query.isPending)"
      v-loading="true"
      :class="['flex-1', 'overflow-hidden']"
    ></div>
    <div
      v-else-if="Vue.unref(query.isError)"
      :class="['flex-1', 'overflow-hidden']"
    >
      {{ Vue.unref(query.error)?.message }}
    </div>
    <div
      v-else-if="Vue.unref(query.isSuccess)"
      :class="['flex-1', 'overflow-hidden']"
    >
      <aside-radios
        v-if="Vue.unref(query.data)?.length"
        :key="Vue.unref(categoryRef)"
        :branchs="Vue.unref(query.data) || []"
      ></aside-radios>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
