<script setup lang="ts">
import { ref, type Ref } from 'vue';
import FactsCard from './components/FactsCard.vue';
import LogsCard from './components/LogsCard.vue';
import type { Category } from './services/apiService'
import { capitalizeFirstLetter } from './services/formatterService';
import { formatDate } from './services/formatterService'

interface FactLog {
  date: string,
  type: string,
  fact: string
}

const factsCategory: Category[] = ['date', 'math'];
const factsLogs: Ref<FactLog[]> = ref([]);

const logNewFact = (fact: string, category: string) => {
  const factLog: FactLog = {
    date: formatDate(new Date()),
    type: capitalizeFirstLetter(category) + ' Fact',
    fact: fact
  }

  factsLogs.value.unshift(factLog);
}
</script>

<template>
  <div class="container">
    <div class="facts-card-wrapper">
      <FactsCard
        v-for="category in factsCategory"
        :category="category"
        @new-fact="(fact) => logNewFact(fact, category)"
      />
    </div>
    <LogsCard :facts-logs="factsLogs"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-height: 60vh;
}
.facts-card-wrapper {
  margin-right: 16px;
}
.facts-card-wrapper > .card:first-child {
  margin-bottom: 16px;
}
</style>
