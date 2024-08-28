import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from './ContextModal'; // Asegúrate de la ruta correcta
import SignUp from '../../pages/SignUp'; 

const ModalRegistro = () => {
    const { showModal, closeModal, modalType } = useModal();

    if (modalType !== 'SignUp') return null;

    return (
        <BootstrapModal show={showModal} onHide={closeModal}>
            <BootstrapModal.Header closeButton>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <SignUp closeModal={closeModal} />
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};

export default ModalRegistro;
