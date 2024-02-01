<script setup lang="ts">
// Vue Imports
import * as Vue from "vue";
import type { Res } from "@/api/swagger/get_brand_list";
import { useMachineList } from "@/hooks/api-swagger";

const props = defineProps<{
  branchs: Res;
}>();

const branchIdRef = Vue.ref(props.branchs.at(0)?.brand_id || "");

const query = useMachineList(branchIdRef);
</script>

<template>
  <div :class="['flex', 'gap-2', 'overflow-hidden', 'h-full']">
    <div>
      <el-scrollbar>
        <el-radio-group
          v-model="branchIdRef"
          :class="['!block']"
        >
          <el-radio
            v-for="item in branchs"
            :key="item.brand_id"
            :label="item.brand_id"
            :class="['!block']"
            >{{ item.brand_name }}</el-radio
          >
        </el-radio-group>
      </el-scrollbar>
    </div>
    <div :class="['flex-1', 'overflow-hidden']">
      <div
        v-if="Vue.unref(query.isPending)"
        v-loading="true"
        :class="['h-full']"
      ></div>
      <div
        v-else-if="Vue.unref(query.isError)"
        :class="['h-full']"
      >
        {{ Vue.unref(query.error)?.message }}
      </div>
      <el-scrollbar
        v-else-if="Vue.unref(query.isSuccess)"
        :view-class="['space-y-2']"
      >
        <div
          v-for="item in Vue.unref(query.data)"
          :key="item.machine_id"
          :class="['flex', 'gap-2', 'justify-between', 'items-center']"
        >
          <img
            :src="item.machine_img"
            :alt="item.machine_name"
            :width="48"
            :class="['aspect-square']"
          />

          <div :class="['flex', 'flex-1', 'overflow-hidden', 'gap-2']">
            <b :class="['flex-1', 'overflow-hidden', 'm-0', 'text-sm']">
              {{ item.brand_name + " " + item.machine_name }}
            </b>

            <div :class="['text-end']">
              <p :class="['m-0', 'text-sm', 'text-zinc-500']">最高回收价</p>
              <span :class="['text-sm', 'text-red-500']"
                >￥{{ item.max_quote }}</span
              >
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
