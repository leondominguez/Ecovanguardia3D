import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ title, content, onClose, ModelComponent }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>

        <div className="modal-body">
          {/* Sección del modelo 3D */}
          <div className="modal-3d-view">
            <ModelComponent /> {/* Renderiza el modelo 3D */}
          </div>

          {/* Sección de texto */}
          <div className="modal-text">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  ModelComponent: PropTypes.elementType.isRequired,
};

export default Modal;