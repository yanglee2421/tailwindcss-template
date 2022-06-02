<template>
  <div v-cloak>
    <!-- 顶栏 -->
    <header>
      <h2></h2>
      <p></p>
    </header>
    <!-- 标签页 -->
    <div>
      <el-tabs>
        <!-- 标签页一 -->
        <el-tab-pane label="基本信息">
          <h4 class="flex align-center">
            <el-icon><CollectionTag /></el-icon>基本信息
          </h4>
          <el-form class="my-1" label-width="140px">
            <el-row class="b" justify="center">
              <el-col :span="10" class="b">
                <el-form-item label="客户名称："></el-form-item>
                <el-form-item label="详细地址："></el-form-item>
                <el-form-item label="客户简称："></el-form-item>
                <el-form-item label="联系人：">
                  <ul>
                    <li>
                      <el-tag effect="plain">总经理</el-tag
                      ><span class="mx-2">张三</span>
                    </li>
                  </ul>
                </el-form-item>
              </el-col>
              <el-col :span="10" class="b">
                <el-form-item label="统一社会信用代码："></el-form-item>
                <el-form-item label="所在区域："></el-form-item>
                <el-form-item label="行业："></el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <h4 class="flex align-center">
            <el-icon><CollectionTag /></el-icon>开票信息
          </h4>
          <el-form></el-form>
        </el-tab-pane>
        <!-- 标签页二 -->
        <el-tab-pane label="匹配的产品/服务">
          <h4 class="flex align-center">
            <el-icon><CollectionTag /></el-icon>基本信息
          </h4>
          <el-form class="" label-width="140px">
            <el-row justify="center">
              <el-col :span="10" class="">
                <el-form-item label="客户名称："></el-form-item>
                <el-form-item label="详细地址："></el-form-item>
                <el-form-item label="客户简称："></el-form-item>
                <el-form-item label="联系人：">
                  <ul>
                    <li>
                      <el-tag effect="plain">总经理</el-tag
                      ><span class="mx-2">张三</span>
                    </li>
                  </ul>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="统一社会信用代码："></el-form-item>
                <el-form-item label="所在区域："></el-form-item>
                <el-form-item label="行业："></el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <!-- 标签页三 -->
        <el-tab-pane label="合同信息">
          <el-table border>
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
          </el-table>
        </el-tab-pane>
        <!-- 标签四 -->
        <el-tab-pane label="会员信息">
          <el-table border>
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
          </el-table>
        </el-tab-pane>
        <!-- 标签五 -->
        <el-tab-pane label="项目信息">
          <el-table border>
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
            <el-table-column align="center" label="标题一" />
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='scss' scoped>
</style>