import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import supabase from '../../supabase/supabaseconfig';
import { Modal } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Factura.css';

const FacturacionModal = ({ token }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { fecha, duracion, idProfesional, servicio, idUsuario } = state;
    const parsedFecha = fecha ? new Date(fecha) : null;
    const formattedFecha = parsedFecha && !isNaN(parsedFecha) 
        ? parsedFecha.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) 
        : 'Fecha no disponible';
    
    const [user, setUser] = useState(null);
    const [nombreProfesional, setNombreProfesional] = useState('');
    const [idHorario, setIdHorario] = useState(null);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const facturaRef = useRef();
    
    const handlePrintFactura = () => {
        console.log(facturaRef.current); // Verifica el contenido
        if (facturaRef.current) {
            handlePrint();
        } else {
            alert("No hay contenido para imprimir");
        }
    };

    const handlePrint = useReactToPrint({
        content: () => facturaRef.current,
        documentTitle: `Factura_${user?.user_metadata?.full_name || 'Cliente'}_${formattedFecha}`,
        onAfterPrint: () => console.log("Print successful"),
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userData, profesionalData, horarioData] = await Promise.all([
                    supabase.auth.getUser(),
                    idProfesional ? supabase
                        .from('profesional')
                        .select('nombre_profesional')
                        .eq('id_profesional', idProfesional)
                        .single() : null,
                    duracion ? supabase
                        .from('franja_horaria')
                        .select('id_horario')
                        .eq('hora', duracion.trim()) : null
                ]);

                if (userData.error) throw userData.error;
                setUser(userData.data.user);

                if (profesionalData?.data) {
                    setNombreProfesional(profesionalData.data.nombre_profesional);
                }

                if (horarioData?.data?.length > 0) {
                    setIdHorario(horarioData.data[0].id_horario);
                }
            } catch (error) {
                console.error('Error al cargar los datos:', error);
                setModalMessage('Error al cargar los datos de la factura');
                setShowModal(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [idProfesional, duracion]);

    const handleGuardarCita = async () => {
        if (!user) {
            setModalMessage('Por favor, inicie sesión para continuar.');
            setShowModal(true);
            return;
        }

        if (!idHorario) {
            setModalMessage('No se pudo obtener el horario para la duración seleccionada.');
            setShowModal(true);
            return;
        }

        try {
            const { error } = await supabase
                .from('cita')
                .insert([{
                    fecha: fecha.toISOString().split('T')[0],
                    profesional: idProfesional,
                    servicio: servicio?.id_servicios,
                    usuarios: user.id,
                    duracion: duracion,
                    estado: 'FALSE'
                }]);

            if (error) throw error;

            setModalMessage('¡Cita guardada con éxito! Un administrador verificará tu cita.');
            setShowModal(true);
            setTimeout(() => navigate('/abono-info', { state: { servicio } }), 3000);
        } catch (error) {
            setModalMessage(`Error al guardar la cita: ${error.message}`);
            setShowModal(true);
        }
    };

    return (
        <div className="contenedor_facturacion">
            <div className="facturacion-container" ref={facturaRef}>
                <div className="invoice-header">
                    <h1>Natalia Salazar Artist</h1>
                </div>

                <div className="explicacion_factura">
                    {loading ? (
                        <Skeleton width={200} height={30} />
                    ) : (
                        <h2>Fecha: {formattedFecha}</h2>
                    )}
                </div>

                <div className="invoice-body">
                    <div className="invoice-section">
                        <div className="titulo_invoice-section">
                            <p>Detalles de la Cita</p>
                        </div>

                        {loading ? (
                            Array(5).fill().map((_, i) => (
                                <Skeleton key={i} width="100%" height={24} style={{ marginBottom: '16px' }} />
                            ))
                        ) : (
                            <>
                                <p><strong>Hora:</strong> <span>{duracion}</span></p>
                                <p><strong>Profesional:</strong> <span>{nombreProfesional}</span></p>
                                <p><strong>Servicio:</strong> <span>{servicio?.nombre_servicio}</span></p>
                                <p><strong>Costo:</strong> <span>{new Intl.NumberFormat('es-CO', {
                                    style: 'currency',
                                    currency: 'COP',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(servicio.precio)}</span></p>
                                <p><strong>Cliente:</strong> <span>{user?.user_metadata?.full_name || 'No disponible'}</span></p>
                            </>
                        )}
                    </div>
                </div>

                <div className="invoice-footer">
                    <button 
                        className="btn-factura" 
                        onClick={handleGuardarCita} 
                        disabled={loading}
                    >
                        Confirmar Cita
                    </button>
                    <button 
                        className="btn-factura secundario" 
                        onClick={handlePrintFactura} 
                        disabled={loading || !facturaRef.current}
                    >
                        Imprimir Factura
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FacturacionModal;
