import React from 'react'
import portada from '../../assets/Hoja5Final.jpg'

function Hoja9() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- ¿QUÉ?¿QUIENES SON ESAS CHICAS?¿Y POR QUÉ SE ME ESTAN ADELANTANDO?</p>
          <p>Una de ellas te escucha y te responde: "Somos de la misma carpa que las que estaban en la fila".</p>
          <p>- ¿Cuantas son?</p>
          <p>- 150.</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-10"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja9