<template>
    <div class="clockdiv pb-10">
        <div>
            <span class="days">{{ `0${Math.floor(this.milliseconds / (1000 * 60 * 60 * 24))}`.slice(-2) }}</span>
            <div class="smalltext">Days</div>
        </div>
        <div>
            <span class="hours"> {{ `0${Math.floor((this.milliseconds / (1000 * 60 * 60)) % 24)}`.slice(-2) }}</span>
            <div class="smalltext">Hours</div>
        </div>
        <div>
            <span class="minutes">{{ `0${Math.floor((this.milliseconds / 1000 / 60) % 60)}`.slice(-2) }}</span>
            <div class="smalltext">Minutes</div>
        </div>
        <div>
            <span class="seconds">{{ `0${Math.floor((this.milliseconds / 1000) % 60)}`.slice(-2) }}</span>
            <div class="smalltext">Seconds</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Countdown",
    props: {
        endTime: Date,
    },
    data() {
        return {
            milliseconds: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.milliseconds = Date.parse(this.endTime) - Date.parse(new Date());
        }, 1000);
    },
}
</script>

<style scoped>

.clockdiv {
    font-family: sans-serif;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
}

.clockdiv > div {
    display: inline-block;
}

.clockdiv div > span {
    padding: 15px;
    margin: 2px;
    border-radius: 3px;
    background: #00000011;
    display: inline-block;
}

.smalltext {
    padding-top: 5px;
    font-size: 16px;
}
</style>
