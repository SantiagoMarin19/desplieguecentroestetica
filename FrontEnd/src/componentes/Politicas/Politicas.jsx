import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';
import '../Politicas/Politicas.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#FFF0F5',
      padding: 30, // Reducido para menos espacio
    },
    section: {
      margin: 15, // Reducido para menos espacio entre secciones
      padding: 15, // Reducido para menos espacio interno
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 }, // Ajustado para una sombra más sutil
      shadowOpacity: 0.1,
      shadowRadius: 3, // Ajustado para una sombra más sutil
      elevation: 2, // Reducido para menos profundidad
    },
    title: {
      fontSize: 28, // Ligera reducción del tamaño
      textAlign: 'center',
      marginBottom: 20, // Reducido para menos espacio
      fontWeight: 'bold',
      color: '#BF6A8C',
    },
    subtitle: {
      fontSize: 22, // Ligera reducción del tamaño
      marginBottom: 10, // Reducido para menos espacio
      fontWeight: 'bold',
      color: '#FFFFFF',
      backgroundColor: '#BF6A8C',
      padding: 10, // Reducido para menos espacio
      borderRadius: 8,
      textAlign: 'center',
      overflow: 'hidden',
    },
    text: {
      fontSize: 14, // Ligera reducción del tamaño
      marginBottom: 10, // Reducido para menos espacio
      color: '#333333',
      lineHeight: 1.4, // Ligera reducción para mejor legibilidad
    },
    sub: {
      fontSize: 18, // Ligera reducción del tamaño
      fontWeight: 'bold',
      color: '#BF6A8C',
      backgroundColor: '#FFF0F5',
      padding: 8, // Reducido para menos espacio
      marginVertical: 8, // Reducido para menos espacio vertical
      borderRadius: 6,
      borderLeftWidth: 4,
      borderLeftColor: '#BF6A8C',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5, // Reducido para menos espacio
      paddingLeft: 15, // Reducido para menos espacio
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: '#FF69B4',
      marginRight: 8, // Reducido para menos espacio
    },
  });
  

