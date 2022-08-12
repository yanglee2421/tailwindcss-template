<template>
  <div class="h-100 flex-column">
    <el-form
      :model="formData"
      class="flex-row"
      inline
    >
      <div>
        <el-form-item label="输入：">
          <el-input v-model.trim="formData.input" />
        </el-form-item>
        <el-form-item label="下拉：">
          <el-select
            v-model="formData.select"
            clearable
          >
            <el-option
              v-for="(item,index) in 5"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="级联：">
          <el-cascader v-model="formData.cascader" />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button
          @click="initTable(true)"
          type="primary"
        >查询</el-button>
        <el-button @click="Object.assign(formData,new FormData());initTable(true)">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="pb-1">
      <el-button
        @click="diaData=true"
        type="success"
      >新增</el-button>
    </div>
    <div class="flex-1-hidden">
      <el-table
        :data="table.rows"
        height="100%"
        stripe
        border
      >
        <el-table-column
          align="center"
          label="输入："
          prop="input"
        />
        <el-table-column
          align="center"
          label="下拉："
          prop="select"
        />
        <el-table-column
          align="center"
          label="级联："
          prop="cascader"
        />
        <el-table-column
          align="center"
          label="操作"
          width="120"
        >
          <template #default="{row}">
            <el-link
              @click="diaData=row"
              type="primary"
              class="mr-1"
            >编辑</el-link>
            <el-link
              @click="diaData=row"
              type="danger"
            >删除</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      layout="total,sizes,prev,pager,next,jumper"
      v-model:currentPage="pagination.currentPage"
      v-model:pageSize="pagination.pageSize"
      :total="table.total"
      class="pt-1"
    />
    <Dia
      v-model="diaData"
      @confirm="table.rows.push($event)"
    ></Dia>
  </div>
</template>
<script lang='ts' setup>
import { reactive, ref, watchEffect } from "vue";
import Dia from "./Dia.vue";
import { FormData } from "./formData";
import response from "./mod";
// 表单
const formData = reactive(new FormData());
const rules = reactive({});
interface TabInter {
  rows: FormData[];
  total: number;
}
// 表格
const table = reactive<TabInter>({
  rows: [],
  total: 100,
});
// 分页
interface PagiInter extends Partial<FormData> {
  currentPage: number;
  pageSize: number;
}
const pagination = reactive<PagiInter>({
  currentPage: 1,
  pageSize: 10,
});
//渲染表格
const initTable = (boolean?: boolean) => {
  boolean && Object.assign(pagination, formData);
  const { currentPage, pageSize } = pagination;
  // 总条目
  const arr = response.filter((item) => {
    //需要进行匹配的键名
    const tartget = Object.keys(pagination).filter(
      (key) => pagination[<keyof FormData>key] && item[<keyof FormData>key]
    );
    //返回匹配通过的条目
    return tartget.every((key) => {
      return item[<keyof FormData>key] === pagination[<keyof FormData>key];
    });
  });
  //通过条目的总数
  table.total = arr.length;
  //展示通过的条目
  table.rows = arr.slice((currentPage - 1) * pageSize, currentPage * pageSize);
};
const diaData = ref<boolean | FormData>(false);
watchEffect(() => {
  initTable();
});
</script>
<style lang='scss' scoped>
</style>