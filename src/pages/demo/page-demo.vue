<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="p-2">
    <el-row :gutter="16">
      <el-col
        v-for="item in 4"
        :key="item"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="4"
      >
        <label
          class="flex flex-col items-center h-84 p-4 border border-solid cursor-pointer text-center"
        >
          <el-avatar size="large">Y</el-avatar>
          <p class="mt-3 font-medium">Visual Search</p>
          <p class="mt-1 mb-auto overflow-hidden max-h-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            maiores doloribus dicta est error recusandae eum labore minus sequi,
            iusto repudiandae ab debitis maxime ipsum, aspernatur veritatis
            distinctio eius ad.
          </p>
          <el-radio size="large"></el-radio>
        </label>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
