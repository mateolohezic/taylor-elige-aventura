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
import Hoja6 from './Pages/Hoja6/Hoja6';
import Hoja7 from './Pages/Hoja7/Hoja7';
import Hoja8 from './Pages/Hoja8/Hoja8';
import Hoja9 from './Pages/Hoja9/Hoja9';
import Hoja10 from './Pages/Hoja10/Hoja10';
import Hoja10Final from './Pages/Hoja10Final/Hoja10Final';
import Hoja11 from './Pages/Hoja11/Hoja11';
import Hoja12 from './Pages/Hoja12/Hoja12';
import Hoja12Final from './Pages/Hoja12Final/Hoja12Final';
import Hoja13 from './Pages/Hoja13/Hoja13';
import Hoja14 from './Pages/Hoja14/Hoja14';
import Hoja15 from './Pages/Hoja15/Hoja15';
import Hoja16 from './Pages/Hoja16/Hoja16';
import Hoja17 from './Pages/Hoja17/Hoja17';
import Hoja18 from './Pages/Hoja18/Hoja18';
import Hoja19 from './Pages/Hoja19/Hoja19';
import Hoja19Final from './Pages/Hoja19Final/Hoja19Final';

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
        <Route path="/Hoja-6" element={<Hoja6/>} />
        <Route path="/Hoja-7" element={<Hoja7/>} />
        <Route path="/Hoja-8" element={<Hoja8/>} />
        <Route path="/Hoja-9" element={<Hoja9/>} />
        <Route path="/Hoja-10" element={<Hoja10/>} />
        <Route path="/Hoja-10-Final" element={<Hoja10Final/>} />
        <Route path="/Hoja-11" element={<Hoja11/>} />
        <Route path="/Hoja-12" element={<Hoja12/>} />
        <Route path="/Hoja-12-Final" element={<Hoja12Final/>} />
        <Route path="/Hoja-13" element={<Hoja13/>} />
        <Route path="/Hoja-14" element={<Hoja14/>} />
        <Route path="/Hoja-15" element={<Hoja15/>} />
        <Route path="/Hoja-16" element={<Hoja16/>} />
        <Route path="/Hoja-17" element={<Hoja17/>} />
        <Route path="/Hoja-18" element={<Hoja18/>} />
        <Route path="/Hoja-19" element={<Hoja19/>} />
        <Route path="/Hoja-19-Final" element={<Hoja19Final/>} />
      </Routes>
    </>
  )
}

export default App
