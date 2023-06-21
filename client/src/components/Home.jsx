import React from 'react'
import { NavLink } from 'react-router-dom'
import claqueta from '../img/claqueta.png'

export const Home = () => {



  return (
    <div>
      <h2>Métodos de arrays</h2>
      <div className='divDosCajas'>
        <div>

          <NavLink to="/funcionesSeries" >

            <button className='butHome'>SERIES</button>

          </NavLink>


        </div>

        <div>

          <NavLink to="/funcionesPelis" >

            <button className='butHome'>MOVIES</button>

          </NavLink>


        </div>

      </div>

    </div>
  )
}
