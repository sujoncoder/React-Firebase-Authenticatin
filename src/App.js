import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Blog from './Components/Blog';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
