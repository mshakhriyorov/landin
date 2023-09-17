<template>
    <div>
        <div class="bg-transparent py-24 sm:py-32">
            <div class="mx-auto flex flex-col gap-4 md:gap-14 justify-center items-center">
                <h2 class="news__title">{{ title }}</h2>

                <ul class="flex sm:flex-wrap xl:flex-nowrap justify-center md:gap-4 sm:gap-2">
                    <li v-for="(item, index) in newsData.news" :key="index"
                        class="news__item flex flex-col items-center gap-5 lg:max-w-sm w-auto">
                        <div class="news__image-box w-full">
                            <img src="../assets/images/photo.jpg" :alt="item.title" class="news__image" />
                        </div>
                        <div class="px-6 pb-6 w-full flex justify-between flex-col h-3/6">
                            <div class="flex flex-col gap-5">
                                <span class="flex gap-2 items-center">
                                    <component :is="Icons.DateSvg" />
                                    11 Июль 2023
                                </span>
                                <h2 class="news__text font-bold md:w-52 sm:w-40">
                                    {{ item.title }}
                                </h2>
                            </div>
                            <span class="text-sky-500 font-normal text-sm">Read more</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import newsData from '../testData/news.json';

import { Icons } from '../assets/images/icons';

export default defineComponent({
    name: "News",
    setup() {
        const title = "Yangiliklar";

        return { title, newsData, Icons }
    },
})
</script>

<style scoped lang="scss">
.news {
    &__title {
        color: #3F3F3F;
        font-size: 40px;
        line-height: 39px;
        font-weight: bold;
        text-align: center;
    }

    &__image-box {
        border-radius: 26px 26px 0px 0px;
        overflow: hidden;
    }

    &__text {
        color: #3F3F3F;
        font-size: 17px;
        line-height: 26px;
    }

    &__item {
        box-shadow: 0px 3px 31px #00000029;
        background: #FFFFFF;
        border-radius: 26px;
        cursor: pointer;

        &:hover {
            .news__image {
                transform: scale(1.1);
            }
        }
    }
}
</style>