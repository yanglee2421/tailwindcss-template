<template>
  <div class="flex-column">
    <el-form
      class="flex-row"
      inline
    >
      <div class="flex">
        <el-form-item label="输入：">
          <el-input maxlength="30" />
        </el-form-item>
        <el-form-item label="下拉：">
          <el-select>
            <el-option
              v-for="item in 5"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="级联：">
          <el-cascader :options="[{label:'111'}]" />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="success">新增</el-button>
    </div>
    <div class="flex-1-hidden pt-1">
      <el-table
        :data="[{},{}]"
        height="100%"
        stripe
        border
      >
        <el-table-column
          align="center"
          label="Id"
        />
        <el-table-column
          align="center"
          label="输入"
        />
        <el-table-column
          align="center"
          label="下拉"
        />
        <el-table-column
          align="center"
          label="级联"
        />
        <el-table-column
          align="center"
          width="120"
          label="操作"
          fixed="right"
        >
          <template #default="{row}">
            <el-link
              @click="null"
              type="primary"
              class="pr-1"
            >编辑</el-link>
            <el-link
              @click="null"
              type="danger"
            >删除</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      layout="total,sizes,prev,pager,next,jumper"
      :total="100"
    />
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>