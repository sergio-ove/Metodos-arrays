import React from 'react'
import { Ordenar } from './Ordenar'
import { PrimerosVeinte } from './PrimerosVeinte'
import { ReleaseYear } from './ReleaseYear'
import { Series } from './Series'
import { NavLink } from 'react-router-dom'

export const FuncionesSeries = () => {


  const returnHome = () => {
    <NavLink to="/"></NavLink>
  }



  return (
    <div>

      <div>
        <div className='divFunciones'>
          <Series></Series>
          <Ordenar></Ordenar>
          <PrimerosVeinte></PrimerosVeinte>
          <ReleaseYear></ReleaseYear>
        </div>

      </div>

      <div className='divButVolver'>
        <NavLink to="/" > <button className='butVolver'>Volver</button> </NavLink>
      </div>

    </div>
  )
}
