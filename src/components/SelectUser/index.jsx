import React from 'react';
import { useReactiveVar } from '@apollo/client';

import { Checkbox } from '../Checkbox';
import { activeUserIdVar } from '../../cache';


export const SelectUser = () => {
  const userId = useReactiveVar(activeUserIdVar)
  console.log('userId', userId)
  return (
    <>
      <div>Select Dinner One</div>
      <Checkbox
        onSelection={() => activeUserIdVar(1)}
        isChecked={userId === 1} />
      <div>Select Dinner Two</div>
      <Checkbox
        onSelection={() => activeUserIdVar(2)}
        isChecked={userId === 2}
      />
    </>
  )
}