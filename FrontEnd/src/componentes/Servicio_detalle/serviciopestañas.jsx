import react from 'react';
import './servicios.css';


export const Pestañas = () => {
    return (

        <div className='contenedor_total'>
            <div className='banneer'>
                <h1>Pestañas</h1>
            </div>

            <div className='content_total'> 
                <div className='contenido'>
                <div className='titulo'>
                    <h1>Extensiones De Pestañas</h1>
                    </div>
                    
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p> Mediante técnicas profesionales y productos de alta calidad, nuestros expertos aplicarán delicadamente cada extensión, logrando un resultado natural y realzado </p>
                            <div className='botones'>
                        <button id='boton'>Reservar Ahora</button>
                        </div>
                        
                    <div className='content_boton'>     
                        <div className='botontyp'>  
                            <div className='tiempo'>
                                <h4>Tiempo</h4>
                                <p>60 Minutos</p>
                            </div>
                            <div className='precio'>
                                <h4>Precio</h4>
                                <p>$120.000</p>
                            </div> 
                            </div>
                            </div>
                            </div>
                        
                        <div className='imagen'>
                            <img className='imagen' src={extensiondepestañas}/>
                            </div>
                            </div>
                            </div>

                                       
                                            
                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Lifting de  pestañas</h1>
                        </div>
                        <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>Esta técnica utiliza productos especializados que levantan y enrulean tus pestañas, logrando que luzcan más largas, rizadas y definidas. </p>
                        <div className='botones'>
                        <button id='boton'>Reservar Ahora</button>
                        </div>
                        
                    <div className='content_boton'>     
                        <div className='botontyp'>  
                            <div className='tiempo'>
                                <h4>Tiempo</h4>
                                <p>60 Minutos</p>
                            </div>
                            <div className='precio'>
                                <h4>Precio</h4>
                                <p>$120.000</p>
                            </div> 
                            </div>
                            </div>
                            </div>
                        
                        <div className='imagen'>
                            <img className='imagen' src={lidtingdepestañas}/>
                            </div>
                            </div>
                            </div>

                            
     
                        
                           
</div>

</div>

     
        

        
    );    
};