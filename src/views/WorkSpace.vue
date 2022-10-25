<template>
  <div class="h-100 p-1">
    <fw-table
      :model="formData"
      :data="table.data"
      border
      v-model:PageIndex="formData.PageIndex"
      v-model:PageSize="formData.PageSize"
      @fw-initTable="initTable"
      :total="table.total"
      fw-index
    >
      <template #form>
        <el-form-item label="姓名：">
          <el-input v-model.trim="formData.name" />
        </el-form-item>
        <el-form-item
          label="年龄："
          v-for="item in 4"
          :key="item"
        >
          <el-input v-model.trim="formData.age" />
        </el-form-item>
      </template>
      <template #btn-bar>
        <el-button
          @click="go()"
          type="success"
          >新增</el-button
        >
        <el-button
          @click="gallerySta.isShow = true"
          type="warning"
        >
          壁纸
        </el-button>
        <el-button
          @click="loginOut"
          type="danger"
          >登出</el-button
        >
      </template>
      <el-table-column
        label="姓名"
        prop="name"
        align="center"
      />
      <template
        v-for="item in 6"
        :key="item"
      >
        <el-table-column
          label="年龄"
          prop="age"
          align="center"
        />
      </template>
      <el-table-column
        label="操作"
        align="center"
        width="100"
        fixed="right"
      >
        <template #default="{ $index }">
          <el-link
            data-btn="编辑"
            type="primary"
            >编辑</el-link
          >
          <el-link
            type="danger"
            class="ml-1"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </fw-table>
    <el-image-viewer
      v-if="gallerySta.isShow"
      :url-list="gallerySta.urlList"
      @close="gallerySta.isShow = false"
    ></el-image-viewer>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGallery } from "@/hooks";
import request from "@/api/request";
const router = useRouter();
const loginOut = () => {
  localStorage.removeItem("token");
  router.replace("/login");
};
const go = () => {
  router.push({
    name: "test04",
    state: {
      bb: {
        aaa: 777,
      },
    },
  });
};
const gallerySta = useGallery();
onMounted(() => {
  request<string[]>({
    method: "get",
    url: "/bing",
    params: {
      idx: 0,
      n: 8,
    },
  }).then((res) => {
    gallerySta.urlList = res;
  });
});
/**
 * 表单部分
 */
const formData = reactive({
  PageIndex: 1,
  PageSize: 20,
  name: "",
  age: "",
});
interface _table {
  data: unknown[];
  total: number;
}
const table = reactive<_table>({
  data: [],
  total: 0,
});
const initTable = (i: unknown) => {};
const response = reactive({
  tableData: [{}],
});
/* request<unknown[]>({
  method: "get",
  url: "/table",
}).then((res) => {
  response.tableData = res as any;
  table.total = res.length;
}); */
watchEffect(() => {
  const target = response.tableData;
  const { PageIndex, PageSize } = formData;
  table.data = target.slice((PageIndex - 1) * PageSize, PageIndex * PageSize);
});
</script>
<style lang="scss" scoped></style>
