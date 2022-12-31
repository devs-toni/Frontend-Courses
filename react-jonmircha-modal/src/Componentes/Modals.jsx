import React from 'react';
import Modal from './Modal';
import { useModal } from '../Hooks/useModal';

const Modals = () => {

    const [isOpen, openModal, closeModal] = useModal(false);

    return (
        <div>
            <h1>Ventana Modal</h1>
            <button onClick={openModal}>Modal 1</button>
            <Modal isOpen={isOpen} close={closeModal}>
                <h3>Ventana Modal</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/350/animals" alt="Animals" />
            </Modal>
        </div>
    )
}

export default Modals;