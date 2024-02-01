<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";
import { useBrandList, useMachineList } from "@/hooks/api-swagger";

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
const branchIdRef = Vue.ref("");
const branchQuery = useBrandList(categoryRef);
const machineQuery = useMachineList(branchIdRef);

Vue.watchPostEffect(() => {
  const branchId = Vue.unref(branchIdRef);
  const branchList = Vue.unref(branchQuery.data);

  if (!branchList) {
    return;
  }

  if (branchId) {
    return;
  }

  const defaultBranch = branchList.at(0);

  if (!defaultBranch) {
    return;
  }

  branchIdRef.value = defaultBranch.brand_id;
});
</script>

<template>
  <div
    v-loading="
      Vue.unref(branchQuery.isPending) || Vue.unref(machineQuery.isPending)
    "
    :class="['w-96', 'h-[36rem]', 'flex', 'flex-col', 'p-3']"
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
      v-if="Vue.unref(branchQuery.data)"
      :class="['flex', 'overflow-hidden', 'flex-1']"
    >
      <div>
        <el-scrollbar>
          <el-radio-group
            v-model="branchIdRef"
            :class="['!block']"
          >
            <el-radio
              v-for="item in Vue.unref(branchQuery.data)"
              :key="item.brand_id"
              :label="item.brand_id"
              :class="['!block']"
              >{{ item.brand_name }}</el-radio
            >
          </el-radio-group>
        </el-scrollbar>
      </div>
      <div
        v-if="Vue.unref(machineQuery.data)"
        :class="['grid']"
      >
        <el-scrollbar>
          <div
            v-for="item in Vue.unref(machineQuery.data)"
            :key="item.machine_id"
            :class="['flex', 'justify-between', 'items-center']"
          >
            <img
              :src="item.machine_img"
              :alt="item.machine_name"
              :width="56"
              :class="['aspect-square']"
            />

            <h6
              :class="[
                'text-ellipsis',
                'text-nowrap',
                'flex-1',
                'overflow-hidden',
              ]"
            >
              {{ item.brand_name + " " + item.machine_name }}
            </h6>
            <div :class="['text-end']">
              <p :class="['text-sm', 'text-zinc-500']">最高回收价</p>
              <span :class="['text-sm', 'text-red-500']"
                >￥{{ item.max_quote }}</span
              >
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
