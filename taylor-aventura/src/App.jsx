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
import Hoja20 from './Pages/Hoja20/Hoja20';
import Hoja20Final from './Pages/Hoja20Final/Hoja20Final';
import Hoja21 from './Pages/Hoja21/Hoja21';
import Hoja22 from './Pages/Hoja22/Hoja22';
import Hoja23 from './Pages/Hoja23/Hoja23';
import Hoja23Final from './Pages/Hoja23Final/Hoja23Final';
import Hoja24 from './Pages/Hoja24/Hoja24';
import Hoja25 from './Pages/Hoja25/Hoja25';
import Hoja26 from './Pages/Hoja26/Hoja26';
import Hoja26Final from './Pages/Hoja26Final/Hoja26Final';
import Hoja27 from './Pages/Hoja27/Hoja27';
import Hoja275 from './Pages/Hoja27-5/Hoja27-5';
import Hoja28 from './Pages/Hoja28/Hoja28';
import Hoja28Final from './Pages/Hoja28Final/Hoja28Final';
import Hoja29 from './Pages/Hoja29/Hoja29';
import Hoja29Final from './Pages/Hoja29Final/Hoja29Final';
import Hoja30 from './Pages/Hoja30/Hoja30';
import Hoja31 from './Pages/Hoja31/Hoja31';
import Hoja32 from './Pages/Hoja32/Hoja32';
import Hoja33 from './Pages/Hoja33/Hoja33';
import Hoja34 from './Pages/Hoja34/Hoja34';
import Final from './Pages/Final/Final';
import Info from './Pages/Info/Info';
import Hoja75 from './Pages/Hoja7medio/Hoja7medio';

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
        <Route path="/Hoja-7-5" element={<Hoja75/>} />
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
        <Route path="/Hoja-20" element={<Hoja20/>} />
        <Route path="/Hoja-20-Final" element={<Hoja20Final/>} />
        <Route path="/Hoja-21" element={<Hoja21/>} />
        <Route path="/Hoja-22" element={<Hoja22/>} />
        <Route path="/Hoja-23" element={<Hoja23/>} />
        <Route path="/Hoja-23-Final" element={<Hoja23Final/>} />
        <Route path="/Hoja-24" element={<Hoja24/>} />
        <Route path="/Hoja-25" element={<Hoja25/>} />
        <Route path="/Hoja-26" element={<Hoja26/>} />
        <Route path="/Hoja-26-Final" element={<Hoja26Final/>} />
        <Route path="/Hoja-27" element={<Hoja27/>} />
        <Route path="/Hoja-27-5" element={<Hoja275/>} />
        <Route path="/Hoja-28" element={<Hoja28/>} />
        <Route path="/Hoja-28-Final" element={<Hoja28Final/>} />
        <Route path="/Hoja-29" element={<Hoja29/>} />
        <Route path="/Hoja-29-Final" element={<Hoja29Final/>} />
        <Route path="/Hoja-30" element={<Hoja30/>} />
        <Route path="/Hoja-31" element={<Hoja31/>} />
        <Route path="/Hoja-32" element={<Hoja32/>} />
        <Route path="/Hoja-33" element={<Hoja33/>} />
        <Route path="/Hoja-34" element={<Hoja34/>} />
        <Route path="/Fin" element={<Final/>} />
        <Route path="/Info" element={<Info/>} />
      </Routes>
    </>
  )
}

export default App
