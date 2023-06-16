import React from 'react'
import { useLocation } from 'react-router-dom';

function Marca() {

  const location = useLocation();

  if (location.pathname !== '/') {
    return (
      <>
          <div className='contenedorMarca'>
              <a href="/">
                  <h2 className='subtituloMarca'>Elige tu propia aventura</h2>
                  <h1 className='tituloMarca'>TAYLOR SWIFT</h1>
                  <h2 className='subtitulo2Marca'>THE ERAS TOUR</h2>
              </a>
          </div>
      </>
    )
  }
}

export default Marca