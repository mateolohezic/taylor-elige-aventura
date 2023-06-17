import React from 'react'
import './hoja.css'

function Hoja1() {
  return (
    <>
      <div className='contenedorComun Hoja1'>
        <div>
          <p>- No, no lo puedo creer. Debe ser un sueño.</p>
          <p>- Todo este tiempo que paso, tantas lagrimas, tantas decepciones, pero esta vez...</p>
          <p>...es verdad</p>
        </div>
        <div className='botonEmpezar'><a href="/Hoja-2"><button type='button'>SIGUIENTE</button></a></div>
      </div>
    </>
  )
}

export default Hoja1