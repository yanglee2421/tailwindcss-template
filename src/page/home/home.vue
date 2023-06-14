<script lang="ts" setup>
import { reactive, watch } from "vue";
import { useRefreshQuery } from "./hooks";

const params = reactive({
  pwd_site: "",
  pwd_username: "",
  page_index: 1,
  page_size: 20,
});

const { data } = useRefreshQuery(params);

watch(
  data,
  (data) => {
    console.log(data);
  },
  {
    immediate: true,
    flush: "post",
  }
);

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="page">
    <div class="flex-1-hidden">
      <el-table
        :data="data.rows"
        height="100%"
      >
        <el-table-column
          label="site"
          prop="pwd_site"
        ></el-table-column>
      </el-table>
    </div>
    <el-pagination
      layout="total,prev,pager,next,sizes,jumper"
      v-model:current-page="params.page_index"
      v-model:page-size="params.page_size"
      :total="data?.total || 0"
      :page-sizes="[20, 50, 100]"
    ></el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;

  height: 100%;
}
</style>
