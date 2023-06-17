import React from 'react'

function Hoja11() {

  const lugar = localStorage.getItem('Lugar')

  return (
    <>
      <div className='contenedorComun Hoja1'>
        <div>
          <p>Al fin logras entrar. El concierto empezó hace 30 minutos.</p>
          <p>Corres por el pasillo, en camino a tu sector.</p>
        </div>
        {
          lugar === 'campo' ?
          <>
            <div className='botonEmpezar'><a href="/Hoja-12"><button type='button'>SIGUIENTE</button></a></div>          
          </>
          :
          <>
            <div className='botonEmpezar'><a href="/Hoja-12-5"><button type='button'>SIGUIENTE</button></a></div>                  
          </>
        }
      </div>
    </>
  )
}

export default Hoja11