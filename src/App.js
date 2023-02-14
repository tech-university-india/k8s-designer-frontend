import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
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
    </Routes>
  );
}

export default App;
