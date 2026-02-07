<template>
  <div>
    <h1>Dog Breeds</h1>
    <ul>
      <li v-for="breed in formattedBreeds" :key="breed">
        {{ breed }} its ggoodd
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const dogData = ref({}) // raw API response

// Fetch dog breeds
onMounted(async () => {
  const url = "https://dog.ceo/api/breeds/list/all"
  try {
    const res = await fetch(url)
    const data = await res.json()
    dogData.value = data.message // only store the message object
    console.log(dogData.value)
  } catch (err) {
    console.error(err)
  }
})
 
// Format breeds (combine sub-breeds)
const formattedBreeds = computed(() => {
  const breedsObj = dogData.value
  if (!breedsObj) return []

  const allBreeds = []
  for (const [breed, subBreeds] of Object.entries(breedsObj)) {
    if (subBreeds.length === 0) {
      allBreeds.push(breed)
    } else {
      subBreeds.forEach(sub => allBreeds.push(`${sub} ${breed}`))
    }
  }
  return allBreeds
})
</script>
