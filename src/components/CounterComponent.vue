<template>
  <div class="count">{{ storeCounter.count }}</div>
  <div class="count">{{ storeCounter.doubleCount }}</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>
