import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home'
import { FuncionesPelis } from '../components/Peliculas/FuncionesPelis'
import { FuncionesSeries } from '../components/Series/FuncionesSeries'




export const Rutas = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="funcionesPelis" element={<FuncionesPelis />} />
                <Route path="funcionesSeries" element={<FuncionesSeries />} />

            </Routes>

        </BrowserRouter>
    )
}