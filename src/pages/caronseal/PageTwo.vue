<script lang="ts" setup></script>

<template>
  <a
    href="#"
    class="text-green-500 no-underline hover:text-green-700 hover:underline"
  >
    <strong>submit a contact form</strong>
  </a>
  <p>
    O-Rings, Oil Seals, and related sealing products are used in a multitude of
    industries in the US and around the world. You are sure to find the right
    product for your application and industry because we carry an extensive
    inventory of
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
      ><strong>O-Rings</strong></a
    >,
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
    >
      <strong>O-Ring Cord Stock</strong> </a
    >,
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
    >
      <strong>O-Ring Assortment & Splice Kits</strong>
    </a>
    ,
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
    >
      <strong>Spliced and Hot-Vulcanized O-Rings</strong> </a
    >,
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
    >
      <strong>Oil Seals</strong>
    </a>
    ,
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
    >
      <strong>Hydraulic and Pneumatic Seals</strong> </a
    >, and other sealing products. Below, you will find the different industries
    we serve, each with dedicated pages and recommended sealing products for
    their respective sectors.
  </p>
  <hr />
  <p class="text-center">
    To see how we can fit in your industry, give us a call at 832-448-5550 or
    <a
      href="#"
      class="text-green-500 no-underline hover:text-green-700 hover:underline"
    >
      <strong>submit a contact form</strong> </a
    >.
  </p>
  <hr />
  <div class="grid grid-cols-1 gap-x-8 md:grid-cols-3">
    <div
      v-for="item in 12"
      :key="item"
      class="text-center"
    >
      <h2>
        <a
          href="#"
          class="!text-3xl text-green-500 no-underline hover:text-green-700 hover:underline"
          >Oil & Gas</a
        >
      </h2>
      <p>
        <a href="#">
          <img
            src="https://www.globaloring.com/wp-content/uploads/2020/01/refinery-industry.jpg"
            alt=""
            width="250"
            height="250"
          />
        </a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
