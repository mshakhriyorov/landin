<template>
  <div class="header-layout">
    <nav class="container min-w-full px-6 py-8 md:flex md:justify-between md:items-center md:gap-28">
      <div class="sm:hidden md:block">
        <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
          <component :is="Icons.HamburgerSvg" />
        </button>
      </div>

      <div class="md:flex md:justify-between md:items-center gap-12 w-full">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-4 font-bold cursor-pointer">
            <span class="min-w-20">
              <LogoSvg />
            </span>
            <div class="header-layout__title md:hidden xl:block">
              O‘ZBEKISTON RESPUBLIKASI TASHQI ISHLAR
              VAZIRLIGI QOSHIDAGI DIPLOMATIK
              KORPUSGA XIZMAT KO‘RSATISH BYUROSI
            </div>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <component :is="Icons.HamburgerSvg" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 md:gap-4">
          <li v-for="item in navbar_items" :key="item.path"
            class="header-layout__navbar-item flex md:justify-center m-0 text-gray-100 hover:text-indigo-400 cursor-pointer">
            <router-link :to="item.path" class="font-medium cursor-pointer">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="header-layout__language flex justify-center items-center">
        <span class="text-white text-base leading-5">
          O'ZB
        </span>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import LogoSvg from '../assets/images/IconSvg.vue';

import { Icons } from '../assets/images/icons';

import { navbar_items } from '../constants/navbar-items.ts'

export default {
  setup() {
    let showMenu = ref(false)
    const toggleNav = () => (showMenu.value = !showMenu.value)

    return { showMenu, toggleNav, Icons, navbar_items }
  },
  components: { LogoSvg }
}
</script>

<style scoped lang="scss">
.header-layout {
  &__title {
    color: #3F3F3F;
    font-size: 15px;
    max-width: 340px;
    line-height: 19px;
  }

  &__navbar-item {
    font-size: 16px;
    line-height: 19px;
    color: #005489;
    margin: 0 !important;
  }

  &__language {
    background-color: #097CAD;
    border-radius: 0 28px 28px 28px;
    width: 68px;
    height: 68px;
    cursor: pointer;
  }
}
</style>
