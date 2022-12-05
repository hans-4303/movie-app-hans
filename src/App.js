import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/movie-detail' element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;