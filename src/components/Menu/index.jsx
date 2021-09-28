import React, { useState } from 'react';
import { Course } from '../Course';
import { Total } from '../Total'

export const Menu = ({ menu, userId }) => {
  const [user1Selection, setUser1Selection] = useState({ Starters: { name: '', price: 0 }, Mains: { name: '', price: 0 }, Desserts: { name: '', price: 0 }})
  const [user2Selection, setUser2Selection] = useState({ Starters: { name: '', price: 0 }, Mains: { name: '', price: 0 }, Desserts: { name: '', price: 0 }})
  
  const { starters, mains, desserts } = menu;

  const onUserMenuSelect = (courseType, id, name, price) => {
    userId === 1 ?
      setUser1Selection(prevState => ({
        ...prevState,
        [courseType]: { id, name, price },
      }))
    : 
      setUser2Selection(prevState => ({
      ...prevState,
      [courseType]: { id, name, price },
    }))
  }

  const getAmount = () => {
    const { Starters, Mains, Desserts } = user1Selection
    // const { Starters, Mains, Desserts } = user2Selection
    
    return  Starters.price + Mains.price + Desserts.price
  }

  console.log('user1Selection: ', user1Selection)

  return (
    <>
      <Course courseType={'Starters'} courseDetails={starters} onCourseSelect={onUserMenuSelect} />
      <Course courseType={'Mains'} courseDetails={mains} onCourseSelect={onUserMenuSelect} />
      <Course courseType={'Desserts'} courseDetails={desserts} onCourseSelect={onUserMenuSelect} />
      <Total amount={getAmount()} />
    </>
  );
}