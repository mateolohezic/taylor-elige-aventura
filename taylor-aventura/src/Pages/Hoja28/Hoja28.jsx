import React from 'react'
import portada from '../../assets/Hoja28.jpg'

function Hoja28() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- Oye, ten.</p>
          <p>- Muchas gracias, perdón, los nervios, je.</p>
          <p>- ¿Necesitas algo más?</p>
        </div>
        <div className='botonesElegir'>
          <a href="/Hoja-29"><button type='button'>NADA</button></a>
          <a href="/Hoja-28-Final"><button type='button'>UNA FOTO</button></a>
        </div>
      </div>
    </>
  )
}

export default Hoja28