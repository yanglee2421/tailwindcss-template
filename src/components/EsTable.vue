<template>
  <div class="h-100 flex-column" v-cloak>
    <!-- 表单部分 -->
    <el-card>
      <el-form
        ref="queForRef"
        :model="formData"
        :rules="queryRul"
        class="flex-row"
        inline
      >
        <div>
          <el-form-item prop="name">
            <el-input v-model="formData.name" maxlength="20" />
          </el-form-item>
          <el-form-item>
            <el-select></el-select>
          </el-form-item>
          <el-form-item>
            <el-select></el-select>
          </el-form-item>
          <el-form-item prop="date">
            <el-date-picker value-format="YYYY-MM-DD" v-model="formData.date" />
          </el-form-item>
        </div>
        <el-form-item class="mr-0">
          <el-button type="primary" @click="submitForm(queForRef)"
            >查询</el-button
          >
          <el-button
            @click="
              queForRef.resetFields();
              submitForm(queForRef);
            "
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格部分 -->
    <el-card class="mt-1 flex-1-hidden" :body-style="cadBodSty">
      <div class="flex-1-hidden">
        <el-table height="100%" :data="state.table" border>
          <el-table-column align="center" label="客户编号" prop="Id" />
          <el-table-column align="center" label="客户名称" prop="Name" />
          <el-table-column align="center" label="统一社会信用代码" />
          <el-table-column align="center" label="客户简称" />
          <el-table-column align="center" label="所在区域" />
          <el-table-column align="center" label="最后跟进时间" />
          <el-table-column align="center" label="操作">
            <template #default>
              <el-link type="primary" @click="initTable">详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页器 -->
      <el-pagination
        layout="total,sizes,prev,pager,next,jumper"
        :pageSizes="[10, 20, 30]"
        :total="state.total"
        v-model:currentPage="queryPar.currentPage"
        v-model:pageSize="queryPar.pageSize"
      />
    </el-card>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";
import { reactive, ref, watchEffect } from "vue";

const state = reactive({
  table: [],
  dic: [],
  total: 0,
});
const defaultDate = "2022-12-25";
const queryPar = reactive({
  currentPage: 1,
  pageSize: 10,
});
const formData = reactive({
  name: 123,
  date: defaultDate,
});
const queryRul = reactive({});
const queForRef = ref();
const submitForm = (ref) => {
  if (ref)
    return ref.validate((vali) => {
      if (vali) {
        Object.assign(queryPar, formData);
        initTable();
      } else {
        return false;
      }
    });
};
const initTable = () => {
  const { dic } = state;
  const { currentPage, pageSize } = queryPar;
  console.log("发请求更新数据", queryPar);
  state.table = dic.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  state.total = state.dic.length;
};
Object.assign(queryPar, formData);
watchEffect(() => {
  initTable();
});
const cadBodSty = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
for (let i = 0; i < 100; i++) {
  state.dic.push({
    Id: i,
    Name: "张三" + i,
  });
}
</script>
<style lang='scss' scoped>
</style>