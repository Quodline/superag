<template>
    <section class="flex flex-col bg-blue-100 lg:p-12">
        <h2 class="section-title">Hot deals</h2>
        <Countdown :end-time="endTime"/>
        <div class="flex flex-wrap justify-center">
            <ProductCard v-for="product in products" :data="product"/>
        </div>
        <a class="self-center text-blue-500 underline my-4 text-lg" href="#">Show more items</a>
    </section>
</template>

<script>
import {DateTime} from 'luxon';
import ProductCard from "./ProductCard";
import Countdown from "./Countdown";
import {demoProducts} from "../lib/globals";

export default {
    name: "HotDeals",
    components: {Countdown, ProductCard},
    data() {
        return {
            endTime: DateTime.now().endOf('week').toISO(),
            products: demoProducts,
        };
    }
}
</script>

<style scoped>

</style>
