import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, it, vi } from 'vitest'

import { fetchPeople } from '@/services/peopleApi'
import TaskOneView from '@/views/TaskOneView.vue'

vi.mock('@/services/peopleApi', () => ({
  fetchPeople: vi.fn(),
}))

describe('TaskOneView', () => {
  it('loads people from API and passes them to PeopleTable', async () => {
    vi.mocked(fetchPeople).mockResolvedValue([
      { name: 'Alice', age: 25, email: 'alice@example.com' },
    ])

    const wrapper = mount(TaskOneView)

    expect(wrapper.text()).toContain('Loading...')

    await flushPromises()
    await nextTick()

    expect(fetchPeople).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('alice@example.com')
    expect(wrapper.text()).not.toContain('Loading...')
  })
})
