import React from 'react'
import portada from '../../assets/Hoja17.jpg'

function Hoja17() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div className='botonEmpezar'><a href="/Hoja-18"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja17