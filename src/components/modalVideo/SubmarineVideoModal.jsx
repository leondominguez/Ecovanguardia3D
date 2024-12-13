import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => (
  <div className="text-xl font-bold mb-4">{children}</div>
);

const ModalBody = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const ModalCloseButton = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
  >
    ✕
  </button>
);

const ModalContent = ({ children, onClose }) => (
  <div className="relative">
    <ModalCloseButton onClick={onClose} />
    {children}
  </div>
);

export { Modal, ModalContent, ModalHeader, ModalBody, ModalCloseButton };