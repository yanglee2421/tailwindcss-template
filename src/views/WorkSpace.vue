<template>
  <div>
    <el-checkbox v-model="state.vis">显示</el-checkbox>
    <h4>轮播图</h4>
    <swz-code
      class="w-75"
      style="margin:0 auto"
    >
      <fw-table
        :data="[{title:111},{title:222},{title:333}]"
        :total="100"
        v-model:PageIndex="state.PageIndex"
        v-model:PageSize="state.PageSize"
        fw-index
        fw-selection
        border
        stripe
      >
        <template #form>
          <el-form-item
            v-for="item in 4"
            :key="item"
            label="输入框"
            prop="input"
          >
            <el-input />
          </el-form-item>
        </template>
        <el-table-column
          label="标题"
          prop="title"
        />
      </fw-table>
    </swz-code>
    <swz-code
      class="m-center"
      v-vis='state.vis'
    >
      <swz-swiper
        :picArr="arr"
        class="box"
      ></swz-swiper>
    </swz-code>
    <h4>轮播图V2</h4>
    <swz-code class="m-center">
      <swz-swiper-v2
        :arr="arr"
        class="box"
      ></swz-swiper-v2>
    </swz-code>
  </div>
</template>
<script lang='ts' setup>
import img01 from "@/assets/picList/1.jpg";
import img02 from "@/assets/picList/2.jpg";
import img03 from "@/assets/picList/3.jpg";
import img04 from "@/assets/picList/4.jpg";
import img05 from "@/assets/picList/5.jpg";
import { reactive } from "vue";
const arr = [img01, img02, img03, img04, img05];
const state = reactive({
  vis: false,
  PageIndex: 1,
  PageSize: 10,
});
</script>
<style lang='scss' scoped>
.hidden-code {
  position: sticky;
  bottom: 0;
}
</style>