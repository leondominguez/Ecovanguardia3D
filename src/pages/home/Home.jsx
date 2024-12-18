import React, { useState, useRef } from "react";
import CircleHome from "../../components/circleHome/CircleHome";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.css";
import Modal from "../../components/modal/Modal";
import WaterShortage from "../../pages/problematics/Water-shortage"; // Importa el componente del modelo
import WaterPollution from "../../pages/problematics/water-pollution/Water-pollution"; // Importa el componente del modelo
import WaterAcidification, { waterAcidificationContent } from "../problematics/water-acidification/Water-acidification"; // Importa el componente del modelo

function Home() {
  const [modalData, setModalData] = useState(null);
  const videoRef = useRef(null); // Referencia para el video

  // Función para abrir el modal con datos específicos
  const openModal = (title, content, ModelComponent) => {
    setModalData({ title, content, ModelComponent });
    if (videoRef.current) {
      videoRef.current.pause(); // Pausa el video cuando se abre el modal
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalData(null);
    if (videoRef.current) {
      videoRef.current.play(); // Reproduce el video cuando se cierra el modal
    }
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
          <CircleHome className="circle"//water pollution
            logo="/assets/icons/sea-life-fish-svgrepo-com.svg"
            slogan="Contaminación <br /> Del agua"
            onClick={() =>
              openModal(
                "Contaminación del agua",
                "La contaminación del agua es una crisis devastadora que envenena ríos y océanos, causa enfermedades y destruye ecosistemas, dejando a millones sin acceso a agua limpia y poniendo en peligro la vida en el planeta.",
                WaterPollution // Pasa el componente del modelo 3D
              )
            }
          />

          <CircleHome className="circle" //water shortange
            logo="/assets/icons/faucet-svgrepo-com.svg"
            slogan="Escasez <br /> Del agua"
            onClick={() =>
              openModal(
                "Escasez del agua",
                "La escasez de agua es una crisis mundial que afecta a millones de personas. Esta problemática surge cuando la demanda de agua supera la disponibilidad de fuentes seguras. Factores como el crecimiento poblacional, el cambio climático, la contaminación y el uso insostenible de recursos han intensificado esta situación. La falta de acceso a agua limpia y segura no solo impacta la salud y el bienestar de las personas, sino también la economía, la agricultura y los ecosistemas. Es crucial tomar medidas de conservación, uso eficiente y protección de nuestros recursos hídricos para asegurar un futuro sostenible.",
                WaterShortage // Pasa el componente del modelo 3D
              )
            }
          />

          <CircleHome className="circle" //water acidification
            logo="/assets/icons/sea-svgrepo-com.svg"
            slogan="Acidificación <br /> de los Océanos"
            onClick={() =>
              openModal(
                
              "Acidificación de los Oceanos",//ojito le pase el titulo vacio para que no se muestre en el modal ya que hay redundancia de titulo
                waterAcidificationContent, //pasa el contenido de texto al modal traido desde el componente water-acidification
                WaterAcidification // Pasa el componente del modelo 3D
              )
            }
          />
        </div>

        <div className="video-container">
          <video
            className="background-video"
            src="/assets/videos/5607745-uhd_3840_2160_30fps.mp4"
            autoPlay
            loop
            muted
            ref={videoRef} // Asigna la referencia al video
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
