<script setup lang="ts">
import Gallery from '../components/Gallery.vue';
import News from '../components/News.vue';
import OurService from '../components/OurService.vue';
import Slider from '../components/Slider.vue';
import Statistics from '../components/Statistics.vue';
import UsefulLinks from '../components/UsefulLinks.vue';
</script>

<template>
    <div class="home-page">
        <Slider />
        <OurService />
        <News />
        <Gallery />
        <Statistics />
        <UsefulLinks />
    </div>
</template>

<style scoped lang="scss">
.home-page {
    max-width: 2000px;
}
</style>