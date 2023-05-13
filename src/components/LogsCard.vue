<script setup lang="ts">
const props = defineProps(['factsLogs']);
</script>

<template>
    <div class="card">
        <span class="title">Logs</span>
        <div v-for="log in factsLogs" class="log">
            <p>
                <span class="bold">{{ log.date }}</span><br>
                <span class="bold">{{ log.type }}</span><br>
                {{ log.fact }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #ffff;
    padding: 16px;
    width: 35vw;
}

.title {
    font-weight: bold;
    text-decoration: underline;
}

.bold {
    font-weight: bold;
}

.log {
    margin-top: 16px;
}

</style>