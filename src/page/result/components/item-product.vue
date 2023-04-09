<script lang="ts" setup>
import { inject, reactive } from "vue";

const form = inject<any>("gpt-form");

const state = reactive({
  showDialog: false,
});
</script>

<template>
  <el-form-item label-width="0">
    <div class="flex-1">
      <div class="item-product">
        <el-empty :image-size="120"></el-empty>
        <el-link
          @click="state.showDialog = true"
          type="primary"
          >Select an existing product</el-link
        >
      </div>
    </div>
  </el-form-item>
  <el-dialog
    v-model="state.showDialog"
    width="80vw"
    top="50px"
    append-to-body
  >
    <div class="dlg-box">
      <aside class="left">
        <el-tree></el-tree>
      </aside>
      <div class="right">
        <el-form inline>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>reset</el-button>
            <el-button type="primary">submit</el-button>
          </el-form-item>
        </el-form>
        <section class="right-grid">
          <div class="item-grid">
            <el-card
              v-for="item in 20"
              :key="item"
              :body-style="{ padding: '0px' }"
            >
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                  <time class="time">{{ new Date().toLocaleString() }}</time>
                  <el-button
                    text
                    class="button"
                    >Operating</el-button
                  >
                </div>
              </div>
            </el-card>
          </div>
        </section>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.item-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dlg-box {
  display: flex;
  gap: 1rem;
}
.left,
.right {
  max-height: 70vh;
}
.left {
  flex-basis: 15rem;
  padding-right: 1.5rem;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.right-grid {
  flex: 1;
  overflow: auto;
  overflow: overlay;
  padding-right: 1.5rem;
}
.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 0.5rem;
}
.el-empty {
  padding: 0;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
