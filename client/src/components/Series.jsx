import React, { useState } from 'react'
import data from '../Peliculas.json'

export const Series = () => {


    const [series, setSeries] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarCadaSerie, setMostrarCadaSerie] = useState(false);


    const soloSeries = () => {

        const series = data.entries
        const soloBuscaSerie = series.filter((element) => element.programType == "series")
        setSeries(soloBuscaSerie)
    }

    console.log(series);


    const datos = data.entries
    const url = datos.map((element) => element.images["Poster Art"])

    const monstrarTodaLaInfo = () => {
        setMostrarInfo(!mostrarInfo);
    }


    const infoDeCadaSerie = () => {
        setMostrarCadaSerie(!mostrarCadaSerie)

    }


    return (
        <div>

            <button onClick={() => { soloSeries(); monstrarTodaLaInfo(); }}>Info de todas las series</button>

            {mostrarInfo &&

                <div className='divCaja20'>
                    {series.length > 0 ? series.map((serie) => (

                        <div key={serie.title} className='div20'>

                            <button onClick={() => { soloSeries(); infoDeCadaSerie() }} value={serie.title}>{serie.title}</button>

                            <img src={serie.images["Poster Art"].url} alt="" />

                            {mostrarCadaSerie ? <div className='divInfoPorPeli'><p className='pInfo'>{serie.title}</p><p className='pInfo'>{serie.releaseYear}</p></div> : ""}

                        </div>

                    )) : ""}
                </div>

            }

        </div>
    )
}
