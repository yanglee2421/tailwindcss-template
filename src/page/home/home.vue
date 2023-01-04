<template>
  <div class="h-100">
    <ly-particle>
      <div class="h-100 flex center-center">
        <el-card>
          <el-form>
            <el-form-item>
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="state.pwd"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox label="remember" />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="w-100"
                >Login</el-button
              >
            </el-form-item>
            <el-form-item>
              <p class="text-white w-100 text-center">
                <span> Or </span>
                <el-link type="danger"> resgister </el-link>
                <span> ? </span>
              </p>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </ly-particle>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  pwd: "",
});
</script>
<style lang="scss" scoped>
.el-card {
  $color: rgba(#fff, 0.2);
  border-color: $color;
  background-color: $color;
  backdrop-filter: blur(4px);
}
</style>
