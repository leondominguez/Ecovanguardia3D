import { Navbar } from "../../components/navbar/Navbar";
import React, { useState, useRef } from "react";
import SkyBackground from "../lobby/SkyBackground";
import { Canvas } from "@react-three/fiber";
import "./Quiz.css";
import { OrbitControls, PerspectiveCamera, Loader } from "@react-three/drei";
import DeepOceanQuiz from "./DeepOceanQuiz";
import AmbientLight from "../../components/lights/AmbientLight";
import HemisphereLight from "../../components/lights/HemisphereLight";
import PointLight from "../../components/lights/PointLight";
import { Html, Text } from "@react-three/drei";
import Text3dQuiz from "../../components/text3d/Text3dQuiz";
import { useAuth } from "../../pages/login/login-context/AuthContext";
import { Navigate } from "react-router-dom";

  // Preguntas del Quiz
import Barril1 from "./Barril1.jsx";
import Langosta from "./Langosta.jsx";
import Barril2 from "./Barril2.jsx";
import Coral1 from "./Coral1.jsx";
import CoralSub from "./CoralSub.jsx";
import Coral2 from "./Coral2.jsx";

function Quiz() {
    const { authUser } = useAuth();
    if (authUser==null) {
        return <Navigate to="/login" replace />;
    }
    
  //Preguntas del Quiz
  const questions = [
    {
      question: "¿Qué es la contaminación del agua?",
      options: [
        "La presencia de sustancias tóxicas en el agua que afectan a los ecosistemas y la salud humana",
        "El uso excesivo de agua potable en las ciudades",
        "La evaporación del agua en grandes masas",
        "El cambio del color del agua debido a la luz solar",
      ],
      answer: "La presencia de sustancias tóxicas en el agua que afectan a los ecosistemas y la salud humana",
    },
    {
      question: "¿Cuál de los siguientes es un efecto de la escasez de agua?",
      options: [
        "Mayor acceso a agua limpia",
        "Conflictos por recursos hídricos",
        "Disminución de la contaminación del agua",
        "Aumento de las lluvias en áreas urbanas",
      ],
      answer: "Conflictos por recursos hídricos",
    },
    {
      question: "¿Qué provoca la acidificación de los océanos?",
      options: [
        "El aumento de dióxido de carbono (CO2) en la atmósfera que se disuelve en el agua",
        "La reducción de oxígeno en las aguas profundas",
        "El aumento de residuos plásticos en los océanos",
        "La sobrepesca en los ecosistemas marinos",
      ],
      answer: "El aumento de dióxido de carbono (CO2) en la atmósfera que se disuelve en el agua",
    },
    {
      question: "¿Qué actividad humana es una de las principales causas de la contaminación del agua?",
      options: [
        "El consumo de agua embotellada",
        "La descarga de desechos industriales y químicos en ríos y lagos",
        "La pesca en aguas profundas",
        "El uso de energía eólica",
      ],
      answer: "La descarga de desechos industriales y químicos en ríos y lagos",
    },
    {
      question: "¿Qué consecuencias puede tener la escasez de agua en la agricultura?",
      options: [
        "Un aumento en la producción de cultivos",
        "Menor necesidad de sistemas de riego",
        "Pérdida de cultivos y aumento de los precios de los alimentos",
        "Mayor disponibilidad de agua para la ganadería",
      ],
      answer: "Pérdida de cultivos y aumento de los precios de los alimentos",
    },
    {
      question: "¿Qué ecosistema marino es más afectado por la acidificación de los océanos?",
      options: [
        "Los arrecifes de coral",
        "Las zonas polares",
        "Los manglares",
        "Las playas tropicales",
      ],
      answer: "Los arrecifes de coral",
    },
  ];
 
  // Estados
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Función para manejar la respuesta
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const cameraRef = useRef();

  return (
    <>
      <Navbar />
      {authUser && (<div style={{ height: "100vh" }}>
        <Canvas>
          <SkyBackground
            distance={300} // Define la distancia del cielo
            sunPosition={[-0.065, 0.025, -0.1]} // Coloca el sol en una posición alta en el cielo
            inclination={0.2} // Ajusta la inclinación para simular la puesta del sol
            azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
            mieCoefficient={0.48} // Ajusta la dispersión de Mie
            mieDirectionalG={0.0} // Ajusta el brillo del sol
            rayleigh={0.095} // Ajusta la dispersión de Rayleigh
            turbidity={-0.048} // Ajusta la cantidad de partículas en el aire
          />
          <AmbientLight intensity={3.5} />
          <DeepOceanQuiz
            position={[0, 0.05, 0]}
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1]}
          />
          <PointLight
            position={[0, 8, 0]}
            intensity={8.8}
            color="white"
            distance={100}
            decay={1}
            showHelper={true}
            castShadow={true}
            helperSize={0.5}
          />
          
          <HemisphereLight
            skyColor="white" // Color del cielo
            groundColor="white" // Color del suelo
            intensity={1.1} // Intensidad de la luz hemisférica
            position={[0, 10.5, 0]} // Posición de la luz en el espacio 3D
            showHelper={true} // Muestra un helper visual para la luz
          />
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[-0.3, 3.0, 4.8]}
            fov={75}
          />
          <axesHelper args={[200]} />
          <OrbitControls
            enableZoom
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.1}
            enableRotate={true}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 4} // -45 grados 
            maxAzimuthAngle={Math.PI / 4} // 45 grados
          />

          <Text3dQuiz
            text={
              showScore
                ? `Puntaje final: ${score}/${questions.length}`
                : `Puntaje actual: ${score}`
            }
            fontPath="/fonts/carterOne/Carter One_Regular.json"
            position={[-1.5, 2.5, 0]} // Posición en el espacio 3D
            frontColor={"#007bff"} // Color del frente
            sideColor={"#bfd9ec"} // Color del resto
            size={0.2}
            depth={-1} // Anclar verticalmente al centro
          ></Text3dQuiz>

          {/* Quiz UI */}
          <Html
            position={[-1.8, 2, -1]}
            distanceFactor={8}
            className="quiz-container"
          >
            {showScore ? (
              <div className="score-section">
                <h2>¡Terminaste el quiz!</h2>
              </div>
            ) : (
              <div className="question-section">
                <h2>
                  Pregunta {currentQuestion + 1}/{questions.length}
                </h2>
                <p>{questions[currentQuestion].question}</p>
                <div className="options-section">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="option-button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </Html>
          <Barril1
            position={[0, 0.1, 0.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.003, 0.003, 0.003]}// Ajustar la escala
          />
          <Barril2
            position={[0, 0.1, 2.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.0051, 0.0051, 0.0051]} // Ajustar la escala
          />
          <Langosta
            position={[0, 10, 2.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1, 1, 1]} // Ajustar la escala
          />
          <Coral1
            position={[5, 0, 2.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.51, 0.51, 0.51]} // Ajustar la escala
          />
          <Coral1
            position={[5, 0, 1]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.51, 0.51, 0.51]} // Ajustar la escala
          />
          <Coral1
            position={[3, 0, 2.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.51, 0.51, 0.51]} // Ajustar la escala
          />
          <CoralSub
            position={[-5, 0.8, -2.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.8, 0.8, 0.8]} // Ajustar la escala
          />
          <Coral2
            position={[-5, 1.5, 4.5]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.51, 0.51, 0.51]} // Ajustar la escala
          />
        </Canvas>

        <Loader
          containerStyles={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: "100%",
            height: "100%",
          }} // Estilos para el contenedor del loader
          innerStyles={{ width: "300px", height: "10px" }} // Estilos para el contenedor interno del loader
          barStyles={{
            backgroundColor: "#63c548",
            height: "10px",
            borderRadius: 5,
          }} // Estilos para la barra de progreso
          dataStyles={{ color: "#63c548", fontSize: "26px" }} // Estilos para el texto de datos
          dataInterpolation={(p) => `Cargando ${p.toFixed(0)}%`} // Función para interpolar los datos de carga
          initialState={(active) => active} // Estado inicial del loader
        />
      </div>)
    }
    </>
  );
}

export default Quiz;
