<template>
  <div>
    <el-collapse>
      <el-collapse-item
        name="1"
        label="表单"
      >
        <el-form>
          <el-form-item
            v-for="(item, index) in 6"
            :key="index"
          >
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <el-table
      :data="[{}, {}, {}, {}, {}, {}, {}]"
      border
      stripe
    >
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="55px"
      ></el-table-column>
      <el-table-column
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="标题"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
