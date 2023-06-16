import React from 'react'
import portada from '../../assets/Hoja12.jpeg'

function Hoja12() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Llegas al campo, y la música te aturde, pero de una forma agradable.</p>
          <p>¿Que veo? A lo lejos, un pogo se empieza a formar.</p>
        </div>
        <div className='botonesElegir'>
          <a href="/Hoja-13"><button type='button'>SUMARSE</button></a>
          <a href="/Hoja-12-Final"><button type='button'>ALEJARSE</button></a>
        </div>
      </div>
    </>
  )
}

export default Hoja12