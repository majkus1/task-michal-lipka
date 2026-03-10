<template>
  <div class="task">
    <div class="task-description">
      <h2>Task 1</h2>
      <div>
        <p>
          Write a Vue.js component that displays a list of items. The list should be displayed as a table with columns
          for name, age, and email. The component should accept an array of objects as a prop, where each object
          represents a person. The component should display each person as a row in the table.
        </p>
        <p>Data should be received from the backend.</p>
        <p>For example, given the following array of objects:</p>
        <pre>
          [
          { name: 'Alice', age: 25 }
          { name: 'Bob', age: 30 }
          { name: 'Charlie', age: 35 }
          ]
        </pre>
      </div>
    </div>
    <div id="solution-1">
      <p v-if="loading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <PeopleTable v-else :people="people" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import PeopleTable from '@/components/PeopleTable.vue'
import { fetchPeople } from '@/services/peopleApi'
import type { Person } from '@/types/person'

const people = ref<Person[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  error.value = null

  try {
    people.value = await fetchPeople()
  } catch (caughtError) {
    error.value = caughtError instanceof Error ? caughtError.message : 'Unknown error'
  } finally {
    loading.value = false
  }
})
</script>