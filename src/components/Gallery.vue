<template>
    <div class="gallery__box">
        <div class="gallery py-24 sm:py-44">
            <div class="mx-auto flex flex-col gap-2 xs:max-w-3xs md:gap-6 justify-center items-center">
                <h2 class="title font-bold text-center xs:text-2xl xs:pb-4 text-3xl xl:text-4xl">{{ title }}</h2>

                <!-- video/photo switcher -->
                <div class="gallery__switcher overflow-hidden flex xs:text-sm text-2xl mb-4">
                    <div @click="isVideo = false"
                        :class="!isVideo ? 'text-white font-bold bg-sky-500' : 'text-black font-normal bg-transparent cursor-pointer'"
                        class="gallery__switcher--case py-3.5 px-11">Foto</div>
                    <div @click="isVideo = true"
                        :class="isVideo ? 'text-white font-bold bg-sky-500' : 'text-black font-normal bg-transparent cursor-pointer'"
                        class="gallery__switcher--case py-3.5 px-11">Video</div>
                </div>

                <ul v-if="isVideo" class="grid xs:grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    <li v-for="(item, index) in newsData.news" :key="index" class="gallery__item lg:max-w-sm w-auto">
                        <div class="w-full">
                            <iframe width="350" height="230"
                                src="https://www.youtube.com/embed/lEIwRV49o-Q?si=G6bpRS7-Mi4CmgYo"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen class="rounded-t-2xl"></iframe>
                        </div>
                        <div class="p-6 w-full">
                            <div class="flex flex-col gap-5">
                                <h2 class="gallery__text font-bold md:w-52 sm:w-40">
                                    {{ item.title }}
                                </h2>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul v-else class="grid xs:grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    <li v-for="(item, index) in newsData.news" :key="index" class="gallery__item lg:max-w-sm w-auto">
                        <div class="gallery__image-box w-full">
                            <img src="../assets/images/photo.jpg" :alt="item.title" class="gallery__image" />
                            <component :is="Icons.PhotoSvg" class="text-white z-20 absolute bottom-5 left-5" />
                        </div>
                        <div class="p-6 w-full">
                            <div class="flex flex-col gap-5">
                                <h2 class="gallery__text font-bold md:w-52 sm:w-40">
                                    {{ item.title }}
                                </h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gallery__background">
            <component :is="Icons.LogoSecondBgSvg" />
        </div>
        <div class="gallery__box--bg"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import newsData from '../testData/news.json';

import { Icons } from '../assets/images/icons';

export default defineComponent({
    name: "Gallery",
    setup() {
        const isVideo = ref(false)
        const title = "Galereya";

        return { title, isVideo, newsData, Icons }
    },
})
</script>

<style scoped lang="scss">
.gallery {
    &__background {
        opacity: 0.2;
        position: absolute;
        top: -10%;
        left: -10%;
        z-index: -11111;
    }

    &__image-box {
        border-radius: 16px 16px 0px 0px;
        overflow: hidden;
        position: relative;

        &::before {
            position: absolute;
            background-color: #077CAD;
            opacity: 0.3;
            content: '';
            width: 100%;
            height: 100%;
            z-index: 11;
            transition: all 0.3s;
        }
    }

    &__text {
        color: #3F3F3F;
        font-size: 17px;
        line-height: 26px;
    }

    &__item {
        box-shadow: 0px 3px 31px #00000029;
        background: #FFFFFF;
        border-radius: 16px;
        cursor: pointer;

        &:hover {
            .gallery__image-box::before {
                opacity: 0;
            }
        }
    }

    &__switcher {
        border-radius: 32px;
        background-color: #CDF0FF;

        &--case {
            border-radius: 32px;
        }
    }
}

.gallery__box {
    position: relative;

    &--bg {
        width: 100%;
        height: 100%;
        background: #E8F8FF;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1111;
        border-radius: 20px;
    }

    &::before {
        z-index: -111;
        height: 10%;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to bottom left, transparent 50%, #ffffff 50%);
    }

    &::after {
        z-index: -111;
        height: 20%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top left, transparent 50%, #ffffff 50%);
    }
}
</style>