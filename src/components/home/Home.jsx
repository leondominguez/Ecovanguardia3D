// Home.jsx
import { useState } from 'react';
import Modal from '../modal/Modal';  
import './Home.css';

function Home() {
  const [modalData, setModalData] = useState(null);

  // Función para abrir el modal con datos específicos
  const openModal = (title, content, image) => {
    setModalData({ title, content, image });
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="home">
      <h1 className="title">ECO VANGUARDIA</h1>
      <p className="subtitle">Pequeños cambios, grandes impactos</p>
      <p className="instruction">Elige un tema y sumérgete en la aventura ecovanguardista</p>

      <div className="circle-container">
        {}
        <button
          className="circle"
          onClick={() =>
            openModal(
              'Escasez del agua',
              'La escasez de agua es un problema global que afecta a millones de personas debido a la falta de acceso a agua potable y saneamiento. Esta crisis se debe a factores como el crecimiento poblacional, el cambio climático, la contaminación y la sobreexplotación de recursos hídricos...',
              
            )
          }
        >
          <p>Escasez del agua</p>
        </button>
        {}
      </div>

      {}
      {modalData && (
        <Modal
          title={modalData.title}
          content={modalData.content}
          image={modalData.image}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Home;
