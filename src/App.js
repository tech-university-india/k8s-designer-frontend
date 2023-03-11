import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import {ConfigurationPage} from './pages';
import { Button } from '@mui/material';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import {Home, About} from './components';
import { MainDashboard } from './pages';
import { Button } from '@mui/material';
import {
  ReactFlowProvider,
} from 'reactflow';

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
      
      {/* <Route path='/' element={<Header />}></Route>  */}
      <Route path='/home' element={<Home />}></Route> 
      <Route path='/about' element={<About />}></Route>
      <Route path = '/configuration' element = {<ConfigurationPage/>}></Route>
      {/* <Route path='/' element={<Footer />}></Route>  */}
      <Route path='/dashboard' element={<ReactFlowProvider><MainDashboard /></ReactFlowProvider>}></Route>
    </Routes>
  );
}

export default App;
