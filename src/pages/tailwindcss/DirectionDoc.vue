<script lang="ts" setup></script>

<template>
  <div
    class="mx-auto grid max-w-lg grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2"
  >
    <div dir="ltr">
      <p class="mb-4 text-sm font-medium">Left-to-right</p>
      <div class="group flex items-center">
        <img
          class="h-12 w-12 shrink-0 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
        <div class="ml-3 rtl:ml-0 rtl:mr-3">
          <p
            class="text-sm font-medium text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white"
          >
            Tom Cook
          </p>
          <p
            class="text-sm font-medium text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"
          >
            Director of Operations
          </p>
        </div>
      </div>
    </div>
    <div dir="rtl">
      <p class="mb-4 text-sm font-medium">Right-to-left</p>
      <div class="group flex items-center">
        <img
          class="h-12 w-12 shrink-0 rounded-full"
          src="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
          alt=""
        />
        <div class="ml-3 rtl:ml-0 rtl:mr-3">
          <p
            class="text-sm font-medium text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white"
          >
            تامر كرم
          </p>
          <p
            class="text-sm font-medium text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"
          >
            الرئيس التنفيذي
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
