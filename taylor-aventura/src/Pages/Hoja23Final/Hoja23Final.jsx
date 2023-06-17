import React from 'react'
import portada from '../../assets/Hoja23Final.jpg'

function Hoja23Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Llamaron a seguridad.</p>
          <p>Te procesaron por allanamiento a la propiedad ajena y evasión de impuestos.</p>
          <p>Hubieras hecho la fila como todas las demás.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja23Final