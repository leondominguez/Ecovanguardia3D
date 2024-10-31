import CircleHome from "../../components/circleHome/circleHome";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.css";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import WaterShortage from "../../pages/problematics/Water-shortage"; // Importa el componente del modelo
import WaterPollution from "../../pages/problematics/Water-pollution"; // Importa el componente del modelo
import WaterAcidification from "../../pages/problematics/Water-acidification"; // Importa el componente del modelo

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
    <>
      <div className="home">
        <Navbar />
        <div className="CopyHome">
          <div className="title">
            <h1 className="title-eco">ECO</h1>
            <h1 className="title-vanguardia">VANGUARDIA</h1>
          </div>

          <h2 className="eslogan">Pequeños cambios, grandes impactos</h2>
          <h3 className="invitacion">
            Elige un tema y sumérgete en la aventura ecovanguardista
          </h3>
        </div>

        <div className="horizontal-container">

          <CircleHome //water pollution
            logo="src/assets/icons/sea-life-fish-svgrepo-com.svg"
            slogan="Contaminación <br /> Del agua"
            onClick={() =>
              openModal(
                "Contaminación del agua",
                "La contaminación del agua es un problema grave que afecta a la vida acuática y a la salud humana...",
                WaterPollution // Pasa el componente del modelo 3D
              )
            }
          />

          <CircleHome //water shortange
            logo="src/assets/icons/faucet-svgrepo-com.svg"
            slogan="Escasez <br /> Del agua"
            onClick={() =>
              openModal(
                "Escasez del agua",
                "La escasez de agua es un problema global que afecta a millones de personas...",
                WaterShortage // Pasa el componente del modelo 3D
              )
            }
          />

          <CircleHome //water acidification
            logo="src/assets/icons/sea-svgrepo-com.svg"
            slogan="Acidificación <br /> de los Océanos"
            onClick={() =>
              openModal(
                "Acidificación del agua",
                "La acidificación del agua es un problema ambiental que afecta a los ecosistemas marinos...",
                WaterAcidification // Pasa el componente del modelo 3D
              )
            }
          />
        </div>

        <div className="video-container">
          <video  className="background-video"
          src="src/assets/videos/5607745-uhd_3840_2160_30fps.mp4"
          autoPlay
          loop
          muted
        ></video>
        
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
    </>
  );
}

export default Home;
