import React from 'react';
import { Course } from '../Course';

export const Menu = ({ menu }) => {
  
  const { starters, mains, desserts } = menu;

  return (
    <>
      <Course courseType={'Starters'} courseDetails={starters} />
      <Course courseType={'Mains'} courseDetails={mains} />
      <Course courseType={'Desserts'} courseDetails={desserts} />
    </>
  );
}