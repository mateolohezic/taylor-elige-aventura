import React from 'react'
import portada from '../../assets/Hoja29Final.jpg'

function Hoja29Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Le agradeciste, y te despediste.</p>
          <p>Felicidades, viviste el mejor recuerdo de tu vida.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja29Final