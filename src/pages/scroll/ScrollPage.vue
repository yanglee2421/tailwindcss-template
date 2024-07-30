<script lang="ts" setup>
import * as Vue from "vue";
import { RouterLink } from "vue-router";
import img1png from "@/assets/image/scroll/img-1.png";
import img2png from "@/assets/image/scroll/img-2.png";
import img3png from "@/assets/image/scroll/img-3.png";

const img1 = new URL(img1png, import.meta.url).href;
const img2 = new URL(img2png, import.meta.url).href;
const img3 = new URL(img3png, import.meta.url).href;

Vue.watchPostEffect((clearFn) => {
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
      id="img-1"
      :src="img1"
      data-img
      class="top-section-img show"
    />
    <img
      id="img-2"
      :src="img2"
      data-img
    />
    <img
      id="img-3"
      :src="img3"
      data-img
    />
  </div>
  <section class="top-section full-screen-section">
    <div class="left">
      <h1>Build Better Backends</h1>
      <p>
        The only platform that gives AI the ability to autonomously build web
        services.
      </p>
      <div class="mt-6">
        <RouterLink
          :to="{ name: 'home' }"
          class="rounded bg-blue-500 px-5 py-2 capitalize text-white hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 active:bg-blue-700 disabled:bg-blue-400 disabled:text-slate-50"
          >get started</RouterLink
        >
      </div>
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
*,
*::before,
*::after {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  color: #141616;
  background-color: #e6e9ea;
  font-size: 28px;
}

h1 {
  font-size: 110px;
  margin-bottom: 1rem;
}

.full-screen-section {
  height: 100vh;
  text-align: center;
  padding: 1rem;
  position: relative;
}

.top-section .left,
.top-section .right {
  flex-basis: 0;
  flex-grow: 1;
  padding: 1rem;
  padding-left: 3rem;
}

.top-section {
  display: flex;
  text-align: start;
  padding: 0;
}

.top-section .left {
  background-color: rgb(248, 250, 249, var(--background-opacity));
}

.top-section .right {
  background: linear-gradient(
    210.65deg,
    rgb(152, 157, 157, var(--background-opacity)) 0%,
    rgb(189, 194, 194, var(--background-opacity)) 100%
  );
}

.imgs > .top-section-img {
  /* (oldVal - oldMin) * newRange / oldRange + newMin */
  --value: min(var(--scroll), 30) * 50 / 30;
  width: calc(50vw + 1vw * var(--value));
  transform: translateY(calc(50% - 1% * var(--value)));
}

@media (width <= 1000px) {
  .top-section .right {
    display: none;
  }

  .top-section .left {
    text-align: center;
  }

  body {
    font-size: 24px;
  }

  h1 {
    font-size: 72px;
  }

  .imgs > .top-section-img {
    width: 100vw;
  }
}

:global(:root) {
  --scroll: 0;
}

.top-section {
  position: sticky;
  top: 0;
  /* (oldVal - oldMin) * newRange / oldRange + newMin */
  translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / 75);
  --background-opacity: calc(100% - 1% * min(var(--scroll), 30) * 100 / 30);
}

.first-main-section {
  padding-top: 10vh;
}

.imgs > * {
  position: fixed;
  width: 100vw;
  bottom: 0;
  z-index: 10;
  translate: 0 100%;
  transition: translate 250ms ease-in-out;
}

.imgs > .show {
  translate: 0 0;
}

[data-img-to-show] {
  position: absolute;
  top: 20%;
}
</style>
