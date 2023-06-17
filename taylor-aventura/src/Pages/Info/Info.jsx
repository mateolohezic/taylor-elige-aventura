import React from 'react'
import './info.css'

function Info() {

  return (
    <>
      <div className='contenedorInformación'>
        <div>Mi nombre es Mateo, tengo 21 años. Hice este juego simplemente para divertir y entretener. Me ayudas mucho si compartes a tus amigas.</div>
        {/* {/* <a href="https://www.instagram.com/mateo.lohezic/" target="_blank"><button>INSTAGRAM</button></a> */}
        <div className='correoInfo'>Correo: tayloreligetupropiaaventura@gmail.com</div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
      <div className='disclaimer'>No soy autor de ninguna imagen, y esto no tiene fines de lucro. Por cualquier problema contactarme.</div>
    </>
  )
}

export default Info