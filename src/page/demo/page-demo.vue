<script lang="ts" setup>
import { getDemo } from "@/api";
import { useQueries, UseQueryOptions } from "@tanstack/vue-query";
import { computed, reactive, unref } from "vue";

interface Item {
  id: number;
  status: string;
}

const state = reactive({
  qeueTasks: [] as Item[],
  settledTasks: [] as any[],
  role_no: 1,
});
const qeueTasks = computed(() =>
  state.qeueTasks.filter((item, idx) => {
    return idx % state.role_no === 0;
  })
);
type QueryOptions = UseQueryOptions<Item, Error, Item, unknown[]>;
const queries = computed(() => {
  return unref(qeueTasks).map<QueryOptions>((item) => ({
    queryKey: ["task", item],
    queryFn: () => getDemo(item),
    staleTime: Infinity,
    retry: 3,
    retryDelay: 1000 * 3,
    initialData: { id: item.id, status: "pending" },
    initialDataUpdatedAt: 0,
    onSuccess(data) {
      console.log("success");

      const idx = state.qeueTasks.indexOf(item);
      state.qeueTasks.splice(idx, 1);
      state.settledTasks.unshift(data);
    },
    onError(err) {},
    onSettled() {},
  }));
});

const queryList = useQueries({ queries });
const tableData = computed(() => {
  return queryList.slice().concat(state.settledTasks);
});

const handleAdd = () => {
  state.qeueTasks.unshift({
    id: Date.now(),
    status: "pending",
  });
};
</script>

<template>
  <div class="flex-column p-1">
    <div>
      <el-radio-group v-model="state.role_no">
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
      <el-table
        :data="tableData"
        height="100%"
        border
      >
        <el-table-column label="id">
          <template #default="{ row }">
            {{ row.data ? row.data.id : row.id }}
          </template>
        </el-table-column>
        <el-table-column label="status">
          <template #default="{ row }">
            {{ row.data ? row.data.status : "success" }}
          </template>
        </el-table-column>
        <el-table-column label="operate">
          <template #default="{ row }">
            <el-button
              v-if="row.data"
              @click="row.refetch"
              type="primary"
              link
              >refetch</el-button
            >
            <el-button
              v-else
              type="danger"
              link
            >
              view
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
