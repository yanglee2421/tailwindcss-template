<script lang="ts" setup>
import { cardRight } from "./components";
import { provide, reactive } from "vue";
import type { GlobalState } from "@/types/pageDemo";

const globalState = reactive<GlobalState>({
  pendingTask: [],
  settledTasks: [],
});
provide("global-state", globalState);

const form = reactive({
  role_no: 1,
});

const handleAdd = () => {
  globalState.pendingTask.unshift({
    client_task_id: crypto.randomUUID(),
    role_no: 1,
    task_id: "",
    task_label: "new",
    task_progress: 0,
    task_status: "PENDING",
    start_time: new Date().toISOString(),
    end_time: null,
    exception: null,
    form: {},
  });
};
</script>

<template>
  <div class="flex-column p-1">
    <div>
      <el-radio-group v-model="form.role_no">
        <el-radio :label="1">label1</el-radio>
        <el-radio :label="2">label2</el-radio>
        <el-radio :label="3">label3</el-radio>
      </el-radio-group>
    </div>
    <div class="p-1">
      <el-button
        @click="handleAdd"
        type="primary"
        >Add</el-button
      >
    </div>
    <div class="flex-1-hidden">
      <card-right></card-right>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
