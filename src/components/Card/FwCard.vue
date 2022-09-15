<template>
  <el-card>
    <div class="flex center-center text-info">
      <el-icon
        v-if="firstIcon"
        :size="100"
      >
        <Printer />
      </el-icon>
      <el-icon
        v-else
        :size="100"
      >
        <TakeawayBox />
      </el-icon>
    </div>
    <div class="card-text">
      <h2 class="pb-2">发网云采购</h2>
      <p>
        发网云平台客户端，是集成于打印机、电子称、视频录制、网络设备、自动扫描设备等功能的终端工具。发网云平台客户端，是集成于打印机、电子称、视频录制、网络设备、自动扫描设备等功能的终端工具。发网云平台客户端，是集成于打印机、电子称、视频录制、网络设备、自动扫描设备等功能的终端工具。
      </p>
    </div>
    <div
      class="soft-item"
      v-for="item in 3"
      :key="item"
    >
      <div
        class="img-list"
        :class="[item % 2 === 0 ? 'qrcode' : 'link']"
      >
        <img :src="icon" />
        <img :src="logo" />
      </div>
      <div class="img-qrcode border"><img :src="logo" /></div>
      <p class="text-info">软件名称ta ta ta 工工工式工工工工工工工工工工</p>
    </div>
  </el-card>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";
interface _props {
  firstIcon?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  firstIcon: true,
});
</script>
<style lang="scss" scoped>
.el-card {
  @include m-center;
  overflow: visible;
}
:deep(.el-card__body) {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, minmax(0, 1fr));
  width: 400px;
  height: 320px;
  background-image: url("@/assets/card-bg.png");
  background-size: 420px 340px;
  background-position: -10px -10px;
}
.card-text {
  grid-column: span 2 / -1;
  grid-row: 1 / span 1;
  padding: 10px 10px 10px calc(10px + 1ch);
  overflow: hidden;
  p {
    color: #606266;
    font-size: 15px;
    line-height: 1.5;
    // 限制最多三行
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.soft-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 10px;
  .img-list {
    width: 81px;
    height: 81px;
    margin-bottom: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #f1f7ff;
      transform: translateY(-100%);
    }
    // 类型为下载链接时
    &.link {
      img {
        transition: 0.5s;
        will-change: transform;
      }
      &:hover {
        img {
          transform: translateY(0);
        }
      }
    }
    // 类型为二维码时
    &.qrcode {
      &:hover {
        & + .img-qrcode {
          display: block;
        }
      }
    }
  }
  .img-qrcode {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    height: 200px;
    padding: 10px;
    transform: translate(-100%);
    display: none;
    background-color: #fff;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  // 下载类型为链接时

  // 下载类型为二维码时
  &.qrcode {
    &:hover {
      .img-qrcode {
        display: block;
      }
    }
  }
  P {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
