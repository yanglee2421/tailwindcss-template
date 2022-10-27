<template>
  <div class="h-100">
    <fw-table
      :model="formData"
      :data="table.data"
      border
      v-model:PageIndex="formData.PageIndex"
      v-model:PageSize="formData.PageSize"
      @fw-initTable="initTable"
      :total="table.total"
      fw-index
      fw-selection
    >
      <template #form>
        <el-form-item
          label="姓名："
          prop="name"
        >
          <el-input v-model.trim="formData.name" />
        </el-form-item>
        <el-form-item
          label="年龄："
          prop="age"
        >
          <el-input
            v-model.trim="formData.age"
            @input="formData.age = $event.replace(/[^\d]/g, '')"
            maxlength="3"
          />
        </el-form-item>
        <el-form-item
          label="性别："
          prop="gender"
        >
          <el-select v-model="formData.gender">
            <el-option
              label="男"
              value="男"
            ></el-option>
            <el-option
              label="女"
              value="女"
            ></el-option>
            <el-option
              label="不男不女"
              value="不男不女"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="地址："
          prop="address"
        >
          <el-input
            v-model.trim="formData.address"
            maxlength="50"
          ></el-input>
        </el-form-item>
      </template>
      <template #btn-bar>
        <el-button
          @click="saveSta.model = true"
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
        width="100"
      />
      <el-table-column
        label="年龄"
        prop="age"
        align="center"
        width="70"
      />
      <el-table-column
        label="性别"
        prop="gender"
        align="center"
        width="70"
      />
      <el-table-column
        label="地址"
        prop="address"
        align="center"
      />
      <el-table-column
        label="爱好"
        prop="age"
        align="center"
      >
        <template #default="{ row }">
          <el-tag
            v-for="(item, index) in row.hobby"
            :key="index"
            type="danger"
            effect="plain"
            >{{ item }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="100"
        fixed="right"
      >
        <template #default="{ $index, row }">
          <el-link
            @click="saveSta.model = row"
            type="primary"
            >编辑</el-link
          >
          <el-link
            @click="deteleLink(row)"
            type="danger"
            class="ml-1"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </fw-table>
    <!-- #region 图片展示区 -->
    <el-image-viewer
      v-if="gallerySta.isShow"
      :url-list="gallerySta.urlList"
      @close="gallerySta.isShow = false"
    ></el-image-viewer>
    <!-- #endregion -->
    <!-- #region 保存弹窗 -->
    <table-save
      v-model="saveSta.model"
      @success="initTable(false)"
    >
    </table-save>
    <!-- #endregion -->
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGallery } from "@/hooks";
import request from "@/api/request";
import response from "./data";
import tableSave from "./TableSave.vue";
const router = useRouter();
const loginOut = () => {
  localStorage.removeItem("token");
  router.replace("/login");
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
  gender: "",
  address: "",
});
const table = reactive<{ data: unknown[]; total: number }>({
  data: [],
  total: 0,
});
const deteleLink = (row: { id: string }) => {
  const index = response.findIndex((item) => item.id == row.id);
  table.data.splice(index, 1);
  response.splice(index, 1);
};
/**
 * 刷新表格
 * @param isQuery
 */
const initTable = (isQuery: boolean) => {
  const { PageIndex, PageSize } = formData;
  const chkForm = {
    ...formData,
    ...{ PageIndex: "", PageSize: "" },
  };
  const chkKey = Object.keys(chkForm).filter(
    (key) => chkForm[key as keyof typeof chkForm]
  );
  const filterRes = response.filter((item) => {
    return chkKey.every((key) => {
      return (item[key as keyof typeof item] as string).includes(
        chkForm[key as keyof typeof chkForm]
      );
    });
  });
  const total = filterRes.length;
  const data = filterRes.slice(
    (PageIndex - 1) * PageSize,
    PageIndex * PageSize
  );
  table.data = data;
  table.total = total;
};
/**
 * 保存弹窗
 */
const saveSta = reactive({
  model: false,
});
</script>
<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
