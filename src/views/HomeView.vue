<template>
  <div class="home">
    <!-- <h1>Home</h1> -->
    <div class="count">{{ count }}</div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

const increaseCount = () => {
  count.value++
}
const decreaseCount = () => {
  count.value--
}
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
