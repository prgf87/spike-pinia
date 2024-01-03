<template>
  <div class="about">
    <button class="counter-button" @click="storeCounter.increaseCount">
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>
