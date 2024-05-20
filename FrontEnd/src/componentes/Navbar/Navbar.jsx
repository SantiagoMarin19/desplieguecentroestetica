import React from 'react';
import "./Navbar.css";
import logo  from "../../assets/images/bird_2-removebg-preview.png";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>

                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar-centrado" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Acerca de</a>
                        </li>
                    </ul>
                </div>
                


               
            </div>

        </nav>
    );
}

export default Navbar;
