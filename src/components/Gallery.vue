<template>
    <div>
        <div class="bg-transparent py-24 sm:py-32">
            <div class="mx-auto flex flex-col gap-4 md:gap-14 justify-center items-center">
                <h2 class="gallery__title text-center text-lg font-semibold leading-8 text-gray-900">{{ title }}</h2>

                <div class="gallery__switcher overflow-hidden flex text-2xl">
                    <div @click="isVideo = false"
                        :class="!isVideo ? 'text-white font-bold bg-sky-500' : 'text-black font-normal bg-transparent cursor-pointer'"
                        class="gallery__switcher--case py-3.5 px-11">Foto</div>
                    <div @click="isVideo = true"
                        :class="isVideo ? 'text-white font-bold bg-sky-500' : 'text-black font-normal bg-transparent cursor-pointer'"
                        class="gallery__switcher--case py-3.5 px-11">Video</div>
                </div>

                <ul v-if="isVideo" class="flex sm:flex-wrap xl:flex-nowrap justify-center md:gap-4 sm:gap-2">
                    <li v-for="(item, index) in newsData.news" :key="index" class="gallery__item lg:max-w-sm w-auto">
                        <div class="gallery__image-box w-full">
                            <img src="../assets/images/photo.jpg" :alt="item.title" class="gallery__image" />
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
                <ul v-else class="flex sm:flex-wrap xl:flex-nowrap justify-center md:gap-4 sm:gap-2">
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
    &__title {
        color: #3F3F3F;
        font-size: 40px;
        line-height: 39px;
        font-weight: bold;
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
</style>