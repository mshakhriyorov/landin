<template>
    <div>
        <div class="bg-transparent py-10 sm:py-5">
            <div class="mx-auto max-w-screen-2xl flex flex-col gap-4 md:gap-14 justify-center items-center">
                <h2 class="title font-bold text-center xs:text-2xl xs:pb-4 text-3xl xl:text-4xl">{{ title }}</h2>

                <ul class="xs:grid xs:grid-rows-2 xs:max-w-xs sm:grid sm:grid-cols-2 lg:flex flex-wrap justify-center items-center gap-4 xl:gap-8">
                    <li v-for="(item, index) in service_items" :key="index" class="flex items-center gap-5">
                        <div class="our-service__icon flex items-center justify-center">
                            <component :is="item.icon" />
                        </div>
                        <span class="our-service__text font-bold md:w-52 sm:w-40">{{ item.title }}</span>
                    </li>
                </ul>

                <div class="our-service__button">
                    Barcha xizmatlar
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { service_items } from '../constants/service-items.ts'

export default defineComponent({
    name: "OurService",
    setup() {
        const title = "Bizning xizmatlarimiz";

        return { title, service_items }
    },
})
</script>

<style scoped lang="scss">
.our-service {
    &__icon {
        padding: 12px;
        border-radius: 50%;
        background-color: #E6F7FF;
        min-width: 88px;
        min-height: 88px;
    }

    &__text {
        color: #3F3F3F;
        font-size: 17px;
        line-height: 26px;
    }

    &__button {
        margin-top: 50px;
        padding: 23px;
        background-color: #087CAD;
        border-radius: 5px;
        color: #FFFFFF;
        text-transform: uppercase;
        letter-spacing: 1.98px;
        font-weight: bold;
        font-size: 15px;
        line-height: 19px;
        cursor: pointer;

        &:hover {
            background-color: #319bc9;
        }
    }
}
</style>