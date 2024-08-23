import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from './ContextModal'; // Asegúrate de la ruta correcta
import LoginUser from '../../pages/Login'; // Asegúrate de la ruta correcta

const Modalinicio = () => {
    const { showModal, closeModal } = useModal();

    return (
        <BootstrapModal show={showModal} onHide={closeModal}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>Iniciar sesión</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <LoginUser closeModal={closeModal} />
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};

export default Modalinicio;
