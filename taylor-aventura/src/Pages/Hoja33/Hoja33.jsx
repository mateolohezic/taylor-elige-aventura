import React from 'react'
import portada from '../../assets/Hoja33.jpg'

function Hoja33() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- ¿Qué?</p>
          <p>- Una notificación, parece que es una nueva canción.</p>
          <p>- Y su nombre es...</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-34"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja33