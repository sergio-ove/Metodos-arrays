import React, { useState } from 'react'
import data from '../Peliculas.json'

export const PrimerosVeinteSeries = () => {


    const [pelicula, setPelicula] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);


    const primerosVeinte = () => {

        const datos = data.entries

        const soloPeliculas = datos.filter((elemento)=>(
            elemento.programType == 'series'
        ))

        console.log(soloPeliculas);
        const veinteDatos = soloPeliculas.slice(0, 20)

        setPelicula(veinteDatos)

    }

    console.log(pelicula);

    const info = ({ target }) => {

        const datos = data.entries
        console.log(datos);

        const datosFind = datos.map((element) => element.title)
        console.log(datosFind);

        const datosEvento = target.value
        console.log(datosEvento);

        const found = datos.find(element => element.title === datosEvento);

        console.log(found);

    }


    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);
    }

    return (
        <div>

            <button onClick={() => { primerosVeinte(); monstrarTodaLaInfo(); }}>20 Primeras del array</button>

            {mostrarInfo &&

                <div className='divCaja20'>

                    {pelicula.length > 0 ? pelicula.map((peli) => (

                        <div key={peli.title} className='div20'>

                            {<button onClick={info} value={peli.title}>{peli.title}</button>}
                            <img src={peli.images["Poster Art"].url} alt="" />


                        </div>

                    )) : ""}

                </div>
            }
        </div>
    );
}