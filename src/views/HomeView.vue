<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr />
    <div>This counter is: {{ storeCounter.oddEven }}</div>
    <hr />
    <div>
      <h3>Edit counter</h3>
      <input v-model="storeCounter.count" type="number" />
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import Counter from '@/components/Counter.vue'

const storeCounter = useCounterStore()
</script>

<style>
.count {
  font-size: 30px;
  margin-top: 10px;
}
.buttons {
  font-size: 30px;
  /* padding: 10px; */
}
</style>
