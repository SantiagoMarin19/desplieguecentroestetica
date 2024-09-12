import React from 'react'; 
import { Modal as BootstrapModal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from './ContextModal'; 
import LoginUser from '../../pages/Login'; 

const Modalinicio = () => {
    const { showModal, closeModal, modalType } = useModal();

    if (modalType !== 'login') return null;  // Solo mostrar el modal si el tipo es 'login'

    return (
        <BootstrapModal show={showModal} onHide={closeModal} backdrop="static" keyboard={false}>
            <BootstrapModal.Header closeButton>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <LoginUser closeModal={closeModal} />
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};

export default Modalinicio;
