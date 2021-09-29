import React from 'react'

import { ErrorMessageWrapper } from './styles'


export const ErrorMessage = ({ errorMessage }) => {
  return (
    <ErrorMessageWrapper data-testid="error-message">{errorMessage}</ErrorMessageWrapper>
  )
}