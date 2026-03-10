<script setup lang="ts">
import type { Person } from '@/types/person'

defineProps<{
  people: Person[]
}>()
</script>

<template>
  <table class="people-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
  </table>
</template>

<style scoped>
.people-table {
  width: 100%;
  border-collapse: collapse;
}

.people-table th,
.people-table td {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  text-align: left;
}
</style>
