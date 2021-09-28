import React from 'react';
import { DishWrapper } from './styles';

import { Checkbox } from '../Checkbox'


export const Dish = ({ name, price }) => {

  return (
    <>
      <DishWrapper>
        {name}: £{price}
        <Checkbox label={name}/> 
      </DishWrapper>
    </>
  );
}