<template>
    <footer class="bg-gray-100">
        <h1 class="text-2xl p-4">Superagent</h1>
        <ul class="flex flex-col lg:flex-row items-center justify-center space-x-4 my-2">
            <li>
                <a href="#">Privacy Policy</a>
            </li>
            <li>
                <a href="#">Terms and Conditions</a>
            </li>
            <li>
                <a href="#">Sitemap</a>
            </li>
            <li>
                <a href="#">F.A.Q</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Contact us</a>
            </li>
        </ul>
        <p>&copy; All rights reserved 2022 - present</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    color: rgb(55, 65, 81);
}

li > a {
    color: rgb(75, 85, 99);
}
</style>
