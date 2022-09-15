<template>
  <div class="table h-100 flex-column">
    <div class="thead">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nam
        rerum consequatur dignissimos qui recusandae, quibusdam soluta in nisi,
        perspiciatis officiis rem similique magni cum deleniti facilis impedit.
        Officiis, cum.
      </div>
      <div>2</div>
      <div>3</div>
    </div>
    <div class="tbody overflow-overlay">
      <template
        v-for="item in 10"
        :key="item"
      >
        <div>
          <el-select>
            <el-option
              v-for="item in 5"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
        <div>
          <el-input />
        </div>
        <div>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-select></el-select>
            </el-col>
            <el-col :span="6">
              <el-checkbox>123</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>123</el-checkbox>
            </el-col>
            <el-col :span="12">
              <el-select></el-select>
            </el-col>
            <el-col :span="6">
              <el-checkbox>123</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>123</el-checkbox>
            </el-col>
            <el-col :span="12">
              <el-select></el-select>
            </el-col>
            <el-col :span="6">
              <el-checkbox>123</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>123</el-checkbox>
            </el-col>
          </el-row>
        </div>
      </template>
    </div>
    <div class="tfoot">
      <template
        v-for="item in 1"
        :key="item"
      >
        <div>{{ `${item}-1` }}</div>
        <div>{{ `${item}-2` }}</div>
        <div>{{ `${item}-3` }}</div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@mixin grid {
  display: grid;
  grid-template: auto/6fr 6fr 12fr;
}
@mixin cell {
  padding: 10px;
  border: solid #eee;
  border-width: 1px 1px 0 0;
  text-align: center;
}
.table {
  .thead,
  .tbody,
  .tfoot {
    @include grid;
    border: solid #eee;
    border-width: 0 0 1px 1px;
    > div {
      @include cell;
    }
  }
  .tbody {
    overflow: auto;
  }
  .tbody,
  .tfoot {
    > div {
      @for $i from 1 through 3 {
        &:nth-of-type(#{$i}) {
          border-top: 0;
        }
      }
    }
  }
  .thead,
  .tfoot {
    > div {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
