<template>
    <section class="flex flex-col lg:p-12">
        <h2 class="section-title">Latest collections</h2>
        <div class="flex flex-wrap justify-center">
            <ProductCard v-for="product in products" :data="product"/>
        </div>
        <a class="self-center text-blue-500 underline my-4 text-lg" href="#">Show more items</a>
    </section>
</template>

<script>
import ProductCard from "./ProductCard";
import {demoProducts} from "../lib/globals";

export default {
    name: "LatestCollections",
    components: {ProductCard},
    data() {
        return {
            products: demoProducts,
        }
    }
}
</script>

<style scoped>

</style>
