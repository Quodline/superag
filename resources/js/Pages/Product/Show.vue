<template>
    <UserNav/>
    <div class="flex flex-wrap items-center bg-gray-100">
        <a href="/" class="text-blue-900 px-4">&larr;Back to Listing</a>
        <h2 class="text-center flex-grow text-3xl py-8 font-bold">{{ product.description }}</h2>
    </div>
    <div class="flex flex-col lg:flex-row p-4 bg-gray-100 justify-center space-y-4">
        <div>
            <img :src="product.thumb" class="rounded-lg drop-shadow-2xl max-w-full lg:max-w-screen-md font-bold">
        </div>
        <div class="flex flex-col flex-grow lg:w-1/5 space-y-4 px-4">
            <section class="card flex flex-col items-center">
                <p class="text-2xl">{{ ngnPrice }}</p>
                <button class="btn-outline">Make an offer</button>
            </section>

            <AgentCard :agent="product.agent"/>

            <section class="card">
                <ul class="list-disc px-4">
                    <li>Don't pay in advance, including for delivery</li>
                    <li>Meet the seller at a safe public place</li>
                    <li>On delivery, check that the item delivered is what was inspected</li>
                    <li>Only pay when you're satisfied</li>
                </ul>
            </section>
        </div>
    </div>
    <Footer/>
</template>

<script>
import UserNav from "../../Components/UserNav";
import {formatter} from "../../lib/globals";
import AgentCard from "../../Components/AgentCard";
import Footer from "../../Components/Footer";

export default {
    components: {Footer, AgentCard, UserNav},
    props: {
        product: Object,
    },
    computed: {
        ngnPrice() {
            return formatter.format(this.product.price);
        },
    },
}
</script>

<style scoped>

</style>
