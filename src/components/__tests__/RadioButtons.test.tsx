import React from 'react'
import RadioButtons from '../RadioButtons'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockOnChange = jest.fn()

describe('components: <RadioButtons />', () => {
  it('renders RadioButtons', () => {
    const { container } = render(
      <RadioButtons value="MANAGER" onChange={mockOnChange} />
    )
    expect(container).toMatchSnapshot()
  })

  it('calls onChange function when making a selection', () => {
    render(<RadioButtons value="MANAGER" onChange={mockOnChange} />)

    screen.getByRole('radio', { name: 'Admin' }).click()

    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })
})
