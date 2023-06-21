import React from 'react'
import { Ordenar } from './Ordenar'
import { ReleaseYear } from './ReleaseYear'
import { Series } from './Series'
import { NavLink } from 'react-router-dom'
import { PrimerosVeinteSeries } from './PrimerosVeinteSeries'

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
         <PrimerosVeinteSeries></PrimerosVeinteSeries>
          <ReleaseYear></ReleaseYear>
        </div>

      </div>

      <div className='divButVolver'>
        <NavLink to="/" > <button className='butVolver'>Volver</button> </NavLink>
      </div>

    </div>
  )
}
