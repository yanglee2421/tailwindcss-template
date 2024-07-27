<script lang="ts" setup></script>

<template>
  <fieldset class="max-w-md bg-white p-8 text-sm shadow">
    <div class="mb-6 border-b border-slate-200 pb-2 text-base font-semibold">
      Published status
    </div>
    <input
      id="draft"
      class="peer/draft form-radio mb-0.5 mr-2 border-slate-300 text-sky-400 focus:ring-sky-300"
      type="radio"
      name="status"
      checked
    /><label
      class="font-medium peer-checked/draft:text-sky-500"
      for="draft"
      >Draft</label
    >
    <input
      id="published"
      class="peer/published form-radio mb-0.5 ml-4 mr-2 border-slate-300 text-sky-400 focus:ring-sky-300"
      type="radio"
      name="status"
    /><label
      class="font-medium peer-checked/published:text-sky-500"
      for="published"
      >Published</label
    >
    <div class="mt-4 hidden text-gray-500 peer-checked/draft:block">
      Drafts are only visible to administrators.
    </div>
    <div class="mt-4 hidden text-gray-500 peer-checked/published:block">
      Your post will be publicly visible on your site.
    </div>
  </fieldset>
</template>

<style lang="scss" scoped></style>
