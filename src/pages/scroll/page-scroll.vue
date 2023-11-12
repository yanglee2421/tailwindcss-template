<script lang="ts" setup>
// Assets Imports
import img1 from "@/assets/image/scroll/img-1.png";
import img2 from "@/assets/image/scroll/img-2.png";
import img3 from "@/assets/image/scroll/img-3.png";

// Vue Imports
import { watchPostEffect } from "vue";

watchPostEffect((clearFn) => {
  console.log("effect");

  const controller = new AbortController();
  const { signal } = controller;

  window.addEventListener("scroll", setScrollVar, { signal });
  window.addEventListener("resize", setScrollVar, { signal });
  clearFn(() => {
    controller.abort();
  });

  function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled =
      htmlElement.scrollTop / htmlElement.clientHeight;
    const v = Math.min(percentOfScreenHeightScrolled * 100, 100);
    htmlElement.style.setProperty("--scroll", String(v));
  }

  setScrollVar();

  const observer = new IntersectionObserver((entries) => {
    for (let i = entries.length - 1; i >= 0; i--) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        document.querySelectorAll("[data-img]").forEach((img) => {
          img.classList.remove("show");
        });

        if (!(entry.target instanceof HTMLElement)) return;

        const selector = entry.target.dataset.imgToShow;
        if (!selector) return;

        const img = document.querySelector(selector);
        img?.classList.add("show");
        break;
      }
    }
  });

  document.querySelectorAll("[data-img-to-show]").forEach((section) => {
    observer.observe(section);
  });
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="imgs">
    <img
      :src="img1"
      data-img
      id="img-1"
      class="top-section-img show"
    />
    <img
      :src="img2"
      data-img
      id="img-2"
    />
    <img
      :src="img3"
      data-img
      id="img-3"
    />
  </div>
  <section class="top-section full-screen-section">
    <div class="left">
      <h1>Build Better Backends</h1>
      <p>
        The only platform that gives AI the ability to autonomously build web
        services.
      </p>
    </div>
    <div class="right"></div>
  </section>
  <section class="full-screen-section first-main-section">
    <h1>Completely Visual</h1>
    <p>Never touch the command line, from provision to production.</p>
    <div data-img-to-show="#img-1"></div>
  </section>
  <section class="full-screen-section">
    <h1>Full Stack</h1>
    <p>
      Never manage infrastructure again. One click gets you: a database, APIs,
      deployments, hosting, etc.
    </p>
    <div data-img-to-show="#img-2"></div>
  </section>
  <section class="full-screen-section">
    <h1>Launch Faster</h1>
    <p>Logical can get systems to market in minutes instead of weeks.</p>
    <div data-img-to-show="#img-3"></div>
  </section>
</template>

<style lang="scss" scoped>
@use "./style.scss" as *;
</style>
