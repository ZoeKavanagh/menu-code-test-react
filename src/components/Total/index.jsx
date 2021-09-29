import React from 'react'

import { TotalWrapper } from './styles'


export const Total = ({ amount }) => {
  if (amount === 0) return null
  return (
    <TotalWrapper data-testid="total">Total: £{amount.toFixed(2)}</TotalWrapper>
  )
}