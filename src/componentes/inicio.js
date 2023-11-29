import React from "react";
import Typewriter from "./efectos/efectoTyping";

function Inicio() {
    return (
        <div className="inicio">
            <div className="tituloInicio">
                <p>
                    <Typewriter className="nombreInicio" text={"L.ucas Cardenau."}/>
                </p>
            </div>
        </div>

    )
}

export default Inicio;