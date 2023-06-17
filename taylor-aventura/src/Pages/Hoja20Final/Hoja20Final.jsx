import React from 'react'
import portada from '../../assets/Hoja20Final.jpg'

function Hoja20Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Felicidades, ya te sientes mejor.</p>
          <p>Pero cuando la fila termino, el show también lo hizo.</p>
          <p>Vete a casa.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja20Final