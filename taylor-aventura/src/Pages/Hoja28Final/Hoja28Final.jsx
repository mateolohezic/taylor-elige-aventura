import React from 'react'
import portada from '../../assets/Hoja28Final.jpg'

function Hoja28Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Tomas la foto, y te despides.</p>
          <p>Deberías concentrarte más en vivir el momento.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja28Final