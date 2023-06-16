import React from 'react'
import portada from '../../assets/Hoja5Final.jpg'

function Hoja5Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Te sumaste a acampar y en una pelea te rociaron gas pimienta.</p>
          <p>Vas a quedarte hospitalizada por un buen tiempo.</p>
          <p>No podrás ir.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja5Final