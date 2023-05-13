<script setup lang="ts">
const { category } = defineProps({
    category: {
        type: String,
        required: true
    }
});

</script>

<template>
    <div class="card">
        {{ category }} card
    </div>
</template>

<style scoped>
.card {
    background-color: #ffff;
    padding: 16px;
    box-shadow: 5px 5px 5px -4px rgba(0,0,0,0.54);
    border-radius: 8px;
    width: 35vw;
    min-height: 300px;
}
</style>
