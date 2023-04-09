<script lang="ts" setup>
import { inject, reactive } from "vue";
import DrawerEdit from "./drawer-edit.vue";
import dialogComparison from "./dialog-comparison.vue";
import { Result } from "../type";

const res = inject<Result>("gpt-res")!;

const state = reactive({
  showEdit: false,
  showComparison: false,
});
</script>

<template>
  <drawer-edit v-model="state.showEdit" />
  <dialog-comparison v-model="state.showComparison" />
  <el-card
    :body-style="{ flex: '1', display: 'flex', flexDirection: 'column' }"
  >
    <template #header>
      <div class="card-header">
        <b>1111</b>
        <el-link
          @click="state.showEdit = true"
          type="primary"
          >Edit</el-link
        >
      </div>
    </template>
    <section class="card-body">
      <div>
        <el-descriptions
          :column="1"
          direction="vertical"
        >
          <el-descriptions-item>
            <template #label>
              <p class="item-label">
                <span>Title :</span>
                <el-icon><DocumentCopy /></el-icon>
              </p>
            </template>
            <p class="item-title">
              <b>{{ res.data.Title }}</b>
            </p>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <p class="item-label">
                <span>Keywords :</span>
                <el-icon><DocumentCopy /></el-icon>
              </p>
            </template>
            <p class="item-keywords">
              <b
                v-for="item in 20"
                :key="item"
                >keyword</b
              >
            </p>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <p class="item-label">
                <span>Description :</span>
                <el-icon><DocumentCopy /></el-icon>
              </p>
            </template>
            <!-- <article v-html="res.data.Description"> -->
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quibusdam rem nobis sit mollitia, commodi, inventore obcaecati,
              vel debitis magnam provident! Quibusdam officiis eligendi nisi
              commodi maxime atque dicta blanditiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error quibusdam rem nobis sit
              mollitia, commodi, inventore obcaecati, vel debitis magnam
              provident! Quibusdam officiis eligendi nisi commodi maxime atque
              dicta blanditiis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error quibusdam rem nobis sit mollitia, commodi,
              inventore obcaecati, vel debitis magnam provident! Quibusdam
              officiis eligendi nisi commodi maxime atque dicta blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quibusdam rem nobis sit mollitia, commodi, inventore obcaecati,
              vel debitis magnam provident! Quibusdam officiis eligendi nisi
              commodi maxime atque dicta blanditiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error quibusdam rem nobis sit
              mollitia, commodi, inventore obcaecati, vel debitis magnam
              provident! Quibusdam officiis eligendi nisi commodi maxime atque
              dicta blanditiis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error quibusdam rem nobis sit mollitia, commodi,
              inventore obcaecati, vel debitis magnam provident! Quibusdam
              officiis eligendi nisi commodi maxime atque dicta blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quibusdam rem nobis sit mollitia, commodi, inventore obcaecati,
              vel debitis magnam provident! Quibusdam officiis eligendi nisi
              commodi maxime atque dicta blanditiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error quibusdam rem nobis sit
              mollitia, commodi, inventore obcaecati, vel debitis magnam
              provident! Quibusdam officiis eligendi nisi commodi maxime atque
              dicta blanditiis.
            </article>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </section>
    <div class="card-footer">
      <el-link
        @click="state.showComparison = true"
        type="primary"
        >post</el-link
      >
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.el-card {
  display: flex;
  flex-direction: column;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-body {
  flex: 1;
  position: relative;
  > div {
    position: absolute;
    inset: 0;
    overflow: auto;
    overflow: overlay;
    padding-right: 1.5rem;
  }
}
.item-label {
  display: flex;
  gap: 1rem;
}
.el-icon {
  cursor: pointer;
  &:hover {
    color: $primary;
  }
}
.item-title {
  font-size: 1.2rem;
}
.item-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
