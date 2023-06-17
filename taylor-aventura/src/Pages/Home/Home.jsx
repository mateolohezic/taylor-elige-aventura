import React from 'react'
import './home.css'
import icono from './icono.png'

function Home() {
  return (
    <>
    <div className='contenedorTitulosHome'>
      <h2 className='subtituloHome'>Elige tu propia aventura</h2>
      <h1 className='tituloHome'>TAYLOR SWIFT</h1>
      <h2 className='subtitulo2Home'>THE ERAS TOUR</h2>
    </div>
    <div className='separacionTextosHome'></div>
    <p className='parrafoHome'>Vive la experiencia de The Eras Tour Argentina en esta apasionante historia llena de diversión, suspenso, drama, y amor.</p>
    <div className='iconoHome'><img src={icono} alt="Icono elige tu propia aventura Taylor Swift" /></div>
    <div className='botonEmpezar'><a href="/Inicio"><button>COMENZAR</button></a></div>
    <div className='botonEmpezar'><a href="/Info"><button>INFO</button></a></div>
    <p className='fanMade'>FAN MADE</p>
    </>
  )
}

export default Home