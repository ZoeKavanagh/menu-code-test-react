import React from 'react';
import { DishWrapper, DishName, DishPrice } from './styles';

import { Checkbox } from '../Checkbox'


export const Dish = ({ isChecked, name, price, onCourseSelect }) => {

  return (
    <>
      <DishWrapper>
        <DishName>{name}</DishName> <DishPrice>£{price.toFixed(2)}</DishPrice>
        <Checkbox label={name} isChecked={isChecked} onSelection={() => onCourseSelect()} /> 
      </DishWrapper>
    </>
  );
}