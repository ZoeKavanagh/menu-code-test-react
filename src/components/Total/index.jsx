import React from 'react'

import { TotalWrapper } from './styles'


export const Total = ({ amount }) => {

  return (
    <TotalWrapper>Total: £{amount.toFixed(2)}</TotalWrapper>
  )
}