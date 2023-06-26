import React from 'react'
import { Peliculas } from './Peliculas'
import { NavLink } from 'react-router-dom'
import { PrimerosVeintePelis } from './PrimerosVeintePelis'
import { PelisReleaseYear } from './PelisReleaseYear'
import { OrdenarPelis } from './OrdenarPelis'


export const FuncionesPelis = () => {
  return (
    <div>
      
      <div>

        <div className='divFunciones'>
          <Peliculas></Peliculas>
          <OrdenarPelis></OrdenarPelis>
          <PrimerosVeintePelis></PrimerosVeintePelis>
          <PelisReleaseYear></PelisReleaseYear>

        </div>

      </div>

      <div className='divButVolver'>
        <NavLink to="/" > <button className='butVolver'>Volver</button> </NavLink>
      </div>

    </div>
  )
}
