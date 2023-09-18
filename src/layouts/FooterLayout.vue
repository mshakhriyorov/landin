<template>
    <div class="max-w-screen-2xl">
        <ul class="flex flex-wrap gap-x-28 gap-y-12 justify-start xs:justify-center">
            <li class="max-w-sm flex flex-col gap-5 xs:items-center">
                <span class="text-white font-bold text-md xs:text-center">
                    O‘ZBEKISTON RESPUBLIKASI TASHQI ISHLAR
                    VAZIRLIGI QOSHIDAGI DIPLOMATIK
                    KORPUSGA XIZMAT KO‘RSATISH BYUROSI
                </span>
                <ul class="flex items-center gap-6">
                    <li v-for="(link, index) in social_links" :key="index" class="footer-layout__social-link">
                        <a href="#">
                            <component :is="link.svgLink" />
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <ul class="flex sm:flex-wrap md:flex-nowrap gap-x-28 gap-y-12 justify-center">
                    <li class="footer-layout__items">
                        <ul class="footer-layout__items--list">
                            <li v-for="(item, index) in navbar_items" :key="index"
                                class="footer-layout__items--text isLink">
                                {{ item.title }}
                            </li>
                        </ul>
                    </li>
                    <li class="footer-layout__items">
                        <ul class="footer-layout__items--list">
                            <li v-for="(contact, index) in contacts" :key="index" class="footer-layout__items--text">
                                {{ contact.title }}: <br />
                                {{ contact.data }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="footer-layout__items flex flex-col gap-32">
                <div class="footer-layout__items--text xs:text-center">
                    Ушбу сайтда чоп этилган материаллардан фойдаланилганда www.ddsmfa.uz ҳаволасини кўрсатиб ўтиш шарт
                </div>
                <!-- TODO: this is temporary solution. Change it with real data link -->
                <a class="p-2 w-24 bg-sky-700 text-white font-bold cursor-pointer"
                    href="http://www.uz/ru/res/visitor/index?id=1669" target="_blank" rel="noopener noreferrer">512</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { social_links } from '../constants/footer-data.ts';
import { navbar_items } from '../constants/navbar-items.ts';
import { contacts } from '../constants/contacts.ts';

export default defineComponent({
    name: "FooterLayout",
    setup() {
        return { social_links, navbar_items, contacts };
    },
})
</script>

<style scoped lang="scss">
.footer-layout {
    &__items {
        max-width: 245px;

        &--list {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        &--text {
            color: #FFFFFF;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            &.isLink:hover {
                font-weight: bold;
                cursor: pointer;
            }
        }
    }

    &__social-link {
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
}
</style>