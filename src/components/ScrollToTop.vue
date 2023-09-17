<template>
    <button @click="scrollToTop" class="absolute z-20 bottom-10 right-40 bg-white p-8 rounded-full hover:p-6">
        <component :is="Icons.TopArrowSvg" />
    </button>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

import { Icons } from '../assets/images/icons';

export default defineComponent({
    setup() {
        return { Icons }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        },
    },
});
</script>
  