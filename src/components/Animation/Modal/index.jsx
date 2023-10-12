import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.css'

const Modals = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen, 'modal1')

  const openModal = () => {
    console.log(isOpen, 'modal1')
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="Modals">
      <button onClick={openModal}>Open Modal</button>
     {isOpen &&  <Modal isOpen={isOpen} onClose={closeModal} />}
    </div>
  );
};

export default Modals;
