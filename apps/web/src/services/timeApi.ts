import type { ServerTimeResponse } from '@/types/serverTime'

export async function fetchServerTime(): Promise<ServerTimeResponse> {
  const response = await fetch('/api/task-3/time')

  if (!response.ok) {
    throw new Error(`Failed to fetch server time (HTTP ${response.status})`)
  }

  const data: ServerTimeResponse = await response.json()
  return data
}
