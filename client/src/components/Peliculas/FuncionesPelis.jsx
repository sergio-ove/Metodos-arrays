import React from 'react'
import { NavLink } from 'react-router-dom'
import { PrimerosVeintePelis } from './PrimerosVeintePelis'
import { OrdenarPelis } from './OrdenarPelis'
import { MostrarPelis} from './MostrarPelis'
import { PelisPorAntiguedad } from './PelisPorsAntiguedad'


export const FuncionesPelis = () => {
  return (
    <div>
      
      <div>

        <div className='divFunciones'>
          
          <MostrarPelis></MostrarPelis>
          <OrdenarPelis></OrdenarPelis>
          <PrimerosVeintePelis></PrimerosVeintePelis>
          <PelisPorAntiguedad></PelisPorAntiguedad>

        </div>

      </div>

      <div className='divButVolver'>
        <NavLink to="/" > <button className='butVolver'>Volver</button> </NavLink>
      </div>

    </div>
  )
}
