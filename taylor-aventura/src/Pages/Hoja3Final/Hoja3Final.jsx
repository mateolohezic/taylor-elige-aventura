import React from 'react'
import portada from '../../assets/Hoja3Final.jpeg'

function Hoja3Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>No lo conseguiste.</p>
          <p>Ninguna de tus filas avanzo, y las entradas se agotaron.</p>
          <p>Es el fin. No podrás ir.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja3Final