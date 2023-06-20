import React, { useState } from 'react'
import data from '../Peliculas.json'

export const Ordenar = () => {

    const [peli, setPeli] = useState("");
    const [arrayPelis, setArrayPelis] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);


    const ordenar = () => {

        const datos = data.entries
        console.log(datos);
        const ordenado = datos.map(peli => peli.title)
        console.log(ordenado);
        const ascendente = datos.sort((a, b) => (a.title > b.title) ? 1 : -1);
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

            <button onClick={() => { ordenar(); monstrarTodaLaInfo(); }}>ORDENADAS</button>


            {mostrarInfo &&

                <div className='divCaja20'>

                    {peli.length > 0 ? peli.map((pelicula) => (

                        <div key={peli} className='div20'>

                            <button onClick={info} value={pelicula.title} placeholder='hola'>{pelicula.title}</button>
                            <img src={pelicula.images["Poster Art"].url} />


                        </div>

                    )) : ""}

                </div>
            }

        </div>

    )
}
