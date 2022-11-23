import React from 'react'
import Customer from '../Customer'
import { render } from '@testing-library/react'
import { ZellerCustomers } from '../../API'
import '@testing-library/jest-dom'
import { customer } from '../../mocks'

describe('components: <Customer />', () => {
  it('renders Customer', () => {
    const { container } = render(<Customer {...customer} />)
    expect(container).toMatchSnapshot()
  })
})
