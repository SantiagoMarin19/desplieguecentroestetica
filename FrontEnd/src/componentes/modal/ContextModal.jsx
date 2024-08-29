import React, { createContext, useContext, useState } from 'react';
import Modalinicio from './Modalinicio'; // Ajustar la ruta según corresponda
import ModalRegistro from './ModalRegistro'; // Ajustar la ruta según corresponda

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const openModal = (type) => {
        setShowModal(false);
        setTimeout(() => {
            setModalType(type);
            setShowModal(true);
        }, 200); // Espera breve para asegurar que el modal previo se cierre
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
    };

    return (
        <ModalContext.Provider value={{ showModal, openModal, closeModal, modalType }}>
            {children}
            {modalType === 'login' && showModal && <Modalinicio closeModal={closeModal} />}
            {modalType === 'SignUp' && showModal && <ModalRegistro closeModal={closeModal} />}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
