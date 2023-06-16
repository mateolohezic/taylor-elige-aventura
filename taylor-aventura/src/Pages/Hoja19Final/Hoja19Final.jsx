import React from 'react'
import portada from '../../assets/Hoja19Final.jpg'

function Hoja19Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Creo que no hace falta decirlo.</p>
          <p>No se si es peor la humillación de que te haya sacado la seguridad, o de haber mojado a los que estaban a tu lado.</p>
          <p>Porfavor vayan al baño antes.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja19Final