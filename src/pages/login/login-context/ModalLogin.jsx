import React from 'react';
import './ModalLogin.css';

const ModalLogin = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modalLogin-content">
        <div className="modal-header">
          <h2 className="title-modal">{title}</h2>
        </div>
        <div className="modalLogin-body">
          <p dangerouslySetInnerHTML={{ __html: message }}></p>
        </div>
        <div className="modal-footer">
          <button className="modal-accept-button" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;