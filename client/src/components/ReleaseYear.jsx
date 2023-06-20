import React, { useState } from 'react'
import data from '../Peliculas.json'

export const ReleaseYear = () => {

    const [peli, setPeli] = useState("");
    const [mostrarInfo, setMostrarInfo] = useState(false);


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

    return (
        <div>
            <div>
                <button onClick={() => { year(); monstrarTodaLaInfo(); }}>2010...</button>
            </div>

            {mostrarInfo &&


                <div className='divCaja20'>

                    {peli.length > 0 ? peli.map((peli) => (

                        <div key={peli.title} className='div20'>

                            {<button onClick={year} value={peli.title}>{peli.title}</button>}
                            <img src={peli.images["Poster Art"].url} alt="" />

                        </div>

                    )) : ""
                    }
                </div>
            }

        </div>

    )
}
