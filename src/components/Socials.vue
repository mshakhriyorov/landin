<template>
    <ul class="socials flex flex-col justify-center items-center gap-6">
        <li v-for="(link, index) in social_links" :key="index" class="socials__link">
            <a href="#">
                <component :is="link.svgLink" />
            </a>
        </li>
    </ul>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';

import { social_links } from '../constants/footer-data';

export default defineComponent({
    name: "Socials",
    setup() {
        return { social_links };
    },
})
</script>

<style scoped lang="scss">
.socials {
    padding: 20px;
    background-color: #087CAD;
    opacity: 0.5;
    border-end-start-radius: 20px;
    border-start-start-radius: 20px;

    &:hover {
        opacity: 1;
    }

    &__link:hover {
        transform: scale(1.2);
    }
}
</style>
