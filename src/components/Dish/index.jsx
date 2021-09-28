import React from 'react';
import { DishWrapper } from './styles';

import { Checkbox } from '../Checkbox'


export const Dish = ({ isChecked, name, price, onCourseSelect }) => {

  return (
    <>
      <DishWrapper>
        {name}: £{price}
        <Checkbox label={name} isChecked={isChecked} onSelection={() => onCourseSelect()} /> 
      </DishWrapper>
    </>
  );
}