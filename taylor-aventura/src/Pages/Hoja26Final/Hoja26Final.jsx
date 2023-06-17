import React from 'react'
import portada from '../../assets/Hoja26Final.jpg'

function Hoja26Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Lo único que salio de tu boca fueron ruidos sin sentido.</p>
          <p>Ella pensó que te estaba dando algo por lo que llamo una ambulancia. Te retiraron del lugar en camilla.</p>
          <span className='FinPerdiste'>FIN</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja26Final