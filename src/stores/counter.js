import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increaseCount() {
    count.value++
  }
  function decreaseCount() {
    count.value--
  }

  const oddEven = computed(() => {
    return count.value % 2 === 0 ? 'Even' : 'Odd'
  })

  const doubleCount = computed(() => {
    return count.value * 2
  })

  return { count, increaseCount, decreaseCount, oddEven, doubleCount }
})
