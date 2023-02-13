<script lang="ts" setup>
import { usePas } from "@/stores/usePas";
import { ElMessage, FormInstance } from "element-plus";
import { reactive, watch, ref } from "vue";

const query = reactive({
  site: "",
  user: "",
  pwd: "",
  page: 1,
  size: 20,
});

interface row {
  id: string;
  site: string;
  user: string;
  pwd: string;
}
interface tableState {
  rows: row[];
  total: number;
}

const tableState = reactive<tableState>({
  rows: [],
  total: 100,
});

const { find, remove, state } = usePas();
watch(
  [query, state],
  async ([query], prev, clearFn) => {
    try {
      const { rows, total } = await find(query);
      tableState.rows = rows;
      tableState.total = total;
    } catch (err: any) {
      ElMessage.error(err.message);
    }
  },
  {
    immediate: true,
    flush: "post",
  }
);

const formState = reactive({
  model: {
    site: "",
    user: "",
    pwd: "",
  },
  rules: {},
});
const form = ref<FormInstance | null>(null);
const submitHandler = () => {
  form.value?.validate((isPassed) => {
    if (!isPassed) return false;
    Object.assign(query, formState.model);
  });
};
const resetHandler = () => {
  form.value?.resetFields();
  Object.assign(query, formState.model, { page: 1 });
};
</script>

<template>
  <div class="flex-column">
    <el-form
      :ref="(e:any) => (form = e)"
      inline
      :model="formState.model"
      :rules="formState.rules"
      class="flex between-stretch"
    >
      <div>
        <el-form-item
          label="站点："
          prop="site"
        >
          <el-input
            v-model.trim="formState.model.site"
            maxlength="9"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item
          label="账户："
          prop="user"
        >
          <el-input
            v-model.trim="formState.model.user"
            maxlength="9"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码："
          prop="pwd"
        >
          <el-input
            v-model.trim="formState.model.pwd"
            maxlength="9"
            show-word-limit
          ></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button
          @click="submitHandler"
          type="primary"
          >查询</el-button
        >
        <el-button @click="resetHandler">重置</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button>添加</el-button>
    </div>
    <div class="flex-1-hidden mt-1">
      <el-table
        :data="tableState.rows"
        height="100%"
        border
      >
        <el-table-column
          type="selection"
          align="center"
          width="40"
        ></el-table-column>
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="60"
        ></el-table-column>
        <el-table-column
          label="Id"
          prop="id"
          align="center"
          show-overflow-tooltip
          sortable
        ></el-table-column>
        <el-table-column
          label="站点"
          prop="site"
          align="center"
          sortable
        ></el-table-column>
        <el-table-column
          label="账户"
          prop="user"
          align="center"
          sortable
        ></el-table-column>
        <el-table-column
          label="密码"
          prop="pwd"
          align="center"
          sortable
        ></el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="100"
        >
          <template #default="{ row }">
            <el-link type="primary">编辑</el-link>
            <el-link
              @click="remove(row.id)"
              type="danger"
              >删除</el-link
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-model:current-page="query.page"
      v-model:page-size="query.size"
      :total="tableState.total"
      :page-sizes="[20, 50, 100]"
      layout="total,prev,pager,next,sizes,jumper"
    />
  </div>
</template>

<style lang="scss" scoped>
.el-link + .el-link {
  margin-left: 10px;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
