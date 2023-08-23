<script lang="ts" setup>
import { reactive } from "vue";

const formValues = reactive({
  email: "",
  passwd: "",
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="page">
    <el-row :gutter="16">
      <el-col
        :xs="24"
        :md="12"
        :lg="16"
        :xl="20"
      >
        <el-image
          src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          class="h-100"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :md="12"
        :lg="8"
        :xl="4"
      >
        <el-card :body-style="{ height: '100%' }">
          <div class="flex center-center h-100">
            <el-space
              direction="vertical"
              fill
            >
              <el-text
                tag="h1"
                size="large"
                >Hello World!</el-text
              >
              <el-text
                >Please sign-in to your account and start the
                adventure.</el-text
              >
              <el-form
                label-position="top"
                size="large"
                class="mt-1"
              >
                <el-form-item
                  label="Email"
                  name="email"
                >
                  <el-input
                    v-model.trim="formValues.email"
                    type="email"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  label="Password"
                  name="passwd"
                >
                  <el-input
                    v-model.trim="formValues.passwd"
                    type="password"
                    show-password
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="flex between-center w-100">
                    <el-checkbox>Remember Me</el-checkbox>
                    <el-button
                      type="primary"
                      link
                      >Forgot Password?</el-button
                    >
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    class="w-100"
                    >Submit</el-button
                  >
                </el-form-item>
                <el-divider>or</el-divider>
                <el-form-item>
                  <div class="flex center-center w-100 box__signup">
                    <el-text>New on out platform?</el-text>
                    <el-button
                      type="primary"
                      link
                      class="link__signup"
                      >Sign up</el-button
                    >
                  </div>
                </el-form-item>
              </el-form>
            </el-space>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.el-row {
  height: 100%;
}
.el-card {
  height: 100%;
}
h1.el-text {
  font-size: 1.5rem;
}
.page {
  height: 100%;
  padding: 8px;
}
.link__signup {
  font-size: 1rem;
}
.box__signup {
  gap: 1rem;
}
</style>
