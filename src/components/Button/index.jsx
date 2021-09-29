import React from 'react'

import { ButtonWrapper } from './styles'

export const Button = ({ onClick, label }) => {
  return (
    <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>
  )
}