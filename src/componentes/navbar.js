import React from "react";
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" id="nav">
            <div className="container-fluid" id="divNav">
                <Link to="/" className="links">
                    <a className="navbar-brand" id="marca">Carde</a>
                </Link>
                <button
                    className="navbar-toggler"
                    data-bs-theme="dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    id="burgerMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="links">
                                <a className="nav-link active" aria-current="page" id="navItem">Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobremi" className="links">
                                <a className="nav-link" id="navItem">Sobre mi</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/otros" className="links">
                                <a className="nav-link" id="navItem">Otros</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;