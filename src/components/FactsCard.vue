<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ArrowDown from './icons/ArrowDown.vue';
import { fetchRandomFactBy } from '../services/apiService'
import { capitalizeFirstLetter } from '../services/formatterService'

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
            <span class="header-text">A cool <span class="category">{{ capitalizeFirstLetter(category) }}</span> Fact</span>
            <span class="refresh-button" @click="setRandomFact(category)">
                <ArrowDown />
            </span>
        </div>

        <p class="fact">{{ fact }}</p>
    </div>
</template>

<style scoped>
.card {
    background-color: #ffff;
    padding: 16px;
    box-shadow: 5px 5px 5px -4px rgba(0,0,0,0.54);
    border-radius: 8px;
    width: 30vw;
    min-height: 300px;
}

.header {
    display: flex;
    justify-content: space-between;
}

.refresh-button {
    padding: 8px;
    height: 46px;
    cursor: pointer;
    background-color: rgb(175, 99, 99);
    color: black;
    border: 3px black solid;
    font-weight: bold;
    border-radius: 50%;
}

.category {
    font-weight: bold;
    text-decoration: underline;
}

.fact {
    font-weight: bold;
    margin-top: 16px
}
</style>
