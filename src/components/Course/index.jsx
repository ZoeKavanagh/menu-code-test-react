import React, { useState } from 'react';

import { Dish } from '../Dish';
import { CourseName } from './styles';

export const Course = ({ courseType, courseDetails, onCourseSelect }) => {
  const [selectedCourse, setSelectedCourse] = useState({ courseType: courseType, id: '', name: '', price: 0 })

  const onSelect = (id, name, price) => {
    setSelectedCourse({ courseType, id, name, price })
    onCourseSelect(courseType, id, name, price)
  }

  return (
    <>
      <CourseName>
        {courseType}:
      </CourseName>
      {
        courseDetails.map(({ id, name, price }) => {
          return <Dish key={id} name={name} price={price} isChecked={id === selectedCourse.id} onCourseSelect={() => onSelect(id, name, price)} />
        })
      }
    </>
  );
}