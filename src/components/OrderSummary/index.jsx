import React from 'react'

import { Label, OrderSummaryWrapper, SummaryDetail} from './styles'

export const OrderSummary = ({ userOneSelection, userTwoSelection }) => {
  // TODO: within the OrderSummary I would have the ability to remove items from the selection using a mutation
  // TODO: refactor to 
  return (
    <OrderSummaryWrapper>
      <Label>Dinner One Order Items:</Label>
      {userOneSelection.starters.name && <SummaryDetail>Starter: {userOneSelection.starters.name}: £{userOneSelection.starters.price.toFixed(2)}</SummaryDetail>}
      {userOneSelection.mains.name && <SummaryDetail>Main: {userOneSelection.mains.name}: £{userOneSelection.mains.price.toFixed(2)}</SummaryDetail>}
      {userOneSelection.desserts.name && <SummaryDetail>Dessert: {userOneSelection.desserts.name}: £{userOneSelection.desserts.price.toFixed(2)}</SummaryDetail>}
      <Label>Dinner Two Order Items:</Label>
      {userTwoSelection.starters.name && <SummaryDetail>Starter: {userTwoSelection.starters.name}: £{userTwoSelection.starters.price.toFixed(2)}</SummaryDetail>}
      {userTwoSelection.mains.name && <SummaryDetail>Main: {userTwoSelection.mains.name}: £{userTwoSelection.mains.price.toFixed(2)}</SummaryDetail>}
      {userTwoSelection.desserts.name && <SummaryDetail>Dessert: {userTwoSelection.desserts.name}: £{userTwoSelection.desserts.price.toFixed(2)}</SummaryDetail>}
    </OrderSummaryWrapper>
  )
}