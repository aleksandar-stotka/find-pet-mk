<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Counter: {{ counter.count }}</h1>
    <p>Double: {{ counter.doubleCount }}</p>

    <div class="mt-4 space-x-2">
      <button @click="counter.increment" class="px-3 py-1 bg-green-600 text-white rounded">+</button>
      <button @click="counter.decrement" class="px-3 py-1 bg-red-600 text-white rounded">-</button>
    </div>
  </div>
</template>

<script setup>
import { useCategory } from '@/stores/useCategory'
const counter = useCategory()
</script>
