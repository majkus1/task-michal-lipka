import type { Person } from '@/types/person'

export async function fetchPeople(): Promise<Person[]> {
  const response = await fetch('/api/task-1/people')

  if (!response.ok) {
    throw new Error(`Failed to fetch people (HTTP ${response.status})`)
  }

  const data: Person[] = await response.json()
  return data
}
