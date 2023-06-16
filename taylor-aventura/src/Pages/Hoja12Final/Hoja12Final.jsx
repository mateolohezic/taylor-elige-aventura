import React from 'react'
import portada from '../../assets/Hoja12Final.jpg'

function Hoja12Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Intentaste alejarte del pogo, pero no lo conseguiste.</p>
          <p>La avalancha de animales te aplasto.</p>
          <p>Quedaste como... mejor prefiero no entrar en detalles.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja12Final