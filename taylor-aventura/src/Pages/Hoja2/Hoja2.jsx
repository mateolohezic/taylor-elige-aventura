import React from 'react'
import portada from '../../assets/caratula.jpg'

function Hoja2() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- ¡Finalmente viene a Argentina!</p>
          <p>- Mañana debo hacer la fila a primera hora.</p>
          <p>- Definitivamente no podre dormir.</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-3"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja2