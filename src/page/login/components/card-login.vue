<script lang="ts" setup>
import { useAuth, useUser } from "@/stores";
import { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";

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
    isRemember: true,
    pwd: "",
    user: "",
  },
  rules: {
    user: [{ required: true }],
    pwd: [{ required: true }],
  },
});

const { signIn } = useAuth();
const { validate } = useUser();
const formRef = ref<FormInstance | null>(null);
const submitHandler = () => {
  formRef.value?.validate(async (isPass) => {
    if (!isPass) return false;

    const form = formState.model;
    try {
      await validate(form);
      await signIn(
        {
          user: form.user,
          token: "788",
          expiration: Date.now() + 1000 * 60 * 60 * 24,
        },
        formState.model.isRemember
      );
    } catch {}
  });
};
</script>

<template>
  <el-card
    header="登录"
    class="card-login"
  >
    <el-form
      :ref="(e:any) => (formRef = e)"
      :model="formState.model"
      :rules="formState.rules"
    >
      <el-form-item prop="user">
        <el-input
          v-model="formState.model.user"
          maxlength="9"
          show-word-limit
          autofocus
          prefix-icon="User"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="formState.model.pwd"
          maxlength="9"
          show-word-limit
          prefix-icon="Lock"
          type="password"
          show-password
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
</template>

<style lang="scss" scoped>
.card-login {
  width: max(300px);
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
