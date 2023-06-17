import React from 'react'
import portada from '../../assets/Hoja8.jpg'

function Hoja8() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- Bueno, llegue temprano. 9 de la mañana.</p>
          <p>- Solo hay 5 chicas adelante mio. Estoy muy bien.</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-9"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja8