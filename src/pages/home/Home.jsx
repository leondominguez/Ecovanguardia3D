import { useState } from 'react';
import Modal from '../../components/modal/Modal';  
import WaterShortage from '../../pages/problematics/Water-shortage'; // Importa el componente del modelo
import WaterPollution from '../../pages/problematics/Water-pollution'; // Importa el componente del modelo
import WaterAcidification from '../../pages/problematics/Water-acidification'; // Importa el componente del modelo
import './Home.css';

function Home() {
  const [modalData, setModalData] = useState(null);

  // Función para abrir el modal con datos específicos
  const openModal = (title, content, ModelComponent) => {
    setModalData({ title, content, ModelComponent });
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
        <button
          className="circle"
          onClick={() =>
            openModal(
              'Escasez del agua',
              'La escasez de agua es un problema global que afecta a millones de personas...',
              WaterShortage // Pasa el componente del modelo 3D
            )
          }
        >
          <p>Escasez del agua</p>
        </button>
        <button
          className="circle"
          onClick={() =>
            openModal(
              'Contaminación del agua',
              'La contaminación del agua es un problema grave que afecta a la vida acuática y a la salud humana...',
              WaterPollution // Pasa el componente del modelo 3D
            )
          }
        >
          <p>Contaminación del agua</p>
        </button>
        <button
          className="circle"
          onClick={() =>
            openModal(
              'Acidificación del agua',
              'La acidificación del agua es un problema ambiental que afecta a los ecosistemas marinos...',
              WaterAcidification // Pasa el componente del modelo 3D
            )
          }
        >
          <p>Acidificación del agua</p>
        </button>
      </div>

      {modalData && (
        <Modal
          title={modalData.title}
          content={modalData.content}
          onClose={closeModal}
          ModelComponent={modalData.ModelComponent} // Pasa el componente del modelo 3D al modal
        />
      )}
    </div>
  );
}

export default Home;