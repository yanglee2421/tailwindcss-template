<script lang="ts" setup>
import { useAuth } from "@/stores";
import { reactive, ref } from "vue";
import { ElMessage, FormInstance, FormRules } from "element-plus";

const { actLogin } = useAuth();
interface formState {
  model: {
    isRemember: boolean;
    pwd: string;
    user: string;
  };
  rules: FormRules;
}
const formState = reactive<formState>({
  model: {
    isRemember: false,
    pwd: "",
    user: "",
  },
  rules: {
    user: [{ required: true }],
    pwd: [{ required: true }],
  },
});
const formRef = ref<FormInstance | null>(null);
const submitHandler = () => {
  formRef.value?.validate((isPass) => {
    if (!isPass) return false;

    const form = formState.model;
    const userArr = [
      { user: "123456", pwd: "123456" },
      { user: "admin", pwd: "admin" },
    ];
    try {
      const user = userArr.find((user) => user.user === form.user);
      if (!user) throw new Error();
      if (form.pwd !== user.pwd) throw new Error();
    } catch {
      ElMessage.warning("用户名或密码不正确");
      return;
    }

    actLogin(
      {
        user: form.user,
        token: "788",
        expiration: Date.now() + 1000 * 60 * 30,
      },
      formState.model.isRemember
    );
  });
};
</script>
<template>
  <div class="box">
    <el-card header="没登录你上尼玛的网">
      <el-form
        :ref="(e:any) => (formRef = e)"
        :model="formState.model"
        :rules="formState.rules"
      >
        <el-form-item prop="user">
          <el-input
            v-model="formState.model.user"
            prefix-icon="User"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            v-model="formState.model.pwd"
            prefix-icon="Lock"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="isRemember">
          <el-checkbox v-model="formState.model.isRemember">记住我</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="submitHandler"
            type="success"
            class="w-100"
          >
            Login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.box {
  @extend .h-100h, .flex, .center-center;
  @include bgc-img;
  background-image: url("@/assets/image/bg/bg.jpg");
  > * {
    transform: translate(0, -5%);
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
