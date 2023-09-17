<template>
    <div>
        <div class="bg-transparent py-24 sm:py-32">
            <div class="mx-auto flex flex-col gap-4 md:gap-14 justify-center items-center">
                <h2 class="useful-links__title">{{ title }}</h2>

                <ul class="flex sm:flex-wrap xl:flex-nowrap justify-center md:gap-4 sm:gap-2">
                    <li v-for="(link, index) in links" :key="index" class="useful-links__item">
                        <a :href="link.href" class="flex flex-col items-center justify-center p-9 gap-10" target="_blank">
                            <img :src="link.icon" :alt="link.title" />
                            <div class="text-center font-bold text-base">
                                {{ link.title }}
                            </div>
                        </a>
                    </li>
                </ul>

                <!-- adress and map go here -->
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { links } from '../constants/useful-links';

import { Icons } from '../assets/images/icons';

export default defineComponent({
    name: "UsefulLinks",
    setup() {
        const title = "Foydali havolalar";

        return { title, links, Icons }
    },
})
</script>

<style scoped lang="scss">
.useful-links {
    &__title {
        color: #3F3F3F;
        font-size: 40px;
        line-height: 39px;
        font-weight: bold;
        text-align: center;
    }

    &__item {
        box-shadow: 0px 25px 30px #0000001A;
        background: #FFFFFF;
        border-radius: 26px;
        cursor: pointer;

        &:hover {
            transform: scale(1.02);
        }
    }
}
</style>