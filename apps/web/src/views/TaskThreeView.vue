<template>
  <div class="task">
    <div class="task-description">
      <h2>Task 3</h2>
      This page should display the time provided by the server. The time should update every second.
      <div>
        <p>For example, the page might display:</p>
        <pre>
                The current time is: 12:34:56
            </pre>
      </div>
    </div>
    <div id="solution-3">
      <p v-if="loading">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <p v-else>The current time is: {{ currentTime }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { fetchServerTime } from '@/services/timeApi'

const currentTime = ref('')
const loading = ref(true)
const error = ref<string | null>(null)

let timerId: number | undefined

const refreshServerTime = async (): Promise<void> => {
  try {
    const response = await fetchServerTime()
    currentTime.value = response.time
    error.value = null
  } catch (caughtError) {
    error.value = caughtError instanceof Error ? caughtError.message : 'Unknown error'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  void refreshServerTime()

  timerId = window.setInterval(() => {
    void refreshServerTime()
  }, 1000)
})

onUnmounted(() => {
  if (timerId !== undefined) {
    window.clearInterval(timerId)
  }
})
</script>