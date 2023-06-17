import React from 'react'
import portada from '../../assets/Hoja125.jpg'

function Hoja125() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Llegas a la platea, la música te aturde, pero de una forma agradable.</p>
          <p>Finalmente estas aquí. Y a lo lejos.</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-16"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja125