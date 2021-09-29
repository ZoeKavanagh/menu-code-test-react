import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client'

import { Dish } from '../Dish';
import { CourseName } from './styles';
import { activeUserIdVar } from '../../cache'

export const Course = ({ courseType, courseDetails, onCourseSelect }) => {
  const activeUser = useReactiveVar(activeUserIdVar)
  console.log('activeUser: ', activeUser)
  const [selectedCourse, setSelectedCourse] = useState({ courseType, id: undefined, name: undefined, price: 0, activeUserId: 1});

  const onSelect = (id, name, price) => {
    if (selectedCourse?.id === id && activeUser === selectedCourse.activeUserId) {
      setSelectedCourse({ courseType, id: undefined, name: undefined, price: 0 })
      onCourseSelect(courseType, undefined, undefined, 0)
    } else {
      setSelectedCourse({ courseType, id, name, price, activeUserId: activeUser })
      console.log('selectedCourse - afterSet', selectedCourse)
      onCourseSelect(courseType, id, name, price)
    }
  };

  return (
    <>
      <CourseName>
        {courseType.charAt(0).toUpperCase() + courseType.slice(1)}:
      </CourseName>
      {
        courseDetails.map(({ id, name, price }) => {
          return <Dish key={id} name={name} price={price} isChecked={id === selectedCourse.id} onCourseSelect={() => onSelect(id, name, price)} />
        })
      }
    </>
  );
}