<script setup lang="ts">
import HeaderLayout from './layouts/HeaderLayout.vue';
import HomePage from './pages/HomePage.vue';

</script>

<template>
  <div class="px-8 md:px-24 lg-44">
    <header class="app__header">
      <HeaderLayout />
    </header>

    <HomePage />
  </div>
</template>

<style scoped lang="scss">
.app__header {
  margin-left: -76px;
  margin-right: -76px;
}

@media (max-width: 768px) {
  .app__header {
    margin-left: -26px;
    margin-right: -26px;
  }
}
</style>
