<template>
    <Banner/>
    <HotDeals/>
    <LatestCollections/>
    <Footer/>
</template>

<script>
import Banner from "../Components/Banner";
import LatestCollections from "../Components/LatestCollections";
import HotDeals from "../Components/HotDeals";
import Footer from "../Components/Footer";

export default {
    components: {Footer, HotDeals, LatestCollections, Banner}
}
</script>

<style scoped>

</style>
