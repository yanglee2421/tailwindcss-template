<template>
  <div class="div-bg h-100 flex center-center clearfix">
    <el-card class="m-center">
      <el-form
        :model="formData"
        :ref="el=>formRef=el"
        :rules="rules"
      >
        <el-form-item prop="userName">
          <el-input
            v-model.trim="formData.userName"
            maxlength="20"
            prefix-icon="User"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            v-model.trim="formData.pwd"
            maxlength="20"
            type="password"
            prefix-icon="Lock"
            placeholder="密码"
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
.div-bg {
  background-image: url("@/assets/bg.jpg");
  // 相对于视口固定
  background-attachment: fixed;
  background-size: cover;
}
.el-card {
  border: 0;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}
</style>