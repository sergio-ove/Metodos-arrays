import React, { useState } from 'react'
import data from '../../Peliculas.json'

export const PrimerosVeinteSeries = () => {


    const [pelicula, setPelicula] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [ocultar, setOcultar] = useState(false);
    const [infoPeli, setInfoPeli] = useState("");


    const primerosVeinte = () => {

        const datos = data.entries

        const soloPeliculas = datos.filter((elemento) => (
            elemento.programType === 'series'
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

        setInfoPeli(found)

        setOcultar(!ocultar);

    }


    console.log(infoPeli);


    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);

    }

    const cerrarInfo = () => {
        setOcultar(!ocultar);

    }


    return (
        <div>

            <button onClick={() => { primerosVeinte(); monstrarTodaLaInfo(); }} className='butonGeneral' >20 Primeras</button>

            {ocultar &&

                <div className='divInfoIndividual'>

                    <button onClick={cerrarInfo} className='botonCerrar'>X</button>

                    <div className='divInformacion'>

                        <p>Titulo: {infoPeli.title}</p>
                        <p>Género: {infoPeli.programType}</p>
                        <p>Estreno: {infoPeli.releaseYear}</p>
                        <div>
                        <img src={infoPeli.images["Poster Art"].url} alt="imagen cartel" />
                        </div>

                    </div>

                </div>
            }


            {mostrarInfo &&

                <div className='divCaja20'>

                    {pelicula.length > 0 ? pelicula.map((peli) => (

                        <div key={peli.title} className='div20'>

                            <button onClick={info} value={peli.title}>Mostrar Info</button>
                            <img src={peli.images["Poster Art"].url} alt="" />



                        </div>


                    )) : ""}



                </div>
            }





        </div>
    );
}