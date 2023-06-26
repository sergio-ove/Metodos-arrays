import React from 'react'
import { NavLink } from 'react-router-dom'
import palomitas from '../img/palomitas.png'

export const Home = () => {



  return (
    <div>
      <h2>Métodos de arrays</h2>

      <div className='divImagen'>

        <img src={palomitas} alt="" />
        
      </div>

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
