import React from 'react';
import './Header.css';
import { Avatar, Button } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        K8D
      </div>
      <div className='user'>
        <Avatar alt='user' className='avatar'/>
        <Button variant='outlined'>Logout</Button>
      </div>
    </div>
  );
};

export default Header;