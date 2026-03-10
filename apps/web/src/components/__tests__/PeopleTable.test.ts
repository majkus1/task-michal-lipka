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

  it('renders one table row for each person', () => {
    const wrapper = mount(PeopleTable, {
      props: {
        people: [
          { name: 'Alice', age: 25, email: 'alice@example.com' },
          { name: 'Bob', age: 30, email: 'bob@example.com' },
        ],
      },
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows).toHaveLength(2)
    expect(rows[0]?.text()).toContain('Alice')
    expect(rows[0]?.text()).toContain('25')
    expect(rows[0]?.text()).toContain('alice@example.com')
    expect(rows[1]?.text()).toContain('Bob')
    expect(rows[1]?.text()).toContain('30')
    expect(rows[1]?.text()).toContain('bob@example.com')
  })

  it('renders "No data" when people list is empty', () => {
    const wrapper = mount(PeopleTable, {
      props: {
        people: [],
      },
    })

    expect(wrapper.text()).toContain('No data')
    expect(wrapper.findAll('tbody tr')).toHaveLength(1)
  })
})
