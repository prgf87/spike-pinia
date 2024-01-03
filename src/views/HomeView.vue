<template>
  <div class="home">
    <!-- <h1>Home</h1> -->
    <div class="count">{{ count }}</div>
    <div class="buttons">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr />
    <div>This counter is: {{ oddEven }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const count = ref(0)

const increaseCount = () => {
  count.value++
}
const decreaseCount = () => {
  count.value--
}

const oddEven = computed(() => {
  if (count.value % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
})
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
