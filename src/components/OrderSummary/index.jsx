import React from 'react'

export const OrderSummary = ({ userOneSelection, userTwoSelection }) => {
  // within the OrderSummary I would have the ability to remove items from the selection using a mutation
  return (
    <>
      <div>Dinner One Order Items:</div>
      {userOneSelection.starters.name && <div>Starter: {userOneSelection.starters.name}: {userOneSelection.starters.price}</div>}
      {userOneSelection.mains.name && <div>Main: {userOneSelection.mains.name}: {userOneSelection.mains.price}</div>}
      {userOneSelection.desserts.name && <div>Dessert: {userOneSelection.desserts.name}: {userOneSelection.desserts.price}</div>}
      <div>Dinner Two Order Items:</div>
      {userTwoSelection.starters.name && <div>Starter: {userTwoSelection.starters.name}: {userTwoSelection.starters.price}</div>}
      {userTwoSelection.mains.name && <div>Main: {userTwoSelection.mains.name}: {userTwoSelection.mains.price}</div>}
      {userTwoSelection.desserts.name && <div>Dessert: {userTwoSelection.desserts.name}: {userTwoSelection.desserts.price}</div>}
      <div>Starter:</div>
    </>
  )
}