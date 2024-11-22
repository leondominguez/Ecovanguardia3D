// Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ title, content, onClose, ModelComponent }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <div className="modal-3d-view">
            {ModelComponent && <ModelComponent />}
          </div>
          <div className="modal-text">
            <h2>{title}</h2>
            <div>{content}</div> {/* Renderiza el contenido como un elemento React */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // Cambia a PropTypes.node para aceptar elementos React
  onClose: PropTypes.func.isRequired,
  ModelComponent: PropTypes.elementType.isRequired,
};

export default Modal;