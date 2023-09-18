<template>
    <div class="relative py-16 hover:cursor-move">
        <carousel :per-page="1" :autoplay="true" :loop="true" :speed="2000" :autoplayTimeout="5000"
            easing="cubic-bezier(0, 0.18, 0.45, 1.18)" @page-change="handlePageChange">
            <slide v-for="slide in sliderData" :key="slide.id">
                <div class="relative">
                    <div  :class="isTrigger && 'animate-move_card'"
                        class="slider__card flex flex-col justify-center items-start gap-10 absolute py-2 px-8 xs:gap-0 xs:-left-10 xs:top-2 xs:p-3 xs:max-w-2xs sm:top-4 sm:max-w-sm sm:gap-4 sm:py-4 sm:px-10 md:px-8 lg:-left-14 xl:py-8 xl:px-14 xl:max-w-lg xl:top-20 2xl:-left-32">
                        <h2 class="text-white font-bold text-lg xs:text-sm sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                            {{ slide.title }}</h2>
                        <p class="text-white font-normal text-sm xs:text-2xs md:text-base lg:text-lg mt-1.5">
                            {{ slide.text }}
                        </p>
                        <button type="button"
                            class="border border-white border-solid text-white font-normal text-sm xs:text-2xs xs:p-1 md:text-md lg:text-lg p-2 rounded-lg hover:bg-sky-500 hover:cursor-pointer">Batafsil</button>
                    </div>
                </div>
                <div class="slider__image overflow-hidden">
                    <img :src="SliderImage" :alt="slide.title"
                        class="xs:max-h-36 sm:max-h-72 lg:max-h-img96 xl:max-h-img100 2xl:max-h-full"
                        :class="isTrigger && 'animate-zoom'" />
                </div>
            </slide>
        </carousel>
        <div class="opacity-20 absolute top-0 left-20 -z-50">
            <component :is="IconBg" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, watch } from 'vue';
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

import { sliderData } from '../testData/slider.json';

import { Icons } from '../assets/images/icons';
import SliderImage from '../assets/images/chevrolet.jpg'

export default defineComponent({
    name: "Slider",
    data() {
        return { sliderData, SliderImage, isTrigger: false, IconBg: markRaw(Icons.LogoFirstBgSvg) }
    },
    methods: {
        handlePageChange() {
            console.log('Page changed', this.isTrigger);
            this.isTrigger = true
        },
    },
    mounted() {
        watch(() => this.isTrigger, (newVal: boolean) => {
            if (newVal) {
                setTimeout(() => {
                    this.isTrigger = false;
                }, 4000);
            }
        });
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
        border-radius: 31px;
        background-color: #0C8EE0;
        backdrop-filter: blur(29px);
        -webkit-backdrop-filter: blur(29px);
    }
}

// custom style for VueCarousel
.VueCarousel-slide {
    display: grid;
    justify-content: center;
}
</style>