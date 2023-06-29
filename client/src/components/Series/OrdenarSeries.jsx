import React, { useState } from 'react'
import data from '../../Peliculas.json'

export const OrdenarSeries = () => {
  
  const [peli, setPeli] = useState("");
  const [mostrarInfo, setMostrarInfo] = useState(false);


  const ordenar = () => {

      const datos = data.entries
      console.log(datos);

      ///FALTA SACAR LOS TITULOS SOLO POR PELI
      const soloSeries = datos.filter((elemento)=>(
          elemento.programType === 'series'
      ))

      const ascendente = soloSeries.sort((a, b) => (a.title > b.title) ? 1 : -1);
      console.log(ascendente);

      setPeli(ascendente)

  }

  const monstrarTodaLaInfo = () => {
      setMostrarInfo(!mostrarInfo);
  }

  const info = ({ target }) => {



  }



  return (

      <div>

          <button onClick={() => { ordenar(); monstrarTodaLaInfo(); }} className='butonGeneral'>Ordenadas por orden alfabético</button>


          {mostrarInfo &&

              <div className='divCaja20'>

                  {peli.length > 0 ? peli.map((pelicula) => (

                      <div key={peli} className='div20'>

                          <button onClick={info} value={pelicula.title} placeholder='hola'>{pelicula.title}</button>
                          <img src={pelicula.images["Poster Art"].url} alt='Imagen de cada película' />


                      </div>

                  )) : ""}

              </div>
          }

      </div>

  )
}
