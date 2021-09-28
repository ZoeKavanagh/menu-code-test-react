import React from 'react'

import { Checkbox } from '../Checkbox'

export const SelectUser = ({ onSelectUser }) => {
  return (
    <>
      <div>Select Dinner One</div>
      <Checkbox onSelection={() => onSelectUser(1)} />
      <div>Select Dinner Two</div>
      <Checkbox onSelection={() => onSelectUser(2)} />
    </>
  )
}