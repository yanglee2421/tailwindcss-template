<template>
  <div v-track="`测试页01--directives方案`">
    <el-upload
      :http-request="uploadFn"
      :show-file-list="false"
    >
      <el-button>导入</el-button>
    </el-upload>
  </div>
</template>
<script lang="js">
export default {
  inheritAttrs: true,
  methods: {
    uploadFn({ file }) {
      const formData = new FormData();
      formData.append("file", file);
      axios({
        url: "",
        method: "post",
        data: formData,
      }).then((res) => {
        const { Code } = res;
        if (Code === 1) {
          // 刷新表格
          console.log("刷新表格");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
