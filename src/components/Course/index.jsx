import React from 'react';

import { Dish } from '../Dish';
import { CourseName } from './styles';

export const Course = ({ courseType, courseDetails }) => {
  console.log('CourseType: ', courseType)
  console.log('CourseDetails: ', courseDetails)
  return (
    <>
      <CourseName>
        {courseType}:
      </CourseName>
      {
        courseDetails.map(({ id, name, price }) => {
          return <Dish key={id} name={name} price={price} />
        })
      }
    </>
  );
}