import React from 'react'
import { NavLink, Router } from 'react-router-dom'

export const Home = () => {



  return (
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
  )
}
