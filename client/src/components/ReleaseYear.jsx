import React, { useState } from 'react'
import data from '../Peliculas.json'

export const ReleaseYear = () => {

    const [peli, setPeli] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarCada, setMostrarCada] = useState(false);


    const year = () => {

        const datos = data.entries

        const condicion = datos.filter((element) => element.releaseYear >= 2010)
        console.log(condicion);

        setPeli(condicion)
        console.log({ peli });
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

                            <button onClick={() => { year(); infoDeCada() }} value={peli.title}>{peli.title}</button>

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
