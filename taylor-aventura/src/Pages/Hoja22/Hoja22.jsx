import React from 'react'
import portada from '../../assets/Hoja22.jpg'

function Hoja22() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- Es un baño demasiado lindo para estar abierto al público. Mejor me apuro.</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-23"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja22