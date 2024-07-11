import React from 'react';
import "./Agendamiento.css"


export const Agendamiento = () => {
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
                            <td colSpan={2} className='colorros'>fecha que va a escoger</td>
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
                Holaaaa
            </div>

        </div>


    );
}

export default Agendamiento;