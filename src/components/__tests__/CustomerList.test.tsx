import React from 'react'
import { render } from '@testing-library/react'
import CustomerList from '../CustomerList'
import { customerList } from '../../mocks'

describe('components: <CustomerList />', () => {
  it('renders', () => {
    const { container } = render(<CustomerList customers={customerList} />)

    expect(container).toMatchSnapshot()
  })
})
