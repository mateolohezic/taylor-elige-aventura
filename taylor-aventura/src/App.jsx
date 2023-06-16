import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Hoja1 from './Pages/Hoja1/Hoja1';
import Home from './Pages/Home/Home';
import Inicio from './Pages/Inicio/Inicio';
import Marca from './Components/Marca/Marca';
import Hoja2 from './Pages/Hoja2/Hoja2';
import Hoja3 from './Pages/Hoja3/Hoja3';
import Hoja3Final from './Pages/Hoja3Final/Hoja3Final';
import Hoja4 from './Pages/Hoja4/Hoja4';
import Hoja5 from './Pages/Hoja5/Hoja5';
import Hoja5Final from './Pages/Hoja5Final/Hoja5Final';

function App() {

  return (
    <>
      <Marca/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Hoja-1" element={<Hoja1/>} />
        <Route path="/Hoja-2" element={<Hoja2/>} />
        <Route path="/Hoja-3" element={<Hoja3/>} />
        <Route path="/Hoja-3-Final" element={<Hoja3Final/>} />
        <Route path="/Hoja-4" element={<Hoja4/>} />
        <Route path="/Hoja-5" element={<Hoja5/>} />
        <Route path="/Hoja-5-Final" element={<Hoja5Final/>} />
        <Route path="/Hoja-6 " element={<Hoja5Final/>} />
      </Routes>
    </>
  )
}

export default App
