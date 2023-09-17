<script setup lang="ts">
import FooterLayout from './layouts/FooterLayout.vue';
import HeaderLayout from './layouts/HeaderLayout.vue';
import HomePage from './pages/HomePage.vue';
</script>

<template>
  <div class="app px-8 md:px-24 lg-44">
    <header class="app__header">
      <HeaderLayout />
    </header>

    <HomePage />

    <footer class="app__footer">
      <FooterLayout />
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

  &__footer {
    margin-left: -100px;
    margin-right: -100px;
    background: #087CAD;
    display: flex;
    justify-content: center;
    padding: 84px;
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
