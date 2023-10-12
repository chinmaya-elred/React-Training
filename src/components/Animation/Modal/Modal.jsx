import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose }) => {
    console.log(isOpen, 'modal')
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        />
      )}
      <motion.div
        className="modalAnimation"
        variants={modalVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        exit="hidden"
      >
        <div className="modalAnimation-content">
          <h2>Modal Content</h2>
          <button onClick={onClose}>Close Modal</button>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
