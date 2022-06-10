<template>
    <MenuItem v-slot="{ active }">
        <a @click.prevent="evClick" href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
            <slot></slot>
        </a>
    </MenuItem>
</template>

<script>
import {MenuItem} from "@headlessui/vue";
export default {
    name: "DropdownItem",
    components: {MenuItem},
    props: {
        value: String,
    },
    methods: {
        evClick() {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("sort", this.value);
            window.location.search = searchParams.toString();
        },
    }
}
</script>

<style scoped>

</style>
