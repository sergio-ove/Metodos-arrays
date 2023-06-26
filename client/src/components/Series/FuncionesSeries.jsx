import React from 'react'
import { Series } from './Series'
import { NavLink } from 'react-router-dom'
import { PrimerosVeinteSeries } from './PrimerosVeinteSeries'
import { SeriesReleaseYear } from './SeriesReleaseYear'
import { OrdenarSeries } from './OrdenarSeries'

export const FuncionesSeries = () => {



  return (
    <div>

      <div>
        <div className='divFunciones'>
          <Series></Series>
          <OrdenarSeries></OrdenarSeries>
          <PrimerosVeinteSeries></PrimerosVeinteSeries>
          <SeriesReleaseYear></SeriesReleaseYear>
        </div>

      </div>

      <div className='divButVolver'>
        <NavLink to="/" > <button className='butVolver'>Volver</button> </NavLink>
      </div>

    </div>
  )
}
