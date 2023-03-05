import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import {Home, About} from './components';
import { MainDashboard } from './pages';
import { Button } from '@mui/material';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div className='App'>
        <h1 className='heading'>HELLO 👋, WORLD 🌏!</h1>
        <div className='buttons'>
          <Link to='/home'><Button variant='contained'>Home</Button></Link>
          <Link to='/about'><Button variant='contained'>About</Button></Link>
        </div>
      </div>}></Route>
      <Route path='/home' element={<Home />}></Route> 
      <Route path='/about' element={<About />}></Route>
      <Route path='/dashboard' element={<MainDashboard />}></Route>
    </Routes>
  );
}

export default App;
