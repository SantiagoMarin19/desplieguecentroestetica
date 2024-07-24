import React from 'react';
import "./CompServicios.css";
import cej from "../../assets/images/cej.png";
import tit from "../../assets/images/nuse.png";
import { useNavigate } from "react-router-dom";

export const CompServicios = () => {
    const navigate = useNavigate();

    const services = [
        { id: 1, name: "Diseño-Depilación y sombreado", price: "$49.00", img: cej },
        { id: 2, name: "Depilación", price: "$49.00", img: cej },
        { id: 3, name: "sombreado", price: "$49.00", img: cej },
        // Agrega más servicios si es necesario
    ];

    const handleReservar = (service) => {
        navigate("/Agendarcita", { state: { service } });
    };

    return (
        <div className='todo'>
            <div className='partarriba'>
                <div className='titservic'>
                    <h1>Nuestros servicios</h1>
                </div>
                <div className='imgcar'>
                    <img className="img-tit" src={tit} alt="Titulo" />
                </div>
            </div>
            <div className='medio'>
                <h3> Servicio Cejas</h3>
                <div className='sercej'>
                    {services.map((service) => (
                        <div className='concej1' key={service.id}>
                            <img className="img-cej" src={service.img} alt={service.name} />
                            <h5>{service.name}</h5>
                            <h5><b>{service.price}</b></h5>
                            <button onClick={() => handleReservar(service)}>Reservar</button>
                        </div>
                    ))}
                </div>
                {/* Agrega más categorías y servicios si es necesario */}
            </div>
        </div>
    );
}

export default CompServicios;
