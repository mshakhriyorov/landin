<template>
    <div>
        <div class="bg-transparent py-24 sm:py-32">
            <div class="mx-auto flex flex-col gap-4 xs:max-w-3xs md:gap-14 justify-center items-center">
                <h2 class="title font-bold text-center xs:text-2xl xs:pb-4 text-3xl xl:text-4xl">{{ title }}</h2>

                <ul class="grid xs:grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
                    <div
                        class="bg-white flex flex-col justify-center items-center xs:w-full sm:mb-4 sm:mr-0 lg:mr-4">
                        <div class="text-center text-4xl font-bold text-gray-900">3 120</div>
                        <span class="statistics__title--second">Все обращения</span>
                    </div>
                    <li v-for="item in chart_items" :key="item.id" class="relative">
                        <Doughnut :data="chartData[item.id]" :options="options" />
                        <div
                            class="statistics__item--wrapper absolute bg-white flex flex-col justify-center items-center gap-4">
                            <component :is="item.icon" class="iconn" />
                            <h3 class="text-2xl font-bold">{{ item.percent }}%</h3>
                            <span class="statistics__title--second"> {{ item.text }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

import { chartData } from '../testData/chart.json';
import { options, chart_items } from '../constants/chart-options.ts'

ChartJS.register(ArcElement, Tooltip, Legend);

import { Icons } from '../assets/images/icons';

export default defineComponent({
    name: "Statistics",
    setup() {
        const title = "Сайт оркали мурожатлар статистикаси";

        return { title, Icons, options, chartData, chart_items }
    },
    components: { Doughnut }
})
</script>

<style scoped lang="scss">
.statistics {
    &__title {
        &--second {
            font-size: 18px;
            font-weight: normal;
            line-height: 21px;
            color: #4D4F5C;
        }
    }

    &__item--wrapper {
        top: 2pc;
        left: 2pc;
        border-radius: 50%;
        width: 80%;
        height: 80%;
    }
}
</style>