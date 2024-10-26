// Modal.jsx
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ title, content, image, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>

        <div className="modal-body">
          {/* Columna de la imagen */}
          <div
            className="modal-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          {/* Columna del contenido */}
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
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
