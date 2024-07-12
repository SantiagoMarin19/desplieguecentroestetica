import React, { useState } from 'react';
import "./Agendamiento.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export const Agendamiento = () => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            return (
                <p>
                    {date.getDate()} {date.toLocaleDateString('default', { month: 'short' })} {date.getFullYear()}
                </p>
            )
        }
    }

    const [selectedHora, setSelectedHora] = useState('--Escoge hora--');

    const handleHoraChange = event => {
        setSelectedHora(event.target.options[event.target.selectedIndex].text);
    };

    return (

        <div className='todoingreso'>

            <div className='partleft'>
                <div className='escogerprof'>
                    <form action='#' method='post'>
                        <label className='escprof' form="prof">Profesionales</label>
                        <select name='profesionales' id="prof">
                            <option>--Escoge profesional--</option>
                            <option value="prof1">Natalia Salazar</option>
                            <option value="prof2">Natalia Salazar</option>
                            <option value="prof3">Natalia Salazar</option>
                        </select>
                    </form>
                </div>
                <div className='partetabla'>
                    <h3>Resumen</h3>

                    <table>
                        <tr>
                            <td colSpan={2} className='colorros'>{date.getDate()} {date.toLocaleDateString('default', { month: 'short' })} {date.getFullYear()} - {selectedHora}</td>
                        </tr>
                        <tr>
                            <th>Profesional</th>
                            <th>Procedimiento</th>
                        </tr>
                        <tr>
                            <td>profesional que va a atender</td>
                            <td>servicios escogido</td>
                        </tr>
                        <tr>
                            <th>Duración</th>
                            <th>Costo</th>
                        </tr>
                        <tr>
                            <td>duracion del procedimiento</td>
                            <td>cuanto toca pagar</td>
                        </tr>
                        <tr>
                            <td colSpan={2} className='colorros'>Reservar</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='partright'>
                <Calendar onChange={onChange} value={date}  ></Calendar>
                {console.log(date)}

                <div className='escogerhora'>
                    <form action='#' method='post'>
                        <label className='eschor' form="esc">Escoge una hora</label>
                        <p>{date.getDate()} {date.toLocaleDateString('default', { month: 'short' })} {date.getFullYear()}</p>
                        <select name='hora' id="hor" onChange={handleHoraChange} select={selectedHora}>
                            <option>--Escoge hora--</option>
                            <option value="hor1">9:00 - 10:00 am</option>
                            <option value="hor2">10:00 - 11:00 am</option>
                            <option value="hor3">2:00 - 3:00 pm</option>
                            <option value="hor3">3:00 - 4:00 pm</option>
                        </select>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Agendamiento;