import React, { useState } from 'react'
import data from '../../Peliculas.json'

export const PelisReleaseYear = () => {

    const [peli, setPeli] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarCada, setMostrarCada] = useState(false);


    const year = () => {

        const datos = data.entries

        //SACAMOS SOLO LOS OBJETOS QUE SON PELÍCULAS
        const soloPeliculas = datos.filter((elemento) => (
            elemento.programType === 'movie'
        ))

        //SACAMOS SOLO LOS OBJETOS CON LA PROPIEDAD "RELEASEYEAR MAYOR O IGUAL A 2010"
        const condicion = soloPeliculas.filter((element) => element.releaseYear >= 2010)

        setPeli(condicion)
    }

    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);
    }

    const infoDeCada = () => {
        setMostrarCada(!mostrarCada)

    }


    return (
        <div>
            <div>
                <button onClick={() => { year(); monstrarTodaLaInfo(); }}>A partir de 2010...</button>
            </div>

            {mostrarInfo &&


                <div className='divCaja20'>

                    {peli.length > 0 ? peli.map((peli) => (

                        <div key={peli.title} className='div20'>

                            <button onClick={() => { year(); infoDeCada() }} value={peli.title}>Mostrar Info</button>

                            <img src={peli.images["Poster Art"].url} alt="" />

                            {mostrarCada ? <div className='divInfoPorPeli'><p className='pInfo'>{peli.title}</p><p className='pInfo'>{peli.releaseYear}</p></div> : ""}

                        </div>

                    )) : ""
                    }
                </div>
            }

        </div>

    )
}
