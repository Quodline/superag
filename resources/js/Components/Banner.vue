<template>
    <header class="flex flex-col min-h-screen bg-gray-200 bg-[url('/img/banner.jpg')] bg-center bg-cover" role="banner">
        <nav class="flex flex-col lg:flex-row justify-between items-center px-2 py-4 lg:p-12 bg-gradient-to-b from-gray-900/70 to-gray-600/0"
             role="navigation">
            <div class="flex items-center">
                <img src="/img/logo.png" class="object-scale-down h-32">
                <h1 class="text-3xl font-bold text-blue-900 drop-shadow-xl">SUPERAGENT</h1>
            </div>

            <div class="space-x-2">
                <a class="underline" href="#">Login</a>
                <a class="underline" href="#">Register</a>
            </div>
        </nav>
        <div class="flex flex-grow items-center justify-center drop-shadow-2xl">
            <form class="bg-white w-full lg:w-2/4 flex rounded-lg">
                <input class="bg-transparent flex-grow h-12 px-4 text-lg text-gray-700 placeholder-gray-600"
                       placeholder="Search for a keyword" type="search"/>
                <button class="p-4" type="submit">
                    <i class="fa-solid fa-search"></i>
                </button>
            </form>
        </div>
    </header>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>

</style>
