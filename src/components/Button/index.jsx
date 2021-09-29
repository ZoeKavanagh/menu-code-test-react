import React from 'react'

import { ButtonWrapper } from './styles'

export const Button = ({ onClick, label }) => {
  return (
    <ButtonWrapper data-testid="button" onClick={onClick}>{label}</ButtonWrapper>
  )
}