<template>
  <div class="h-100 flex-column">
    <el-form
      :model="formData"
      inline
    >
      <el-form-item>
        <el-input v-model="formData.name" />
      </el-form-item>
    </el-form>
    <div class="flex-1-hidden">
      <el-table :data="table.rows">
        <el-table-column />
      </el-table>
    </div>
    <el-pagination
      layout="total,sizes,prev,pager,next,jumper"
      :total="table.total"
    />
    <Dia v-model="diaData"></Dia>
  </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from "vue";
import { Post } from "./api";
import Dia from "./Dia.vue";
import { FormData } from "./formData";
const formData = reactive(new FormData());
const rules = reactive({});
interface TabInter {
  rows: unknown[];
  total: number;
}
const table = reactive<TabInter>({
  rows: [],
  total: 100,
});
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
});
const initTable = (boolean: boolean) => {
  boolean && Object.assign(pagination, formData);
  Post(pagination).then((res) => {
    const { Result, Data } = <ResInter>(<unknown>res);
    Result === 1 && (table.rows = <unknown[]>Data);
  });
};
const diaData = ref<boolean | FormData>(false);
diaData.value = { name: "" };
</script>
<style lang='scss' scoped>
</style>