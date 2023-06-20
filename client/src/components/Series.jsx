import React, { useState } from 'react'
import data from '../Peliculas.json'

export const Series = () => {


    const [series, setSeries] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);


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


    return (
        <div>

            <button onClick={() => { soloSeries(); monstrarTodaLaInfo(); }}>INFO</button>

            {mostrarInfo &&

                <div className='divCaja20'>
                    {series.length > 0 ? series.map((serie) => (

                        <div key={serie.title} className='div20'>

                            {<button onClick={soloSeries} value={serie.title}>{serie.title}</button>}
                            <img src={serie.images["Poster Art"].url} alt="" />

                        </div>

                    )) : ""}
                </div>

            }

        </div>
    )
}
