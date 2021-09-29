import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { activeUserIdVar } from '../../cache';


export const SelectUser = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const userId = useReactiveVar(activeUserIdVar);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button 
        onClick={handleClick}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {`Select Dinner: Dinner ${userId} selected`}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            activeUserIdVar(1);
            handleClose()
          }}
        >
          Select Dinner One
        </MenuItem>
        <MenuItem
          onClick={() => {
            activeUserIdVar(2);
            handleClose()
          }}
        >
          Select Dinner Two
        </MenuItem>
      </Menu>
    </>
  )
}