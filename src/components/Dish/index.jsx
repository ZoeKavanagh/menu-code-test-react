import React from 'react';
import { DishWrapper } from './styles';


export const Dish = ({ name, price }) => {

  return (
    <>
      <DishWrapper>
        {name}: £{price}
      </DishWrapper>
    </>
  );
}