<template>
    <section class="card flex flex-col">
        <h3 class="font-2xl font-bold">{{ agent.name }}</h3>
        <div class="text-sm text-gray-700">{{ memberSince }} with us</div>
        <button class="btn-outline self-center">Show contact</button>
    </section>
</template>

<script>
import {DateTime} from "luxon";

export default {
    name: "AgentCard",
    props: {
        agent: Object,
    },
    computed: {
        memberSince() {
            const createdAt = DateTime.fromISO(this.agent.created_at)
            const months = Math.floor(createdAt.diff(DateTime.now(), 'months').toObject().months);
            const years = ~~(months / 12);

            let result = years > 0 ? `${years}y, ` : '';
            return months > 0 ? result + `${months}m, ` : 'Less than a month';
        }
    }
}
</script>

<style scoped>

</style>
