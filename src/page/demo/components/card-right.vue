<script lang="ts" setup>
import { computed, inject, unref, watchEffect } from "vue";
import { UseQueryOptions, useQueries } from "@tanstack/vue-query";
import { getDemo } from "@/api";
import type { GlobalState, PendingTask, TableRow } from "@/types/pageDemo";
import { toJsonClone } from "@/utils";
import { ElMessage } from "element-plus";

const globalState = inject<GlobalState>("global-state");
const pendingTasks = computed(() => globalState?.pendingTask || []);
const settledTasks = computed(() => globalState?.settledTasks || []);

type QueryOptions = UseQueryOptions<PendingTask, Error, PendingTask, unknown[]>;
const queries = computed(() => {
  return unref(pendingTasks).map<QueryOptions>((task) => ({
    queryKey: ["task", task],
    queryFn() {
      return getDemo(task);
    },
    staleTime: Infinity,
    retry(failureCount, err) {
      if (failureCount > 2) return false;
      if (err.cause === "xx") return true;
      return false;
    },
    retryDelay: 1000 * 3,
    initialData() {
      return task;
    },
    initialDataUpdatedAt: 0,
    onSuccess(data) {
      //   Object.assign(task, data);
    },
    onError(err) {
      ElMessage.error(err.message);
    },
  }));
});

const queryList = useQueries({ queries });
const tableData = computed<TableRow[]>(() => {
  const pTasks = queryList.map<TableRow>((task) => ({
    isSettled: false,
    task,
  }));
  const sTasks = unref(settledTasks).map<TableRow>((task) => ({
    isSettled: true,
    task,
  }));
  return pTasks.concat(sTasks);
});

watchEffect(() => {
  console.log(unref(pendingTasks));
});
</script>

<template>
  <div>
    <el-table
      :data="tableData"
      height="100%"
      border
    >
      <el-table-column label="id">
        <template #default="{ row }">
          {{
            row.isSettled
              ? row.task.client_task_id
              : row.task.data.client_task_id
          }}
        </template>
      </el-table-column>
      <el-table-column label="status">
        <template #default="{ row }">
          {{ row.isSettled ? row.task.task_status : row.task.data.task_status }}
        </template>
      </el-table-column>
      <el-table-column label="operate">
        <template #default="{ row }">
          <el-button
            v-if="row.task?.data?.task_status === 'FAILURE'"
            @click="row.task.refetch"
            type="primary"
            link
            >refetch</el-button
          >
          <el-button
            v-else-if="row.task?.data?.task_status === 'PAUSED'"
            @click="row.task.refetch"
            type="warning"
            link
            >start</el-button
          >
          <el-button
            v-else-if="row.task?.data?.task_status === 'SUCCESS'"
            type="danger"
            link
          >
            view
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
