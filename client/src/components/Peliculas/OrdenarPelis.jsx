import React, { useState } from 'react'
import data from '../../Peliculas.json'

export const OrdenarPelis = () => {

    const [peli, setPeli] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);


    const ordenar = () => {

        const datos = data.entries

        //SACAMOS SOLO LOS OBJETOS QUE SON PELÍCULAS
        const soloPeliculas = datos.filter((elemento) => (
            elemento.programType === 'movie'
        ))

        //ORDENAMOS POR ORDEN ALFABÉTICO(POR TÍTULO)
        const ascendente = soloPeliculas.sort((a, b) => (a.title > b.title) ? 1 : -1);

        setPeli(ascendente)

    }

    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);
    }




    return (

        <div>

            <button onClick={() => { ordenar(); monstrarTodaLaInfo(); }}>Ordenadas por orden alfabético</button>


            {mostrarInfo &&

                <div className='divCaja20'>

                    {peli.length > 0 ? peli.map((pelicula) => (

                        <div key={peli.title} className='div20'>

                            <button value={pelicula.title}>{pelicula.title}</button>
                            <img src={pelicula.images["Poster Art"].url} alt='Imagen de cada película' />


                        </div>

                    )) : ""}

                </div>
            }

        </div>

    )
}
