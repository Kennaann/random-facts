<script setup lang="ts">
import FactsCard from './components/FactsCard.vue';
import LogsCard from './components/LogsCard.vue';

const factsCategory = ['date', 'math'];
</script>

<template>
  <div class="container">
    <div class="facts-card-wrapper">
      <FactsCard v-for="category in factsCategory" :category="category" />
    </div>
    <LogsCard />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.facts-card-wrapper {
  margin-right: 16px;
}
.facts-card-wrapper > .card:first-child {
  margin-bottom: 16px;
}
</style>