// Componente para el contenido del PDF
const PoliticasPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Términos y Condiciones de Servicios</Text>
        <Text style={styles.text}>Bienvenido/a a Natalia Salazar. A continuación, se detallan los términos y condiciones bajo los cuales ofrecemos nuestros servicios. Al reservar una cita con nosotros, aceptas estos términos y condiciones en su totalidad.</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Nuestros Métodos:</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sub}>Puntualidad y Asistencia</Text>
        </View>
        <Text style={styles.text}>Puntualidad: Es fundamental que acudas puntualmente a tu cita. La puntualidad garantiza un excelente servicio. Si llegas más de 10 minutos tarde a la hora acordada, tu cita será cancelada automáticamente.</Text>
        <Text style={styles.text}>Cancelaciones y Cambios: Debes notificar cualquier cambio o cancelación de tu cita con al menos 24 horas de anticipación. Esto nos permite reorganizar nuestro tiempo y ofrecer el espacio a otro cliente.</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sub}>Depósitos y Pagos</Text>
        </View>
        <Text style={styles.text}>Depósito: Para confirmar tu cita, debes realizar un depósito del 50% del valor total del servicio solicitado.</Text>
        <Text style={styles.text}>No Reembolsable: En caso de no asistir, llegar tarde o cancelar fuera del plazo de 24 horas, el depósito no será reembolsable.</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sub}>Política de Reembolsos</Text>
        </View>
        <Text style={styles.text}>No Reembolsable: El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</Text>
        <Text style={styles.text}>Excepciones: En casos excepcionales y de las políticas aquí mencionadas, se puede considerar un reembolso parcial o reprogramación de la cita.</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sub}>Ubicación y Contacto</Text>
        </View>
        <Text style={styles.text}>Dirección: Nos encontramos en Calle 33B # 7-53, Barrio Urbanización El Bosque, Palmira Valle.</Text>
        <Text style={styles.text}>Contacto: Para cualquier consulta o modificación de tu cita, contáctanos a través de nuestras redes sociales @nataliasalazarartist.</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sub}>Derechos de la Empresa</Text>
        </View>
        <Text style={styles.text}>No Reembolsable: El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sub}>Aceptación de Términos</Text>
        </View>
        <Text style={styles.text}>Al reservar una cita con nosotros, confirmas que has leído, entendido y aceptado estos términos y condiciones en su totalidad.</Text>
      </View>
    </Page>
  </Document>
);
export const Politicases = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const PoliticasContent = () => (
        <div className='politicas-printable'>
            <div className='banner'>
                <div className='titulo'>
                    <h2>Términos y Condiciones de Servicios</h2>
                </div>

                <div className='informacion'>
                    <p>Bienvenido/a a Natalia Salazar. A continuación, se detallan los términos y condiciones bajo los cuales ofrecemos 
                    nuestros servicios. Al reservar una cita con nosotros, aceptas estos términos y condiciones en su totalidad.</p>
                </div>
            </div>

            <div className='contenido'>
                <div className='titulo_conten'>
                    <h3>Nuestros Métodos:</h3>
                </div>

                <div className='contenido_info'>
                    <div className='info'>
                        <ul>
                            <li> <b>Puntualidad y Asistencia</b></li>
                            <p> <b>Puntualidad:</b> Es fundamental que acudas puntualmente a tu cita. La puntualidad garantiza un excelente servicio. Si llegas más de 10 minutos tarde a la hora acordada, tu cita será cancelada automáticamente.</p>
                            <p> <b>Cancelaciones y Cambios:</b> Debes notificar cualquier cambio o cancelación de tu cita con al menos 24 horas de anticipación. Esto nos permite reorganizar nuestro tiempo y ofrecer el espacio a otro cliente.</p>
                            
                            <li> <b>Depósitos y Pagos</b></li>
                            <p> <b>Depósito: </b>Para confirmar tu cita, debes realizar un depósito del 50% del valor total del servicio solicitado.</p>
                            <p> <b>No Reembolsable:</b> En caso de no asistir, llegar tarde o cancelar fuera del plazo de 24 horas, el depósito no será reembolsable.</p>
                            
                            <li> <b>Política de Reembolsos</b></li>
                            <p> <b>No Reembolsable:</b> El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</p>
                            <p> <b>Excepciones:</b> En casos excepcionales y de las politicas aqui mencionadas, se puede considerar un reembolso parcial o reprogramación de la cita.</p>
                            
                            <li> <b>Ubicación y Contacto</b></li>
                            <p> <b>Dirección: </b>Nos encontramos en Calle 33B # 7-53, Barrio Urbanización El Bosque, Palmira Valle.</p>
                            <p> <b>Contacto:</b> Para cualquier consulta o modificación de tu cita, contáctanos a través de nuestras redes sociales @nataliasalazarartist.</p>
                            
                            <li> <b>Derechos de la Empresa</b></li>
                            <p> <b>No Reembolsable:</b> El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</p>
                            
                            <li> <b>Aceptación de Términos</b></li>
                            <p>Al reservar una cita con nosotros, confirmas que has leído, entendido y aceptado estos términos y condiciones en su totalidad.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className='politicas'>
            {loading ? (
                <div className='politicas-skeleton'>
                    <div className='banner'>
                        <div className='titulo'>
                            <Skeleton width={300} height={30} />
                        </div>
                        <div className='informacion'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                    <div className='contenido'>
                        <div className='titulo_conten'>
                            <Skeleton width={200} height={25} />
                        </div>
                        <div className='contenido_info'>
                            <Skeleton count={15} />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <PoliticasContent />
                    <div className='politicas-actions'>
                        <PDFDownloadLink document={<PoliticasPDF />} fileName="Terminos_y_Condiciones_Natalia_Salazar_Artist.pdf">
                            {({ blob, url, loading, error }) =>
                                loading ? 'Cargando documento...' : (
                                    <button className='btn-politicas'>
                                        Descargar Términos y Condiciones
                                    </button>
                                )
                            }
                        </PDFDownloadLink>
                    </div>
                </>
            )}
        </div>
    );
};