<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchRandomFactBy } from '../services/apiService'

type SetRandomFact = (category: string) => Promise<void>;

const { category } = defineProps({
    category: {
        type: String,
        required: true
    }
});

const emit = defineEmits<{
    (e: 'newFact', val: string): void
}>()

const fact = ref('');

const setRandomFact: SetRandomFact = async (category: string) => {
    fact.value = await fetchRandomFactBy(category);
    emit('newFact', fact.value);
};

onMounted(async () => {
    setRandomFact(category);
})

</script>

<template>
    <div class="card">
        <div class="header">
            <span class="header-text">A cool <span class="category">{{ category }}</span> Fact</span>
            <span class="refresh-button" @click="setRandomFact(category)">Refresh</span>
        </div>

        {{ fact }}
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

.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.refresh-button {
    padding: 4px 8px;
    cursor: pointer;
    background-color: rgb(175, 99, 99);
    color: white;
    font-weight: bold;
    border-radius: 4px;
}
</style>
