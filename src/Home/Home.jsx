import { useEffect,useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";
export function Home(){
return(
    <>
    <div className="banner">
        <div className="row">
            <div className="col-12 col-md-4 text-white">
                <h3>Reserva Con Nosotros</h3>
                <Formulario/>
            </div>
        </div>
    </div>
    </>
)
}