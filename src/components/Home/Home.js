import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function Home() {
  return (
    <div>
      <h1 className='heading'>Home 🏠</h1>
      <div className='buttons'>
        <Link to='/' data-testid='landing'><Button variant='contained' onClick={() => {}}>Landing</Button></Link>
        <Link to='/about' data-testid='about'><Button variant='contained' onClick={() => {}}>About</Button></Link>
      </div>
    </div>
  );
}
