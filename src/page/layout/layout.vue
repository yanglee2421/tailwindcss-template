<script lang="ts" setup>
import { reactive } from "vue";
import { useResize } from "@/hooks";
import { useAuth } from "@/stores";
import { useRoute } from "vue-router";
import avatar from "@/assets/image/avatar/vergil.jpg";

const state = reactive({
  isCollMenu: true,
  isDrawer: false,
  isAside: true,
  search: "",
});

let timer: number | NodeJS.Timer = 0;
const resizeRef = useResize(({ width }) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    state.isCollMenu = width < 1200;
    state.isAside = width > 500;
  }, 500);
});

const { signOut } = useAuth();
const route = useRoute();
</script>
<template>
  <el-container
    :ref="(e:any) => (resizeRef = e)"
    class="box h-100h"
  >
    <el-header class="box-header flex between-center shadow">
      <el-icon
        @click="state.isDrawer = true"
        size="24"
        class="menu-icon"
        ><Operation
      /></el-icon>
      <div>
        <el-input
          v-model.trim="state.search"
          maxlength="9"
          show-word-limit
          prefix-icon="Search"
        >
          <template #append>
            <el-button>Go</el-button>
          </template>
        </el-input>
      </div>
      <el-avatar
        :size="50"
        :src="avatar"
      />
    </el-header>
    <el-container class="overflow-auto">
      <el-aside
        v-show="state.isAside"
        width="auto"
      >
        <el-menu
          router
          :default-active="route.name"
          :collapse="state.isCollMenu"
          class="h-100"
        >
          <el-menu-item
            index="home"
            :route="{ name: 'home' }"
          >
            <el-icon size="24"><HomeFilled /></el-icon>
            <template #title>首页</template>
          </el-menu-item>
          <el-sub-menu index="animation">
            <template #title>
              <el-icon size="24"><VideoCameraFilled /></el-icon>
              <span>动效</span>
            </template>
            <el-menu-item
              index="snow"
              :route="{ name: 'snow' }"
              >雪飘</el-menu-item
            >
            <el-menu-item
              index="particle"
              :route="{ name: 'particle' }"
              >粒子</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="3">
            <el-icon size="24"><PictureFilled /></el-icon>
            <template #title>画廊</template>
          </el-menu-item>
          <el-menu-item
            index="demo"
            :route="{ name: 'demo' }"
          >
            <el-icon size="24"><ChromeFilled /></el-icon>
            <template #title>Demo</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view #default="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
    <el-footer
      v-show="!state.isAside"
      class="shadow"
    >
      <el-menu
        mode="horizontal"
        class="h-100 flex between-center"
      >
        <el-menu-item index="home">
          <el-icon size="24"><HomeFilled /></el-icon>
        </el-menu-item>
        <el-menu-item index="chrome">
          <el-icon size="24"><ChromeFilled /></el-icon>
        </el-menu-item>
        <el-menu-item index="switch">
          <el-icon size="24"><SwitchFilled /></el-icon>
        </el-menu-item>
      </el-menu>
    </el-footer>
  </el-container>
  <el-drawer
    v-model="state.isDrawer"
    title="I am the title"
    direction="ltr"
  >
    <el-button @click="signOut()">Sign Out</el-button>
    <router-link to="/table">
      <el-button>table</el-button>
    </router-link>
  </el-drawer>
</template>
<style lang="scss" scoped>
.menu-icon {
  cursor: pointer;
  &:hover {
    color: $primary;
  }
}
.box-header {
  position: relative;
  z-index: 1;
}
a {
  text-decoration: none;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
