import React, { useState } from 'react';
import './Agendamiento.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { NavLink, useLocation } from 'react-router-dom';

const getDiaSemana = (date) => {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return diasSemana[date.getDay()];
};

export const Agendamiento = () => {
    const location = useLocation();
    const { service } = location.state || { service: { name: "Servicio no especificado", price: "$0.00" } };
    const [date, setDate] = useState(new Date());
    const [selectedHora, setSelectedHora] = useState('');
    const [selectedProfesional, setSelectedProfesional] = useState('');

    const onChange = (date) => {
        setDate(date);
    };

    const handleHoraChange = (event) => {
        setSelectedHora(event.target.options[event.target.selectedIndex].text);
    };

    const handleProfesionalChange = (event) => {
        setSelectedProfesional(event.target.options[event.target.selectedIndex].text);
    };

    const tileDisabled = ({ date, view }) => {
        const today = new Date();
        return (
            (view === 'month' && date < today && !isSameDay(date, today)) ||
            (date.getDay() === 1)
        );
    };

    const isSameDay = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    return (
        <div className='todoingreso'>
            <div className='partleft'>
                <div className='escogerprof'>
                    <form action='#' method='post'>
                        <label className='escprof' htmlFor='prof'>
                            Profesionales
                        </label>
                        <select name='profesionales' id='prof' onChange={handleProfesionalChange} value={selectedProfesional}>
                            <option value=''>--Escoge profesional--</option>
                            <option value='prof1'>Natalia Salazar</option>
                            <option value='prof2'>Carlos Martinez</option>
                            <option value='prof3'>Andrea Gomez</option>
                        </select>
                    </form>
                </div>
                <div className='partetabla'>
                    <h3>Resumen</h3>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2} className='colorros'>
                                    {date.getDate()} {date.toLocaleDateString('default', { month: 'short' })} {date.getFullYear()} - {selectedHora}
                                </th>
                            </tr>
                            <tr>
                                <th>Profesional</th>
                                <th>Procedimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedProfesional}</td>
                                <td>{service.name}</td>
                            </tr>
                            <tr>
                                <th>Duración</th>
                                <th>Costo</th>
                            </tr>
                            <tr>
                                <td>{selectedHora}</td>
                                <td>{service.price}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='colorros'>
                                    <NavLink to='Factura'>
                                        <button className='botonreservar'>Reservar</button>
                                    </NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='partright'>
                <Calendar
                    onChange={onChange}
                    value={date}
                    tileDisabled={tileDisabled}
                />
                <div className='escogerhora'>
                    <form action='#' method='post'>
                        <label className='eschor' htmlFor='hor'>
                            Escoge una hora
                        </label>
                        <p>
                            {getDiaSemana(date)} {date.getDate()} {date.toLocaleDateString('default', { month: 'short' })} {date.getFullYear()}
                        </p>
                        <select name='hora' id='hor' onChange={handleHoraChange} value={selectedHora}>
                            <option value=''>--Escoge hora--</option>
                            <option value='hor1'>9:00 - 10:00 am</option>
                            <option value='hor2'>10:00 - 11:00 am</option>
                            <option value='hor3'>2:00 - 3:00 pm</option>
                            <option value='hor4'>3:00 - 4:00 pm</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Agendamiento;
