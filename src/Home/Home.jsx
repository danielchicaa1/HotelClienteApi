import { useEffect, useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";
import VerticalMenu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { Carousel } from "bootstrap";
import ImageGrid from "../Carrusel/Carrusel";
import ResenaHotel from "../Reseña/Reseña";
export function Home() {
    return (
        <>
            <VerticalMenu />
            <div className="banner">
                <div className="row">
                    <div className="mb-3 text-white text-center">
                        <h1 className="display-4 fw-bold">Amazonia Resort</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 text-white">
                        <h3 className="fw-bold fst-italic">Reserva Con Nosotros</h3>
                        <Formulario />
                    </div>
                </div>
            </div>
            <ImageGrid />
            <ResenaHotel/>
            <Footer />
        </>
    )
}

