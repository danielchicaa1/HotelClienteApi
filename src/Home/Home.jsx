import { useEffect,useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";
import VerticalMenu from "../Menu/Menu";
import Footer from "../Footer/Footer";
export function Home(){
return(
    <>
    <VerticalMenu/>
    <div className="banner">
        <div className="row">
            <div className="col-12 col-md-4 text-white">
                <h3 className="fw-bold fst-italic">Reserva Con Nosotros</h3>
                <Formulario/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
)
}

