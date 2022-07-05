<template>
  <div>
    <Snake></Snake>
    <div class="123" id="123" v-for="item in 10" :key="10" disabled>
    </div>
    <el-input />
  </div>
</template>

<script lang="ts" setup>
import Snake from "@/views/Snake.vue";
import { reactive, ref } from "vue";
</script>

<style lang="scss">
</style>
