<script setup lang="ts">
import FooterLayout from './layouts/FooterLayout.vue';
import HeaderLayout from './layouts/HeaderLayout.vue';
import HomePage from './pages/HomePage.vue';
import Socials from './components/Socials.vue';
import ScrollToTop from './components/ScrollToTop.vue';
</script>

<template>
  <div class="app px-8 md:px-24 lg-44">
    <header class="app__header">
      <HeaderLayout />
    </header>

    <div class="grid justify-center">
      <HomePage />
    </div>

    <!-- socail links -->
    <div class="app__socials sm:hidden md:block">
      <Socials />
    </div>

    <!-- scroll to top button -->
    <div class="sm:hidden md:block">
      <ScrollToTop />
    </div>

    <div>

    </div>

    <footer class="app__footer">
      <FooterLayout />
      <div class="text-center text-white text-base font-normal absolute bottom-0 p-6 bg-sky-700 w-full">
        Внимание! Если Вы нашли ошибку в тексте, выделите её и
        нажмите Ctrl+Enter для уведомления администрации
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app {
  position: relative;
  overflow-x: hidden;

  &__header {
    margin-left: -76px;
    margin-right: -76px;
  }

  &__home {}

  &__footer {
    margin-left: -100px;
    margin-right: -100px;
    background: #087CAD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 84px 84px 140px 84px;
  }

  &__socials {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (max-width: 768px) {
  .app {
    &__header {
      margin-left: -26px;
      margin-right: -26px;
    }

    &__footer {
      margin-left: -40px;
      margin-right: -40px;
      padding: 30px;
    }
  }
}
</style>
