import React, { useState } from 'react'
import data from '../../Peliculas.json'

export const SeriesReleaseYear = () => {
 
    const [serie, setSerie] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarCada, setMostrarCada] = useState(false);


    const year = () => {

        const datos = data.entries

        //SACAMOS SOLO LOS OBJETOS QUE SON PELÍCULAS
        const soloSeries = datos.filter((elemento) => (
            elemento.programType === 'series'
        ))

        //SACAMOS SOLO LOS OBJETOS CON LA PROPIEDAD "RELEASEYEAR MAYOR O IGUAL A 2010"
        const condicion = soloSeries.filter((element) => element.releaseYear >= 2010)
        console.log(condicion);

        setSerie(condicion)
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
                <button onClick={() => { year(); monstrarTodaLaInfo(); }} className='butonGeneral'>A partir de 2010...</button>
            </div>

            {mostrarInfo &&


                <div className='divCaja20'>

                    {serie.length > 0 ? serie.map((serie) => (

                        <div key={serie.title} className='div20'>

                            <button onClick={() => { year(); infoDeCada() }} value={serie.title}>Mostrar Info</button>

                            <img src={serie.images["Poster Art"].url} alt="" />

                            {mostrarCada ? <div className='divInfoPorPeli'><p className='pInfo'>{serie.title}</p><p className='pInfo'>{serie.releaseYear}</p></div> : ""}

                        </div>

                    )) : ""
                    }
                </div>
            }

        </div>

    )
}

