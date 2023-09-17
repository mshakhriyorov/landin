<template>
    <div class="useful-links flex justify-center">
        <div class="bg-transparent py-24 sm:py-32 max-w-screen-2xl">
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
                <div
                    class="flex sm:items-center xl:items-start sm:justify-center xl:justify-start sm:flex-col sm:gap-8 xl:flex-row w-full relative">
                    <div
                        class="useful-links__map-box overflow-hidden sm:md:max-w-xl md:max-w-5xl xl:max-w-screen-xl w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.27805986846695!2d69.26377308089285!3d41.32084980115892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3fd55991d9%3A0xf4d4d9bd8cde379a!2z0KHQu9GD0LbQsdCwINCU0LjQv9C70L7QvNCw0YLQuNGH0LXRgdC60L7Qs9C-INCh0LXRgNCy0LjRgdCwINCc0JjQlCDQoNC10YHQv9GD0LHQu9C40LrQuCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sen!2s!4v1694945854957!5m2!1sen!2s&z=2"
                            width="1500px" height="500px" style="border:0;" frameborder="0" allowfullscreen loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div class="useful-links__card max-w-lg max-h-80 relative lg:absolute">
                        <div class="flex items-center gap-5">
                            <span class="min-w-20">
                                <component :is="Icons.LogoSvg" />
                            </span>
                            <div class="text-sm font-bold text-gray-500">
                                O‘ZBEKISTON RESPUBLIKASI TASHQI ISHLAR
                                VAZIRLIGI QOSHIDAGI DIPLOMATIK
                                KORPUSGA XIZMAT KO‘RSATISH BYUROSI
                            </div>
                        </div>
                        <div class="text-sm font-normal text-gray-500">
                            Bizning manzil: <br />
                            <span class="font-bold">Tashkent, Shayhontohur ko'chasi., 1-A uy.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="useful-links__background"></div>
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
    }
})
</script>

<style scoped lang="scss">
.useful-links {
    position: relative;

    &::after {
        z-index: -111;
        height: 10%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top right, transparent 50%, #ffffff 50%);
    }

    &::before {
        z-index: -111;
        height: 10%;
        content: "";
        position: absolute;
        bottom: 30%;
        left: 0;
        right: 0;
        background: linear-gradient(to bottom right, transparent 50%, #ffffff 50%);
    }

    &__background {
        width: 100%;
        height: 70%;
        background: #F3FBFF;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1111;
        border-radius: 20px;
    }

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
        border-radius: 10px;
        width: 300px;
        height: 270px;
        cursor: pointer;

        &:hover {
            transform: scale(1.02);
        }
    }

    &__map-box {
        border-radius: 40px;
    }

    &__card {
        padding: 70px 50px;
        background-color: #B5DFF0;
        border-radius: 35px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: flex-start;
        box-shadow: 0px 58px 49px #00000029;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>