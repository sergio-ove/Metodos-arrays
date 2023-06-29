import React, { useState } from 'react'
import data from '../../Peliculas.json'

export const Peliculas = () => {


    const [pelicula, setPelicula] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarCadaPeli, setMostrarCadaPeli] = useState(false);



    const soloPeliculas = () => {

        const peliculas = data.entries
        const soloBuscaPeli = peliculas.filter((element) => element.programType === "movie")
        setPelicula(soloBuscaPeli)
    }


    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);
    }


    const infoDeCadaPeli = () => {
        setMostrarCadaPeli(!mostrarCadaPeli)

    }


    return (
        <div>

            <button onClick={() => { soloPeliculas(); monstrarTodaLaInfo(); }} className='butonGeneral'>Info de todas las pelis</button>

            {mostrarInfo &&

                <div className='divCaja20'>

                    {pelicula.length > 0 ? pelicula.map((peli) => (

                        <div key={peli.title} className='div20'>

                            <button onClick={() => { soloPeliculas(); infoDeCadaPeli() }} value={peli.title}>Mostrar Info</button>

                            <img src={peli.images["Poster Art"].url} alt="" />

                            {mostrarCadaPeli ? <div className='divInfoPorPeli'><p className='pInfo'>{peli.title}</p><p className='pInfo'>{peli.releaseYear}</p></div> : ""}

                        </div>

                    )) : ""}
                </div>

            }


        </div>

    )
}
