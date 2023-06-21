import React from 'react'
import { Ordenar } from './Ordenar'
import { Peliculas } from './Peliculas'
import { ReleaseYear } from './ReleaseYear'
import { NavLink } from 'react-router-dom'
import { PrimerosVeintePelis } from './PrimerosVeintePelis'

export const FuncionesPelis = () => {
  return (
    <div>
      
      <div>

        <div className='divFunciones'>
          <Peliculas></Peliculas>
          <Ordenar></Ordenar>
          <PrimerosVeintePelis></PrimerosVeintePelis>
          <ReleaseYear></ReleaseYear>

        </div>

      </div>

      <div className='divButVolver'>
        <NavLink to="/" > <button className='butVolver'>Volver</button> </NavLink>
      </div>

    </div>
  )
}
