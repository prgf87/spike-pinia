<template>
  <div class="home">
    <!-- <h1>Home</h1> -->
    <div class="count">{{ storeCounter.count }}</div>
    <div class="count">{{ storeCounter.doubleCount }}</div>
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
