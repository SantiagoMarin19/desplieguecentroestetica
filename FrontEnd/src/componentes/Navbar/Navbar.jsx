import React from 'react';
import "./Navbar.css";



export const Navbar = () => {
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary ">

            <div className="container-fluid">


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse navbar-centrado" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="pages" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="pages" href="#">SERVICIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="pages" href="#">ACERCA DE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="pages" href="#">CONTACTANOS</a>
                        </li>

                        
                      



                    </ul>
                </div>




            </div>

        </nav>
    );
}

export default Navbar;
