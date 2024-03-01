<script setup lang="ts">
import * as Vue from "vue";
import AutonoHome from "./AutonoHome.vue";
import AutonoTechnology from "./AutonoTechnology.vue";
import AutonoAbout from "./AutonoAbout.vue";
import AutonoCareers from "./AutonoCareers.vue";
import { ElRadioGroup, ElRadio } from "element-plus";

import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

const state = Vue.reactive({
  tab: "home",
});
</script>

<template>
  <div class="px-6 py-2">
    <ElRadioGroup v-model="state.tab">
      <ElRadio label="home">Home</ElRadio>
      <ElRadio label="technology">Technology</ElRadio>
      <ElRadio label="about">About</ElRadio>
      <ElRadio label="careers">Careers</ElRadio>
    </ElRadioGroup>
  </div>
  <div>
    <TransitionGroup name="fade">
      <div
        v-if="state.tab === 'home'"
        key="home"
      >
        <AutonoHome></AutonoHome>
      </div>
      <div
        v-if="state.tab === 'technology'"
        key="technology"
      >
        <AutonoTechnology></AutonoTechnology>
      </div>
      <div
        v-if="state.tab === 'about'"
        key="about"
      >
        <AutonoAbout></AutonoAbout>
      </div>
      <div
        v-if="state.tab === 'careers'"
        key="careers"
      >
        <AutonoCareers></AutonoCareers>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
  transition-property: transform opacity;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(1.05);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
:deep(*) {
  font-family: "Montserrat", sans-serif;
}
</style>
