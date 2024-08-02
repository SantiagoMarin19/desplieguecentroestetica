import React, { useState, useEffect } from 'react';
import "./CompServicios.css";
import { NavLink } from 'react-router-dom';
import supabase from '../../supabase/supabaseconfig';

export const CompServicios = () => {

    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const fetchServicios = async () => {
            const { data, error } = await supabase
                .from('servicios')
                .select(`* , categorias (
                    nombreCategoria)`)
                .eq('estado', true);
            if (error) {
                console.error('Error fetching servicios:', error);
            } else {
                console.log('Servicios:', data);
                setServicios(data);
            }
        };
        fetchServicios();
    }, []);

    const renderServiciosPorCategoria = (categoria, titulo, claseTitulo, claseServicio,) => {

        const formatoCo = new Intl.NumberFormat('es-CO',{
            style :'currency',
            currency : 'COP',
            minimumFractionDigits:0,
            maximumFractionDigits:2


        });



        return (
            <div className={claseTitulo}>
                <h3>{titulo}</h3>
                <div className={claseServicio}>
                    {servicios.filter(servicio => servicio.categorias.nombreCategoria === categoria).map((servicio) => (
                        <div key={servicio.id_servicio} className='serviciosdetc'>
                            <div>                            <img src={servicio.url_img} />
                            </div>
                            <h5>{servicio.nombre_servicio}</h5>

                            <h5><b>{formatoCo.format(servicio.precio)}</b></h5>

                            <div className="butonSs">


                                
                                <NavLink
                                 to={{
                                    pathname:'/VistaDetalle',
                                    state:{ servicio: servicio}

                                 }}
                                 >
                                    <button className="button_s">Reservar</button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='componenteServs'>
            <div className='Bannerserviciosg'>
                <div className='tituloserviciosg'>
                    <h1>Nuestros servicios</h1>
                </div>

            </div>

            <div className='secciones_servicios'>
                {renderServiciosPorCategoria('Cejas', 'Servicio Cejas', 'Titulo_Servicio_Cejas', 'serviciodcejas', 'butonSs')}
                {renderServiciosPorCategoria('Pestañas', 'Servicio Pestañas', 'Titulo_Servicio_Pestañas', 'serviciodpestañas', 'butonSs')}
                {renderServiciosPorCategoria('Micropigmentación', 'Servicio de Micropigmentación', 'Titulo_Servicio_Microp', 'serviciodmicropig', 'butonSs')}
            </div>
        </div>
    );
}

export default CompServicios;
