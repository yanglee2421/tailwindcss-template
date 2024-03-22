<script lang="ts" setup>
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/oswald/200.css";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import { ElRadioGroup, ElRadio } from "element-plus";
import * as Vue from "vue";
import PageOne from "./PageOne.vue";
import PageThree from "./PageThree.vue";
import PageTwo from "./PageTwo.vue";
import PageFour from "./PageFour.vue";

const state = Vue.reactive({
  radio: "one",
});
</script>

<template>
  <div class="font-['Open_Sans']">
    <div>
      <ElRadioGroup v-model="state.radio">
        <ElRadio value="one">one</ElRadio>
        <ElRadio value="two">two</ElRadio>
        <ElRadio value="three">three</ElRadio>
        <ElRadio value="four">four</ElRadio>
      </ElRadioGroup>
    </div>
    <div class="container mx-auto grid grid-cols-4 gap-4">
      <div class="col-span-3">
        <PageOne v-if="state.radio === 'one'" />
        <PageTwo v-if="state.radio === 'two'" />
        <PageThree v-if="state.radio === 'three'" />
        <PageFour v-if="state.radio === 'four'" />
      </div>
      <div class="col-span-1">
        <p>We’ll respond to your request within 1 business day.</p>
        <p>
          <a
            href="#"
            class="flex items-center justify-center rounded bg-green-500 text-center !text-white no-underline transition-colors hover:bg-green-700"
          >
            <span class="flex-grow p-3 text-sm font-semibold">
              View AS568 Size Chart
            </span>
            <span
              class="flex flex-shrink-0 flex-grow-0 items-center border-0 border-l border-solid border-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 304 448"
                width="13"
                height="20"
                fill="currentColor"
              >
                <path
                  d="M276.75 219.25l-185.5 185.5a15.844 15.844 0 0 1-22.5 0l-41.5-41.5a15.844 15.844 0 0 1 0-22.5L160 208 27.25 75.25a15.844 15.844 0 0 1 0-22.5l41.5-41.5a15.844 15.844 0 0 1 22.5 0l185.5 185.5a15.844 15.844 0 0 1 0 22.5z"
                ></path>
              </svg>
            </span>
          </a>
        </p>
        <hr />
        <div class="space-y-12">
          <a
            href="#"
            class="flex items-center justify-center rounded bg-green-500 text-center !text-white no-underline transition-colors hover:bg-green-700"
          >
            <span class="flex-grow p-3 text-sm font-semibold">
              View AS568 Size Chart
            </span>
            <span
              class="flex flex-shrink-0 flex-grow-0 items-center border-0 border-l border-solid border-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 304 448"
                width="13"
                height="20"
                fill="currentColor"
              >
                <path
                  d="M276.75 219.25l-185.5 185.5a15.844 15.844 0 0 1-22.5 0l-41.5-41.5a15.844 15.844 0 0 1 0-22.5L160 208 27.25 75.25a15.844 15.844 0 0 1 0-22.5l41.5-41.5a15.844 15.844 0 0 1 22.5 0l185.5 185.5a15.844 15.844 0 0 1 0 22.5z"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="#"
            class="flex items-center justify-center rounded bg-green-500 text-center !text-white no-underline transition-colors hover:bg-green-700"
          >
            <span class="flex-grow p-3 text-sm font-semibold">
              O-RINGS QUICK SEARCH
            </span>
            <span
              class="flex flex-shrink-0 flex-grow-0 items-center border-0 border-l border-solid border-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 432L361.757 281.757C375.949 254.969 384 224.427 384 192 384 85.961 298.039 0 192 0S0 85.961 0 192s85.961 192 192 192c32.427 0 62.969-8.051 89.757-22.243L432 512l80-80zM64 192c0-70.692 57.308-128 128-128s128 57.308 128 128-57.308 128-128 128S64 262.692 64 192z"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="#"
            class="flex items-center justify-center rounded bg-green-500 text-center !text-white no-underline transition-colors hover:bg-green-700"
          >
            <span class="flex-grow p-3 text-sm font-semibold">
              OIL SEALS QUICK SEARCH
            </span>
            <span
              class="flex flex-shrink-0 flex-grow-0 items-center border-0 border-l border-solid border-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 432L361.757 281.757C375.949 254.969 384 224.427 384 192 384 85.961 298.039 0 192 0S0 85.961 0 192s85.961 192 192 192c32.427 0 62.969-8.051 89.757-22.243L432 512l80-80zM64 192c0-70.692 57.308-128 128-128s128 57.308 128 128-57.308 128-128 128S64 262.692 64 192z"
                ></path>
              </svg>
            </span>
          </a>
        </div>

        <hr />
        <ul class="list-none pl-0">
          <li>
            <a
              href="#"
              class="text-green-500 no-underline hover:text-green-700 hover:underline"
              >My Account</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-green-500 no-underline hover:text-green-700 hover:underline"
              >My Orders</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-green-500 no-underline hover:text-green-700 hover:underline"
              >Checkout</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-green-500 no-underline hover:text-green-700 hover:underline"
              >Terms & Conditions</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
