<script lang="ts" setup>
import { ElScrollbar, ElButton, ElIcon } from "element-plus";
import { TurnOff, Open, ElementPlus } from "@element-plus/icons-vue";
import * as Vue from "vue";
const state = Vue.reactive({
  collapsed: false,
  isHovered: false,
});
</script>

<template>
  <div class="flex">
    <aside
      :class="[
        'sticky top-0 z-10 h-[100dvh] transition-all',
        state.collapsed ? 'w-16' : 'w-56',
      ]"
    >
      <div
        @mouseenter="state.isHovered = true"
        @mouseleave="state.isHovered = false"
        class="relative h-full w-full transition-all hover:w-56"
      >
        <div
          class="relative box-border flex h-full w-full flex-col overflow-hidden border-0 border-r border-solid border-slate-200 bg-white"
        >
          <div class="flex overflow-hidden px-4 py-2">
            <RouterLink
              :to="{ name: 'home' }"
              class="flex"
            >
              <span>icon</span>
              <span
                v-if="state.isHovered || !state.collapsed"
                class="ml-3"
                >Title</span
              >
            </RouterLink>

            <ElButton
              v-if="state.isHovered || !state.collapsed"
              @click="state.collapsed = !state.collapsed"
              :icon="state.collapsed ? Open : TurnOff"
              circle
              size="small"
            />
          </div>
          <hr
            class="my-0 w-full border-0 border-b border-solid border-slate-200"
          />
          <ElScrollbar>
            <div>
              ipsam? Repellendus fugit animi dolorem rerum eius, perspiciatis
              maiores reprehenderit culpa accusamus ut laboriosam dolores odit
              architecto mollitia itaque, laborum non iste! Error animi,
              eligendi accusantium ipsam adipisci quidem aperiam aspernatur.
              Architecto deleniti, quis repellendus dolores facilis
              exercitationem placeat tempora quo distinctio, possimus earum
              tempore nostrum labore error similique impedit sunt. Harum
              temporibus hic ut molestias magni numquam eveniet ad totam!
              Quibusdam dolores molestias deserunt perspiciatis! In, soluta
              perferendis. Maxime molestias perspiciatis eaque suscipit
              accusantium dolor! Error aliquam dolor dolores. Aperiam maxime
              quibusdam odit. Quo vero facilis rem libero voluptas excepturi.
              Odit corporis delectus nemo, excepturi tempora quod necessitatibus
              vero, maiores dicta, dolore harum repudiandae in distinctio
              voluptate soluta nihil provident natus maxime temporibus vitae
              ducimus id. Dolorum repellendus voluptate aliquid. Error et earum
              esse consectetur hic necessitatibus? Molestias libero eligendi
              error maxime! In cumque dignissimos enim laborum, expedita
              sapiente doloribus voluptatum quidem maiores mollitia, odio eum
              magni aspernatur adipisci recusandae? Ducimus ex aliquam vitae!
              Odio quos iste, assumenda repellat nulla iusto optio consectetur
              commodi facere nesciunt, necessitatibus, ipsa porro repellendus
              incidunt laboriosam aspernatur tempore debitis? Dicta placeat
              assumenda quaerat rerum? Voluptates ipsa ex quisquam natus soluta,
              voluptatem repudiandae modi laudantium atque impedit quo voluptate
              quia, placeat cupiditate, officiis quidem incidunt voluptatibus
              aspernatur rem suscipit tenetur veritatis. Delectus sed quibusdam
              nihil? Nesciunt aspernatur accusantium temporibus excepturi rerum,
              mollitia velit accusamus nostrum eligendi a suscipit. Recusandae
              officiis maxime sit, saepe deserunt eos sequi, assumenda nostrum
              tempore optio autem cumque, aperiam ullam esse! Nesciunt quo nobis
              asperiores corporis numquam? Cumque, fugit aut quibusdam nobis ex
              reprehenderit inventore obcaecati incidunt tempora totam eum nam
              non! Sit enim magnam neque. Expedita ab voluptate reprehenderit
              harum. Laudantium mollitia autem tempore inventore accusamus fugit
              eveniet praesentium ipsam, impedit nisi vel blanditiis eius libero
              recusandae aut, rem ad unde veniam, nostrum harum? Minus eius modi
              reprehenderit nisi earum. Numquam quibusdam quos odio veniam, quia
              saepe ut architecto sint animi eveniet dicta sunt dolorem nesciunt
              labore praesentium incidunt provident illo ipsam dolores atque
              reprehenderit soluta minus non nobis! Omnis! Aliquid incidunt in
              accusamus ipsa laborum itaque ex nemo dolores qui dolor numquam at
              ipsum id cum assumenda magni, voluptatibus consequuntur?
              Consectetur tempore harum eaque aut quis assumenda esse quas. Quis
              accusantium voluptatibus corrupti culpa architecto eius est
              perferendis ducimus tempora deserunt unde repellat nulla, iusto
              tenetur? Temporibus, rerum? Illo consequatur non eos ipsa nobis et
              dolorum? Eos, natus! Et?
            </div>
          </ElScrollbar>
        </div>
      </div>
    </aside>
    <div class="flex-auto">
      <header></header>
      <main>
        <RouterView #default="{ Component }">
          <component :is="Component"></component>
        </RouterView>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
