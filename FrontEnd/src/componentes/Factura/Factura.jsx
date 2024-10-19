import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
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

    const FacturaPDF = () => (
        <Document>
          <Page style={pdfStyles.body}>
            {/* Header */}
            <View style={pdfStyles.header}>
              <Text style={pdfStyles.title}>Natalia Salazar Artist</Text>
            </View>
            
            {/* Sección de detalles */}
            <View style={pdfStyles.section}>
              <Text style={pdfStyles.sectionTitle}>Detalles de la Factura</Text>
              <View style={pdfStyles.textRow}>
                <Text>Fecha:</Text>
                <Text style={pdfStyles.textRowBold}>{formattedFecha}</Text>
              </View>
              <View style={pdfStyles.textRow}>
                <Text>Cliente:</Text>
                <Text style={pdfStyles.textRowBold}>{user?.user_metadata?.full_name || 'No disponible'}</Text>
              </View>
              <View style={pdfStyles.textRow}>
                <Text>Servicio:</Text>
                <Text style={pdfStyles.textRowBold}>{servicio?.nombre_servicio}</Text>
              </View>
              <View style={pdfStyles.textRow}>
                <Text>Profesional:</Text>
                <Text style={pdfStyles.textRowBold}>{nombreProfesional}</Text>
              </View>
              <View style={pdfStyles.textRow}>
                <Text>Hora:</Text>
                <Text style={pdfStyles.textRowBold}>{duracion}</Text>
              </View>
              <View style={pdfStyles.textRow}>
                <Text>Costo:</Text>
                <Text style={pdfStyles.textRowBold}>
                  {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(servicio.precio)}
                </Text>
              </View>
            </View>
            
            {/* Footer */}
            <View style={pdfStyles.footer}>
              <Text>¡Gracias por tu compra!</Text>
            </View>
          </Page>
        </Document>
      );
      

    return (
        <div className="contenedor_facturacion">
            <div className="facturacion-container">
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
                    <PDFDownloadLink
                        document={<FacturaPDF />}
                        fileName={`Factura_${user?.user_metadata?.full_name || 'Cliente'}_${formattedFecha}.pdf`}
                    >
                        {({ loading }) => (
                            <button 
                                className="btn-factura secundario" 
                                disabled={loading}
                            >
                                {loading ? 'Generando PDF...' : 'Descargar Factura'}
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
};

const pdfStyles = StyleSheet.create({
    body: {
      padding: 20,
   
      backgroundColor: '#FCEBF2',
    },
    header: {
      backgroundColor: '#BF6A8C',
      color: '#fff',
      padding: 20,
      textAlign: 'center',
      borderRadius: 8,
    },
    title: {
      fontSize: 24,
     
      letterSpacing: 1,
    },
    section: {
      margin: '20px 0',
      padding: 10,
      fontSize: 12,
      backgroundColor: '#fff',
      borderRadius: 8,
      boxShadow: '0 4px 15px rgba(191, 106, 140, 0.15)',
    },
    sectionTitle: {
      fontSize: 18,
  
      color: '#BF6A8C',
      borderBottom: '2px solid #BF6A8C',
      marginBottom: 10,
    },
    textRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10,
      fontSize: 12,
    },
    textRowBold: {
      fontWeight: 'bold',
      color: '#BF6A8C',
    },
    footer: {
      textAlign: 'center',
      padding: 20,
      fontSize: 12,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    button: {
      backgroundColor: '#BF6A8C',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: 8,
      textAlign: 'center',
      marginTop: 20,
    },
  });
  

export default FacturacionModal;
