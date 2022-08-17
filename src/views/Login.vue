<template>
  <div>
    <el-card class="m-center mt-3">
      <el-form
        :model="formData"
        :ref="el=>formRef=el"
        :rules="rules"
      >
        <el-form-item
          label="用户名："
          prop="userName"
        >
          <el-input v-model.trim="formData.userName" />
        </el-form-item>
        <el-form-item
          label="密码："
          prop="pwd"
        >
          <el-input
            v-model.trim="formData.pwd"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <div class="w-100 flex center-center">
            <el-button type="success">注册</el-button>
            <el-button
              @click="login()"
              type="primary"
            >登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const formData = reactive({
  userName: "",
  pwd: "",
});
const rules = reactive({
  userName: [{ required: true, message: "不得为空", trigger: "blur" }],
  pwd: [{ required: true, message: "不得为空", trigger: "blur" }],
});
const formRef = ref();
const login = () => {
  formRef.value.validate((vali: boolean) => {
    if (vali) {
      const res = JSON.stringify(formData);
      localStorage.setItem("token", res);
      router.replace("/");
    } else {
      return false;
    }
  });
};
</script>
<style lang='scss' scoped>
</style>