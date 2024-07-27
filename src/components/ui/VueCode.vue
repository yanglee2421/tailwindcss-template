<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import { codeToHtml } from "shiki";
import ScrollView from "./ScrollView.vue";

const props = defineProps<{
  code: string;
}>();

const query = useQuery({
  queryKey: ["shiki", props.code],
  queryFn() {
    return codeToHtml(props.code, {
      lang: "vue",
      theme: "dark-plus",
    });
  },
});
</script>

<template>
  <ScrollView>
    <div v-if="query.isPending.value">loading...</div>
    <div
      v-else-if="query.isError.value"
      class="text-red-500"
    >
      {{ query.error.value?.message }}
    </div>
    <div
      v-else
      v-html="query.data.value"
    ></div>
  </ScrollView>
</template>

<style lang="scss" scoped></style>
