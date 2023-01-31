<script lang="ts" setup>
import { reactive } from "vue";
import { useResize, useAuth } from "@/hook";
import avatar from "@/assets/image/avatar.jpg";

const state = reactive({
  isCollMenu: true,
  isDrawer: false,
  isAside: true,
  search: "",
});
const resizeRef = useResize(({ width }) => {
  state.isCollMenu = width < 1200;
  state.isAside = width > 500;
});

const { actSignUp } = useAuth();
</script>
<template>
  <el-container
    :ref="(e:any) => (resizeRef = e)"
    class="box"
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
          v-model="state.search"
          prefix-icon="Search"
          type="search"
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
          default-active="2"
          :collapse="state.isCollMenu"
          class="h-100"
        >
          <el-menu-item index="1">
            <el-icon size="24"><HomeFilled /></el-icon>
            <template #title>首页</template>
          </el-menu-item>
          <el-sub-menu index="animation">
            <template #title>
              <el-icon size="24"><VideoCameraFilled /></el-icon>
              <span>动效</span>
            </template>
            <el-menu-item :route="{ name: 'demo' }">雪飘</el-menu-item>
            <el-menu-item :route="{ name: 'particle' }">粒子</el-menu-item>
          </el-sub-menu>
          <el-menu-item
            index="3"
            title="454"
          >
            <el-icon size="24"><PictureFilled /></el-icon>
            <template #title>画廊</template>
          </el-menu-item>
          <el-menu-item
            index="3"
            title="454"
          >
            <el-icon size="24"><ChromeFilled /></el-icon>
            <template #title>浏览</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
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
    <span>Hi, there!</span>
    <el-button @click="actSignUp()">Sign Out</el-button>
  </el-drawer>
</template>
<style lang="scss" scoped>
.box {
  height: 100vh;
}
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
</style>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
