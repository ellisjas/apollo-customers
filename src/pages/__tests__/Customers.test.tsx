import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'
import React from 'react'
import { getQueryMocks } from '../../mocks'
import Customers from '../Customers'

const role = 'ADMIN'

describe('pages: <Customers />', () => {
  it('renders', async () => {
    const { container } = render(
      <MockedProvider mocks={getQueryMocks(role)} addTypename={false}>
        <Customers />
      </MockedProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
