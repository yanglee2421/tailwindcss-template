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
    <div class="flex-1"></div>

    <div class="w-full md:max-w-lg">
      <el-card
        :body-style="{ height: '100%' }"
        body-class="flex justify-center items-center"
        class="h-full"
      >
        <el-space
          direction="vertical"
          fill
        >
          <el-text
            tag="h1"
            size="large"
            class="text-2xl"
            >Wellcome to Yang_Lee!</el-text
          >
          <el-text class="text-basic text-slate-400"
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
              <div class="flex justify-between w-full">
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
                class="w-full uppercase bg-none bg-blue-400"
                >sign in</el-button
              >
            </el-form-item>
          </el-form>
          <div class="flex justify-center gap-3 w-full">
            <el-text size="default">New on out platform?</el-text>
            <el-button
              type="primary"
              link
              >Create an account</el-button
            >
          </div>
          <el-divider>or</el-divider>
          <div class="flex justify-center">
            <el-button
              icon="ChromeFilled"
              size="large"
              circle
              text
            />
            <el-button
              icon="WindPower"
              size="large"
              circle
              text
            />
            <el-button
              icon="ElementPlus"
              size="large"
              circle
              text
            />
            <el-button
              icon="SwitchFilled"
              size="large"
              circle
              text
            />
          </div>
        </el-space>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right__col--bg {
  $size: 30rem;
  width: $size;
  height: $size;
  background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  filter: blur(72px);
}
</style>
