import PropTypes from 'prop-types';
import './Modal.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import SubmarineModel from '../../components/shark/Shark'; // Ajusta según la ruta
import DeepSea from '../../components/staggings/deepsea/DeepSea';

function Modal({ title, content, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>

        <div className="modal-body">
          {/* Sección del modelo 3D */}
          <div className="modal-3d-view">
            <Canvas
              camera={{ position: [0, 0, 15], fov: 50 }} // Ajusta la posición de la cámara según necesites
              style={{ width: '100%', height: '100%' }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />

              {/* Configuración del entorno submarino */}
              <DeepSea />

              <Suspense fallback={<div>Loading...</div>}>
                <SubmarineModel scale={1} /> {/* Ajusta el tamaño del modelo si es necesario */}
              </Suspense>

              <OrbitControls enableZoom={true} /> {/* Permite rotar y hacer zoom */}
            </Canvas>
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
};

export default Modal;
