<script lang="ts" setup>
import { reactive } from "vue";

const formValues = reactive({
  email: "",
  passwd: "",
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="flex h-full">
    <div class="right__col--bg"></div>

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
            >Please sign-in to your account and start the adventure.</el-text
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
                <el-text size="default">New on out platform?</el-text>
                <el-button
                  type="primary"
                  link
                  >Create an account</el-button
                >
              </div>
            </el-form-item>
          </el-form>
        </el-space>
      </div>
    </el-card>
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
.right__col--bg {
  $size: 30rem;
  width: $size;
  height: $size;
  background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  filter: blur(72px);
}
.box__signup {
  gap: 1rem;
}
</style>
