<template>
    <UserNav/>
    <div class="flex flex-wrap items-center bg-gray-100">
        <h2 class="text-center flex-grow text-3xl py-8 font-bold">All products</h2>
    </div>

    <div class="flex justify-end p-4 space-x-4">
        <DropdownSelect>
            <template #title>Sort by: {{ sort }}</template>
            <div class="py-1">
                <DropdownItem value="latest">Latest</DropdownItem>
                <DropdownItem value="expensive">Most expensive</DropdownItem>
                <DropdownItem value="cheapest">Cheapest</DropdownItem>
            </div>
        </DropdownSelect>
    </div>

    <div class="flex flex-wrap">
        <ProductCard v-for="product in products" :data="product" :key="product.id"/>
    </div>
    <Footer/>
</template>

<script>
import UserNav from "../../Components/UserNav";
import Footer from "../../Components/Footer";
import ProductCard from "../../Components/ProductCard";
import DropdownSelect from "../../Components/DropdownSelect";
import {MenuItem} from "@headlessui/vue";
import DropdownItem from "../../Components/DropdownItem";

export default {
    components: {DropdownItem, MenuItem, DropdownSelect, ProductCard, Footer, UserNav},
    props: {
        products: Array,
        sort: String,
    },
}
</script>

<style scoped>

</style>
