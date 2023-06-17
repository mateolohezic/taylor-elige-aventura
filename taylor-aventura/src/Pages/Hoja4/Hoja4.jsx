import React from 'react'
import portada from '../../assets/Hoja4.jpeg'

function Hoja4() {

  const campo = () => {
    localStorage.setItem("Lugar", "campo")
    window.location.replace("/Hoja-5")
  }

  const platea = () => {
    localStorage.setItem("Lugar", "platea")
    window.location.replace("/Hoja-5")
  }

  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>- ¡Estoy adentro!</p>
          <p>- Pero solo quedan entradas para Campo Trasero, o Sívori Alta.</p>
          <p>- No son mis favoritas pero me conformo.</p>
        </div>
        <div className='botonesElegir'>
          <button type='button' onClick={platea}>PLATEA</button>
          <button type='button' onClick={campo}>CAMPO</button>
        </div>
      </div>
    </>
  )
}

export default Hoja4