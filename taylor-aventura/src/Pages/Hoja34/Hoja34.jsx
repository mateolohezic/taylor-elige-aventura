import React from 'react'

function Hoja34() {

  const name = localStorage.getItem('name')

  return (
    <>
      <div className='contenedorComun Hoja1'>
        <div>
          <p>"{name}"</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/Fin"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja34