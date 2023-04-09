<script lang="ts" setup>
import { inject } from "vue";
import { Result, formData } from "../type";

const form = inject<formData>("gpt-form")!;
const res = inject<Result>("gpt-res")!;
</script>

<template>
  <el-dialog
    title="Comparison"
    width="80vw"
    top="50px"
    append-to-body
  >
    <div class="box">
      <el-descriptions
        :column="1"
        direction="vertical"
      >
        <el-descriptions-item label="Title">
          <p class="item-title">
            <b>{{ form.Product?.Title }}</b>
          </p>
        </el-descriptions-item>
        <el-descriptions-item label="Keywords">
          <p class="item-keywords">
            <b
              v-for="item in form.Product?.Keywords"
              :key="item"
              >{{ item }}</b
            >
          </p>
        </el-descriptions-item>
        <el-descriptions-item label="Description">
          <article v-html="form.Product?.Description"></article>
        </el-descriptions-item>
      </el-descriptions>
      <div class="center-divider"></div>
      <el-descriptions
        :column="1"
        direction="vertical"
      >
        <el-descriptions-item label="Title">
          <el-badge>
            <p class="item-title">
              <b>{{ res.data.Title }}</b>
            </p>
          </el-badge>
        </el-descriptions-item>
        <el-descriptions-item label="Keywords">
          <p class="item-keywords">
            <b
              v-for="item in res.data.Keywords"
              :key="item"
              >{{ item }}</b
            >
          </p>
        </el-descriptions-item>
        <el-descriptions-item label="Description">
          <!-- <article v-html="res.data.Description"> -->
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quibusdam rem nobis sit mollitia, commodi, inventore obcaecati, vel
            debitis magnam provident! Quibusdam officiis eligendi nisi commodi
            maxime atque dicta blanditiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error quibusdam rem nobis sit
            mollitia, commodi, inventore obcaecati, vel debitis magnam
            provident! Quibusdam officiis eligendi nisi commodi maxime atque
            dicta blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Error quibusdam rem nobis sit mollitia, commodi, inventore
            obcaecati, vel debitis magnam provident! Quibusdam officiis eligendi
            nisi commodi maxime atque dicta blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Error quibusdam rem nobis sit
            mollitia, commodi, inventore obcaecati, vel debitis magnam
            provident! Quibusdam officiis eligendi nisi commodi maxime atque
            dicta blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Error quibusdam rem nobis sit mollitia, commodi, inventore
            obcaecati, vel debitis magnam provident! Quibusdam officiis eligendi
            nisi commodi maxime atque dicta blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Error quibusdam rem nobis sit
            mollitia, commodi, inventore obcaecati, vel debitis magnam
            provident! Quibusdam officiis eligendi nisi commodi maxime atque
            dicta blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Error quibusdam rem nobis sit mollitia, commodi, inventore
            obcaecati, vel debitis magnam provident! Quibusdam officiis eligendi
            nisi commodi maxime atque dicta blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Error quibusdam rem nobis sit
            mollitia, commodi, inventore obcaecati, vel debitis magnam
            provident! Quibusdam officiis eligendi nisi commodi maxime atque
            dicta blanditiis.
          </article>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.box {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  max-height: 70vh;
  padding-inline: 1.5rem;
  overflow: auto;
  overflow: overlay;
}
.item-title {
  font-size: 1.2rem;
}
.item-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.center-divider {
  width: 1px;
  background-color: $primary;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
