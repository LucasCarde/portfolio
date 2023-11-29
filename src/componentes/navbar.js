import React, {useState} from "react";
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import EfectoRandom from "./efectos/efectoRandom";


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" id="nav">
            <div className="container-fluid" id="divNav">
                <Link to="/" className="links">
                    <a className="navbar-brand" id={props.marca} defaultValue={props.marca}>{props.marca}</a>
                </Link>
                <button
                    className="navbar-toggler"
                    data-bs-theme="dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded= "false"
                    aria-label="Toggle navigation"
                    id="burgerMenu">
                    <span className="navbar-toggler-icon" id="imagenBurger"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="links">
                                <a className="nav-link active" aria-current="page" id={props.link1}>{props.link1}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobremi" className="links">
                                <a className="nav-link" id="link2">{props.link2}</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/otros" className="links">
                                <a className="nav-link" id={props.link3}>{props.link3}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;