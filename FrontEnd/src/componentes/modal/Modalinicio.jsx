import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from './ContextModal'; 
import LoginUser from '../../pages/Login'; 

const Modalinicio = () => {
    const { showModal, closeModal } = useModal();

    return (
        <BootstrapModal show={showModal} onHide={closeModal}>
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
