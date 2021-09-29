import React, { useState, useEffect } from 'react';

import { Course } from '../Course';
import { Total } from '../Total';
import { ErrorMessage } from '../ErrorMessage';
import { Button } from '../Button';
import { OrderSummary } from '../OrderSummary';

import { getErrorMessage } from '../../utils';
import { STARTERS, MAINS, DESSERTS } from '../../constants';

export const Menu = ({ menu, isUser1 }) => {
  //TODO: store user selections with ApolloClient
  const [user1Selection, setUser1Selection] = useState({ starters: { name: undefined, price: 0 }, mains: { name: undefined, price: 0 }, desserts: { name: undefined, price: 0 }})
  const [user2Selection, setUser2Selection] = useState({ starters: { name: undefined, price: 0 }, mains: { name: undefined, price: 0 }, desserts: { name: undefined, price: 0 }})
  const [showOrderSummary, setShowOrderSummary] = useState(false)

  //TODO: store error messages with ApolloClient and allow for more than error to be showed at once
  const [error, setError] = useState(undefined)

  const { starters, mains, desserts } = menu;

  const updateUser1MenuSelection = (courseType, id, name, price) => {
      setUser1Selection(prevState => ({
        ...prevState,
        [courseType]: { id, name, price },
      }))
      getErrorMessage(user1Selection, user2Selection, setError)
  }

  const updateUser2MenuSelection = ( courseType, id, name, price) => {
      setUser2Selection(prevState => ({
        ...prevState,
        [courseType]: { id, name, price },
      }))
      getErrorMessage(user1Selection, user2Selection, setError)
  }

  const getAmount = () => {
    const totalUser1Menu = user1Selection.starters.price + user1Selection.mains.price + user1Selection.desserts.price
    const totalUser2Menu = user2Selection.starters.price + user2Selection.mains.price + user2Selection.desserts.price
    return  totalUser1Menu + totalUser2Menu
  }

  useEffect(() => {
   getErrorMessage(user1Selection, user2Selection, setError)
  }, [user1Selection, user2Selection])

  return (
    <>
      <Course courseType={STARTERS} courseDetails={starters} onCourseSelect={isUser1 ? updateUser1MenuSelection : updateUser2MenuSelection} />
      <Course courseType={MAINS} courseDetails={mains} onCourseSelect={isUser1 ? updateUser1MenuSelection : updateUser2MenuSelection} />
      <Course courseType={DESSERTS} courseDetails={desserts} onCourseSelect={isUser1 ? updateUser1MenuSelection : updateUser2MenuSelection} />
      <Button label={'Save Selection'} onClick={() => setShowOrderSummary(true)}/>
      {showOrderSummary && <OrderSummary data-testid="order-summary" userOneSelection={user1Selection} userTwoSelection={user2Selection} />}
      <Total amount={getAmount()} />
      {error && <ErrorMessage errorMessage={error} />}
    </>
  );
}