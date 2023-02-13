<script lang="ts" setup>
import { useUser } from "@/stores";
import { FormInstance, FormRules } from "element-plus";
import { ref, reactive } from "vue";

interface formState {
  rules: FormRules;
  model: {
    user: string;
    pwd: string;
    pwd2: string;
  };
}

const formState = reactive<formState>({
  model: {
    user: "",
    pwd: "",
    pwd2: "",
  },
  rules: {
    user: [{ required: true }],
    pwd: [{ required: true }],
    pwd2: [{ required: true }, { validator(rule, value, callback) {} }],
  },
});

const { register } = useUser();
const formRef = ref<FormInstance | null>(null);
const submitHandler = () => {
  formRef.value?.validate((isPass) => {
    if (!isPass) return false;
    const form = formState.model;
    register(form);
  });
};
</script>

<template>
  <el-card
    header="注册"
    class="card-register"
  >
    <el-form
      :ref="(e:any) => (formRef = e)"
      :model="formState.model"
      :rules="formState.rules"
    >
      <el-form-item prop="user">
        <ly-input
          v-model="formState.model.user"
          prefix-icon="User"
          maxlength="9"
        ></ly-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <ly-input
          v-model="formState.model.pwd"
          maxlength="9"
          prefix-icon="Lock"
          type="password"
          show-password
        ></ly-input>
      </el-form-item>
      <el-form-item prop="pwd2">
        <ly-input
          v-model="formState.model.pwd2"
          maxlength="9"
          prefix-icon="Lock"
          type="password"
          show-password
        ></ly-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="submitHandler"
          type="success"
          class="w-100"
          >Register</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
.card-register {
  width: 300px;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
