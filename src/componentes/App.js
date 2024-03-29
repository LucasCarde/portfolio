import React from "react";
import SignIn from "./SignIn";
import Inicio from "./inicio";
import Navbar from "./navbar";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Navbar
                  marca = "Carde"
                  link1 = "Inicio"
                  link2 = "Sobre mi"
                  link3 = "Otros"
                />
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/singin' element={<SignIn/>}/>
                </Routes>
            </Router>
        </div>
    );

}

export default App;
