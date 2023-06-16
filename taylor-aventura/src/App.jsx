import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Hoja1 from './Pages/Hoja1/Hoja1';
import Home from './Pages/Home/Home';
import Inicio from './Pages/Inicio/Inicio';
import Marca from './Components/Marca/Marca';

function App() {

  return (
    <>
      <Marca/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Hoja-1" element={<Hoja1/>} />
      </Routes>
    </>
  )
}

export default App
