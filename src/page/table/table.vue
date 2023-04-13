<script lang="ts" setup>
import { usePas } from "@/stores/usePas";
import { ElMessage, ElMessageBox, FormInstance, FormRules } from "element-plus";
import { reactive, watch, ref, nextTick } from "vue";

/**
 * Handle the logic of the main form module
 */
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
  total: 0,
});
const deleteHandler = async (id: string) => {
  try {
    await ElMessageBox.confirm("删除确认", {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
      draggable: true,
    });
    await remove(id);
    ElMessage({ type: "success", message: "已删除" });
  } catch (err) {
    const isCancel = err === "cancel";
    const type = isCancel ? "info" : "error";
    const message = isCancel ? "已取消" : "删除失败";
    ElMessage({ type, message });
  }
};

/**
 * Send http request when query changes
 */
const query = reactive({
  site: "",
  user: "",
  pwd: "",
  page: 1,
  size: 20,
});
const { find, remove, state, save } = usePas();
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

/**
 * Logic to process the header form
 */
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

/**
 * Handle the logic of the dialog module
 */
const dialogState = reactive({ model: false, title: "新增" });

interface diaFormState {
  rules: FormRules;
  model: row;
}

const diaFormState = reactive<diaFormState>({
  model: {
    id: "",
    site: "",
    user: "",
    pwd: "",
  },
  rules: {
    site: [{ required: true }],
    user: [{ required: true }],
    pwd: [{ required: true }],
  },
});
const diaForm = ref<FormInstance | null>(null);
const diaSubmitHandler = () => {
  diaForm.value?.validate(async (isPass) => {
    if (!isPass) return;
    try {
      await save(diaFormState.model);
      ElMessage({ message: "操作成功", type: "success" });
      dialogState.model = false;
    } catch {
      ElMessage({ message: "操作失败", type: "error" });
    }
  });
};
const editHandler = ({ id, site, user, pwd }: row) => {
  dialogState.model = true;
  nextTick(() => {
    diaFormState.model = { id, site, user, pwd };
  });
};
const closeHandler = () => {
  diaForm.value?.resetFields();
  diaFormState.model.id = "";
};
</script>

<template>
  <el-dialog
    v-model="dialogState.model"
    :title="dialogState.title"
    @close="closeHandler"
  >
    <el-form
      :ref="(e:FormInstance) => (diaForm = e)"
      :model="diaFormState.model"
      :rules="diaFormState.rules"
    >
      <el-form-item
        label="站点："
        prop="site"
      >
        <el-input
          v-model.trim="diaFormState.model.site"
          maxlength="9"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item
        label="账户："
        prop="user"
      >
        <el-input
          v-model.trim="diaFormState.model.user"
          maxlength="9"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码："
        prop="pwd"
      >
        <el-input
          v-model.trim="diaFormState.model.pwd"
          maxlength="9"
          show-word-limit
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogState.model = false">Cancel</el-button>
      <el-button
        @click="diaSubmitHandler"
        type="primary"
        >Ok</el-button
      >
    </template>
  </el-dialog>
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
      <el-button @click="dialogState.model = true">添加</el-button>
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
          fixed
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
          fixed="right"
        >
          <template #default="{ row }">
            <el-link
              @click="editHandler(row)"
              type="primary"
              >编辑</el-link
            >
            <el-link
              @click="deleteHandler(row.id)"
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
