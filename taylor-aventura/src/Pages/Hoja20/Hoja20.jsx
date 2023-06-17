import React from 'react'
import portada from '../../assets/Hoja20.jpeg'

function Hoja20() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- Ahi esta el baño.</p>
          <p>- Ugh, la fila es demasiado larga.</p>
        </div>
        <div className='botonesElegir'>
          <a href="/Hoja-20-Final"><button type='button'>ESPERAR</button></a>
          <a href="/Hoja-21"><button type='button'>IRSE</button></a>
        </div>
      </div>
    </>
  )
}

export default Hoja20