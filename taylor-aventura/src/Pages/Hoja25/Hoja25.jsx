import React from 'react'
import portada from '../../assets/Hoja25.jpg'

function Hoja25() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div className='botonEmpezar'><a href="/Hoja-26"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja25