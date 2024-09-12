import React, { createContext, useContext, useState, useEffect } from 'react';
import Modalinicio from './Modalinicio'; 
import ModalRegistro from './ModalRegistro'; 

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const openModal = (type) => {
        setModalType(type);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
    };

    useEffect(() => {
        if (!showModal) {
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.remove();
            }
        }
    }, [showModal]);

    return (
        <ModalContext.Provider value={{ showModal, openModal, closeModal, modalType }}>
            {children}
            {modalType === 'login' && showModal && <Modalinicio closeModal={closeModal} />}
            {modalType === 'SignUp' && showModal && <ModalRegistro closeModal={closeModal} />}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);