<template>
  <div class="header-layout bg-indigo-600">
    <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400">
          <div class="d-flex">
            <LogoSvg />
            <span class="header-layout__title">
              O‘ZBEKISTON RESPUBLIKASI TASHQI ISHLAR VAZIRLIGI QOSHIDAGI DIPLOMATIK KORPUSGA XIZMAT
              KO‘RSATISH BYUROSI
            </span>
          </div>
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <HamburgerSvg />
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="text-gray-100 hover:text-indigo-400">Home</li>
        <li class="text-gray-100 hover:text-indigo-400">About</li>
        <li class="text-gray-100 hover:text-indigo-400">Blogs</li>
        <li class="text-gray-100 hover:text-indigo-400">Contact Us</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue'

import LogoSvg from '../assets/images/IconSvg.vue'
import HamburgerSvg from '../assets/images/icons/HamburgerSvg.vue'

export default {
  setup() {
    let showMenu = ref(false)
    const toggleNav = () => (showMenu.value = !showMenu.value)

    return { showMenu, toggleNav }
  },
  components: { LogoSvg, HamburgerSvg }
}
</script>

<style>
.header-layout {
  margin-left: -90px;
  margin-right: -90px;
}
</style>
