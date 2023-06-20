import React, { useState } from 'react'
import data from '../Peliculas.json'

export const Peliculas = () => {


    const [pelicula, setPelicula] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);


    const soloPeliculas = () => {

        const peliculas = data.entries
        const soloBuscaPeli = peliculas.filter((element) => element.programType === "movie")
        setPelicula(soloBuscaPeli)
    }

    console.log(pelicula);

    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);
    }


    return (
        <div>

            <button onClick={() => { soloPeliculas(); monstrarTodaLaInfo(); }}>INFO</button>

            {mostrarInfo &&

                <div className='divCaja20'>
                    {pelicula.length > 0 ? pelicula.map((peli) => (

                        <div key={peli.title} className='div20'>

                            <img src={peli.images["Poster Art"].url} alt="" />
                            <p>{peli.title}</p>

                        </div>

                    )) : ""}
                </div>

            }


        </div>

    )
}
