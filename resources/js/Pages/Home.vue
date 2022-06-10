<template>
    <Banner/>
    <section class="flex flex-col bg-blue-100 lg:p-12">
        <h2 class="section-title">Hot deals</h2>
        <Countdown :end-time="endTime"/>
        <div class="flex flex-wrap justify-center">
            <ProductCard v-for="product in products" :data="product" :key="product.id"/>
        </div>
        <a class="self-center text-blue-500 underline my-4 text-lg" href="/products?hot-deal">Show more items</a>
    </section>
    <section class="flex flex-col lg:p-12">
        <h2 class="section-title">Latest collections</h2>
        <div class="flex flex-wrap justify-center">
            <ProductCard v-for="product in products" :data="product" :key="product.id"/>
        </div>
        <a class="self-center text-blue-500 underline my-4 text-lg" href="/products">Show more items</a>
    </section>
    <Footer/>
</template>

<script>
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import {DateTime} from "luxon";
import {demoProducts} from "../lib/globals";
import Countdown from "../Components/Countdown";

export default {
    components: {Countdown, ProductCard, Footer, Banner},
    props: {
        products: Array,
    },
    data() {
        return {
            endTime: DateTime.now().endOf('week').toISO(),
        };
    }
}
</script>

<style scoped>

</style>
