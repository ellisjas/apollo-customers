import { MockedProvider } from '@apollo/client/testing'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { getQueryMocks } from '../../mocks'
import CustomerListContainer from '../CustomerListContainer'
import '@testing-library/jest-dom'

let role = 'ADMIN'

describe('components: <CustomerListContainer />', () => {
  it('renders loading state', async () => {
    render(
      <MockedProvider mocks={getQueryMocks(role)} addTypename={false}>
        <CustomerListContainer role={role} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('loading-state')).toBeVisible()
  })

  describe('when different roles', () => {
    describe('admin', () => {
      it('lists admin customers', async () => {
        render(
          <MockedProvider mocks={getQueryMocks(role)} addTypename={false}>
            <CustomerListContainer role={role} />
          </MockedProvider>
        )

        expect(
          await screen.findByRole('heading', { name: 'Admin Users' })
        ).toBeVisible()
      })
    })

    describe('manager', () => {
      let role = 'MANAGER'

      it('lists manager customers', async () => {
        render(
          <MockedProvider mocks={getQueryMocks(role)} addTypename={false}>
            <CustomerListContainer role={role} />
          </MockedProvider>
        )

        expect(
          await screen.findByRole('heading', { name: 'Manager Users' })
        ).toBeVisible()
      })
    })
  })

  describe('when error is thrown from customers query', () => {
    it('renders error message', async () => {
      render(
        <MockedProvider mocks={getQueryMocks(role, true)} addTypename={false}>
          <CustomerListContainer role={role} />
        </MockedProvider>
      )

      expect(
        await screen.findByRole('heading', { name: 'Something went wrong.' })
      ).toBeVisible()
    })
  })
})
