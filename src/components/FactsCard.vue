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
const fact = ref('');

const setRandomFact: SetRandomFact = async (category: string) => {
    fact.value = await fetchRandomFactBy(category)
};

onMounted(async () => {
    setRandomFact(category);
})

</script>

<template>
    <div class="card">
        <div class="header">
            A cool <span class="category">{{ category }}</span> Fact
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
</style>
