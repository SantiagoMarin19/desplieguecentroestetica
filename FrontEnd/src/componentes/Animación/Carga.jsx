import React, { useState, useEffect } from "react";
import "./Carga.css";
import { useHistory } from 'react-router-dom';

export const Pantalladcarga = () => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 8000); // Tiempo de carga simulado de 8 segundos

        // Cleanup function
        return () => clearTimeout(timer);
    }, [history.location.pathname]); // Ejecutar efecto cuando cambia la ubicación

    return (
        <div className={`loader ${loading ? 'visible' : 'hidden'}`}>
            <div className="loader__balls">
                <div className="loader__balls__group">
                    <div className="ball item1"></div>
                    <div className="ball item1"></div>
                    <div className="ball item1"></div>
                </div>
                <div className="loader__balls__group">
                    <div className="ball item2"></div>
                    <div className="ball item2"></div>
                    <div className="ball item2"></div>
                </div>
                <div className="loader__balls__group">
                    <div className="ball item3"></div>
                    <div className="ball item3"></div>
                    <div className="ball item3"></div>
                </div>
            </div>
        </div>
    );
};
