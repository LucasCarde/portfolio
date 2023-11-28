import React from "react";
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id="nav">
            <div className="container-fluid" id="separadorNav">
                <a className="navbar-brand" href="#" id="marca">Carde</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id="navItem">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="navItem">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="navItem">Otros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;