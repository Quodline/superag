<template>
    <div class="max-w-xs m-4 overflow-hidden rounded-lg shadow-lg bg-white">
        <img :alt="data.description" :src="data.thumb" class="object-cover w-full h-48"/>
        <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{{ displayCost }}</h4>
            <p class="leading-normal text-gray-700">{{ data.description }}</p>
        </div>
    </div>
</template>

<script>
import {formatter} from "../lib/globals";

export default {
    name: "ProductCard",
    props: {
        data: Object,
    },
    computed: {
        displayCost() {
            return formatter.format(this.data.price);
        },
    },
}
</script>

<style scoped>

</style>
