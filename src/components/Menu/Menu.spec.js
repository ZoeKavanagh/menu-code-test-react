import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Menu } from '../Menu'
import { LIMITED_DISH_ID } from '../../constants'

//TODO: add more tests - if I had more time I would add more tests to this spec file
// such as testing the different invalid menu options etc

const mockMenu = {
  starters: [{ name: 'bakedBeans', price: 4, id: '1' }, { name: 'smokedSamon', price: 10, id: '2' }],
  mains:  [{ name: 'pizza', price: 15, id: '3' }, { name: 'pasta', price: 12, id: '4' }],
  desserts:  [{ name: 'appleCrumble', price: 15, id: '5' }, { name: 'cheeseCake', price: 12, id:  LIMITED_DISH_ID}],
}

describe('Menu', () => {
  it('should render the courses correctly', () => {
    render(<Menu menu={mockMenu} />)

  
  expect(screen.queryByText('Starters:')).toBeInTheDocument()
  expect(screen.queryByText('Mains:')).toBeInTheDocument()
  expect(screen.queryByText('Desserts:')).toBeInTheDocument()
  expect(screen.queryByText(mockMenu.starters[0].name)).toBeInTheDocument()
  expect(screen.queryByText('£4.00')).toBeInTheDocument()
  })

  it('should render the Save Selection button', () => {
    render(<Menu menu={mockMenu} />)

  expect(screen.getByTestId('button')).toBeInTheDocument()
  expect(screen.getByTestId('button')).toHaveTextContent('Save Selection')
  })

  it('should render the OrderSummary when Save Selection button is clicked', () => {
    render(<Menu menu={mockMenu} />)

    const saveButton = screen.getByTestId('button')

    expect(screen.queryByTestId('order-summary')).not.toBeInTheDocument()
    userEvent.click(saveButton)
    expect(screen.getByTestId('order-summary')).toBeInTheDocument()
  })

  it('should render the Total when an item has been selected', () => {
    render(<Menu menu={mockMenu} />)

    const checkbox = screen.getByTestId('bakedBeans-checkbox')

    expect(screen.queryByTestId('total')).not.toBeInTheDocument()
    userEvent.click(checkbox)
    expect(screen.getByTestId('total')).toBeInTheDocument()
    expect(screen.getByTestId('total')).toHaveTextContent('Total: £4.00')
  })

  it('should render an error message when a main and starter are selected', () => {
      render(<Menu menu={mockMenu} isUser1={true} />)

    const checkbox = screen.getByTestId('cheeseCake-checkbox')
    const checkbox2 = screen.getByTestId('bakedBeans-checkbox')
    const saveButton = screen.getByTestId('button')

    userEvent.click(checkbox)
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument() 
    userEvent.click(checkbox2)
    userEvent.click(saveButton)
    expect(screen.getByTestId('error-message')).toBeInTheDocument()
    expect(screen.getByTestId('error-message')).toHaveTextContent('You must select either a starter and a main course or a dessert and main course')
  })
})