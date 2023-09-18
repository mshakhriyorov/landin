<template>
  <div class="header-layout">
    <nav class="container min-w-full px-6 py-8 md:flex md:justify-between md:items-center md:gap-12 xs:bg-sky-100">
      <div class="xs:hidden sm:hidden xl:block">
        <button type="button" class="xs:hidden text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
          <component :is="Icons.HamburgerSvg" />
        </button>
      </div>

      <div class="xl:flex xl:justify-between xl:items-center gap-12 w-full">
        <div class="flex items-center justify-between">
          <a href="/" class="flex items-center gap-4 font-bold cursor-pointer">
            <span class="min-w-20">
              <component :is="Icons.LogoSvg" />
            </span>
            <div class="title max-w-sm text-sm xs:text-center xs:text-2xs 2.5xl:hidden">
              O‘ZBEKISTON RESPUBLIKASI TASHQI ISHLAR
              VAZIRLIGI QOSHIDAGI DIPLOMATIK
              KORPUSGA XIZMAT KO‘RSATISH BYUROSI
            </div>
          </a>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex xl:hidden">
            <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <component :is="Icons.HamburgerSvg" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-10 xl:gap-4 xs:mt-5 xs:border-t xs:border-black xs:border-solid xl:-mt-16">
          <li v-for="item in navbar_items" :key="item.path"
            class="header-layout__navbar-item flex md:justify-center m-0 text-gray-100 text-center p-4 pt-16 hover:bg-sky-100 first:font-bold first:bg-sky-100 rounded-b-xl xs:p-4">
            <a href="#" class="font-medium cursor-pointer">
              {{ item.title }}
            </a>
          </li>
          <ul class="header-layout__icons flex gap-6">
            <li class="pt-12">
              <component :is="Icons.EyeSvg" class="header-layout__navbar-item" />
            </li>
            <li class="pt-12">
              <component :is="Icons.SearchSvg" class="header-layout__navbar-item" />
            </li>
            <div class="header-layout__language flex flex-col gap-4 justify-center items-center relative sm:hidden xs:w-12">
              <span @click="handleShowDropdown" aria-hidden="true" class="text-white text-base leading-5">
                {{ currentLang }}
              </span>

              <span class="header-layout__language--container" v-if="showDropdown">
                <ul class="header-layout__language--content flex flex-col items-center justify-start gap-4">
                  <li v-for="lang in LANGUAGES" :key="lang" @click="selectLanguage(lang)"
                    class="hover:font-bold text-sky-500 text-base leading-5">
                    {{ lang }}
                  </li>
                </ul>
              </span>
            </div>
          </ul>
        </ul>
      </div>

      <div class="header-layout__language xs:hidden sm:hidden xl:block xl:p-5 flex flex-col gap-4 justify-center items-center relative">
        <span @click="handleShowDropdown" aria-hidden="true" class="text-white text-base leading-5">
          {{ currentLang }}
        </span>

        <span class="header-layout__language--container" v-if="showDropdown">
          <ul class="header-layout__language--content flex flex-col items-center justify-start gap-4">
            <li v-for="lang in LANGUAGES" :key="lang" @click="selectLanguage(lang)"
              class="hover:font-bold text-sky-500 text-base leading-5">
              {{ lang }}
            </li>
          </ul>
        </span>
      </div>
    </nav>
    <div v-if="showDropdown" aria-hidden="true" class="w-full h-full absolute top-0 left-0" @click="handleHideDropdown">
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import { Icons } from '../assets/images/icons';

import { navbar_items } from '../constants/navbar-items.ts'

const LANGUAGES = [
  "O'Z",
  "RU",
  "EN"
]

export default {
  setup() {
    const showMenu = ref(false);
    const currentLang = ref("O'Z");
    const showDropdown = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value)

    return { showMenu, showDropdown, toggleNav, Icons, navbar_items, currentLang, LANGUAGES }
  },
  methods: {
    handleShowDropdown: function () {
      this.showDropdown = true;
    },
    handleHideDropdown: function () {
      this.showDropdown = false;
    },
    selectLanguage: function (lang: string) {
      this.showDropdown = false;
      this.currentLang = lang;
    }
  }
}
</script>

<style scoped lang="scss">
.header-layout {
  &__navbar-item {
    font-size: 16px;
    line-height: 19px;
    color: #005489;
    cursor: pointer;
    margin: 0 !important;
  }

  &__language {
    background-color: #097CAD;
    border-radius: 0 28px 28px 28px;
    width: 68px;
    height: 80px;
    cursor: pointer;

    &--container {
      position: absolute;
      top: 70%;
      background-color: #097CAD;
      width: 68px;
      border-radius: 0 0 28px 28px;
      z-index: 11;
    }

    &--content {
      background-color: #B5DFF0;
      border-radius: 0 28px 28px 28px;
      padding: 30px;
      transform: translateY(10%);
    }
  }

  &__icons {
    margin: 0 !important;
  }
}
</style>
