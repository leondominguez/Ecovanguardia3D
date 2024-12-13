import React from 'react';
import PropTypes from 'prop-types';
import './ModalWatter.css';

const ModalWatter = ({ title, content, onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>{title}</h2>
        <div>{content}</div>
        <button onClick={onClose} className="button">Cerrar</button>
      </div>
    </div>
  );
};

ModalWatter.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalWatter;