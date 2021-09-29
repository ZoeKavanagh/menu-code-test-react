import React, { useState, useEffect } from 'react';

import { Course } from '../Course';
import { Total } from '../Total';
import { ErrorMessage } from '../ErrorMessage';
import { Button } from '../Button';
import { OrderSummary } from '../OrderSummary';

import { getErrorMessage } from '../../utils';
import { STARTERS, MAINS, DESSERTS } from '../../constants';

export const Menu = ({ menu, isUserOne }) => {
  //TODO: store user selections with ApolloClient
  const [userOneSelection, setUser1Selection] = useState({ starters: { name: undefined, price: 0 }, mains: { name: undefined, price: 0 }, desserts: { name: undefined, price: 0 }})
  const [userTwoSelection, setUser2Selection] = useState({ starters: { name: undefined, price: 0 }, mains: { name: undefined, price: 0 }, desserts: { name: undefined, price: 0 }})
  const [showOrderSummary, setShowOrderSummary] = useState(false)

  //TODO: store error messages with ApolloClient and allow for more than error to be showed at once
  const [error, setError] = useState(undefined)

  const { starters, mains, desserts } = menu;

  const updateUserOneMenuSelection = (courseType, id, name, price) => {
      setUser1Selection(prevState => ({
        ...prevState,
        [courseType]: { id, name, price },
      }))
      getErrorMessage(userOneSelection, userTwoSelection, setError)
  }

  const updateUserTwoMenuSelection = ( courseType, id, name, price) => {
      setUser2Selection(prevState => ({
        ...prevState,
        [courseType]: { id, name, price },
      }))
      getErrorMessage(userOneSelection, userTwoSelection, setError)
  }

  const getAmount = () => {
    const totalUserOneMenu = userOneSelection.starters.price + userOneSelection.mains.price + userOneSelection.desserts.price
    const totalUserTwoMenu = userTwoSelection.starters.price + userTwoSelection.mains.price + userTwoSelection.desserts.price
    return  totalUserOneMenu + totalUserTwoMenu
  }

  useEffect(() => {
   getErrorMessage(userOneSelection, userTwoSelection, setError)
  }, [userOneSelection, userTwoSelection])

  return (
    <>
      <Course courseType={STARTERS} courseDetails={starters} onCourseSelect={isUserOne ? updateUserOneMenuSelection : updateUserTwoMenuSelection} />
      <Course courseType={MAINS} courseDetails={mains} onCourseSelect={isUserOne ? updateUserOneMenuSelection : updateUserTwoMenuSelection} />
      <Course courseType={DESSERTS} courseDetails={desserts} onCourseSelect={isUserOne ? updateUserOneMenuSelection : updateUserTwoMenuSelection} />
      <Button label={'Save Selection'} onClick={() => setShowOrderSummary(true)}/>
      {showOrderSummary && <OrderSummary userOneSelection={userOneSelection} userTwoSelection={userTwoSelection} />}
      <Total amount={getAmount()} />
      {error && <ErrorMessage errorMessage={error} />}
    </>
  );
}