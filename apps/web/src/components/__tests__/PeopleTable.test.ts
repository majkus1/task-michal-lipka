import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PeopleTable from '@/components/PeopleTable.vue'

describe('PeopleTable', () => {
  it('renders table headers: Name, Age, Email', () => {
    const wrapper = mount(PeopleTable, {
      props: {
        people: [],
      },
    })

    const headers = wrapper.findAll('th').map((header) => header.text())
    expect(headers).toEqual(['Name', 'Age', 'Email'])
  })
})
