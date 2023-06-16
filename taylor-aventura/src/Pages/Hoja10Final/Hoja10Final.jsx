import React from 'react'
import portada from '../../assets/Hoja10Final.jpg'

function Hoja10Final() {
  return (
    <>
      <div className='contenedorComun HojaComun'>
        <img src={portada} className="portadaHoja2" alt="The Eras Tour Argentina" />
        <div>
          <p>Intentaste abrirte paso entre las carpas, pero si dieron cuenta.</p>
          <p>Una de ellas se acerco y te atacó con gas pimienta.</p>
          <p>Estaras hospitalizada por un tiempo. No podras ir.</p>
          <span className='FinPerdiste'>FIN</span>
          <span className="aclaracionFinal">(Tu atacante si vivió el show)</span>
        </div>
        <div className='botonEmpezar'><a href="/"><button type='button'>INICIO</button></a></div>
      </div>
    </>
  )
}

export default Hoja10Final