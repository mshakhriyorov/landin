<template>
    <div class="relative py-16 hover:cursor-move">
        <carousel :per-page="1" :autoplay="false" :loop="true" :speed="2000" :autoplayTimeout="4000"
            easing="cubic-bezier(0, 0.18, 0.45, 1.18)" @page-change="handlePageChange">
            <slide v-for="slide in sliderData" :key="slide.id">
                <div class="relative">
                    <div class="slider__card max-w-lg py-2 px-8 sm:py-4 sm:px-10 md:py-6 md:px-12 xl:py-8 xl:px-14">
                        <h2 class="text-white font-bold text-lg sm:text-xl md:text-3xl xl:text-5xl">{{ slide.title }}</h2>
                        <p class="text-white font-normal text-sm md:text-xl mt-1.5">
                            {{ slide.text }}
                        </p>
                        <button type="button"
                            class="border border-white border-solid text-white font-normal text-sm md:text-lg p-2 rounded-lg hover:bg-sky-500 hover:cursor-pointer">Batafsil</button>
                    </div>
                </div>
                <div class="slider__image overflow-hidden">
                    <img :src="SliderImage" :alt="slide.title" />
                </div>
            </slide>
        </carousel>
        <div class="opacity-20 absolute top-0 left-20 -z-50">
            <component :is="Icons.LogoFirstBgSvg" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

import { sliderData } from '../testData/slider.json';

import { Icons } from '../assets/images/icons';
import SliderImage from '../assets/images/chevrolet.jpg'

export default defineComponent({
    name: "Slider",
    data() {
        return { sliderData, SliderImage, Icons }
    },
    methods: {
        handlePageChange() {
            console.log('Page changed');
        },
    },
    components: { Carousel, Slide }
})
</script>

<style scoped lang="scss">
.slider {
    &__image {
        max-height: 540px;
        border-radius: 35px;
        transform: translateX(10%);
    }

    &__card {
        z-index: 1;
        position: absolute;
        left: -10%;
        top: calc(100% + 40px);
        border-radius: 31px;
        background-color: #0C8EE0;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: flex-start;
        backdrop-filter: blur(29px);
        -webkit-backdrop-filter: blur(29px);
    }
}

// custom style for VueCarousel
.VueCarousel-slide {
    display: grid;
    justify-content: center;
}

// animate image and cards on slide change
// @keyframes image_anim {
//     0% {
//         transform: scale(1);
//     }

//     100% {
//         transform: scale(1.1);
//     }
// }
</style>