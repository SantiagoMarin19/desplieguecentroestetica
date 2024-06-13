import React from 'react';
import "./CompServicios.css"
import micro from "../../assets/images/Micro.png"
import cej from "../../assets/images/cej.png"
import pes from "../../assets/images/pes.png"
import com from "../../assets/images/com.png"

export const CompServicios1 = () => {
    return (
        <div className='imgdeservicios'>
           <div className='titservic'>Nuestros servicios</div>
        <div className='imgarriba'>
        <img className='imgmicro' src={micro}></img>
        <img className='imgcej' src={cej}></img>
        </div>
        <div className='imgabajo'>
        <img className='imgpes' src={pes}></img>
        <img className='imgcom' src={com}></img>
        </div>
        </div>
                // <div className='imgdeservicios'>
                // <div className='imgmicro' src={micro}>HOLAAA</div>
                // <div className='imgcej' src={cej}><div className='text1'>xd</div></div>
                // <div className='imgpes' src={pes}>xd</div>
                // <div className='imgcom' src={com}>xd</div>
                // </div>
    );
}

export default CompServicios;
