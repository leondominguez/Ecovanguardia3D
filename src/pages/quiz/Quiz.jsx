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
import useQuizStore from '../.././components/stores/use-quiz-store.js';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.config.js";

function Quiz() {
  // Estados de React
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { quiz, setQuiz, incrementQuizPercentage } = useQuizStore();
  const { authUser } = useAuth();
  const cameraRef = useRef();

  if (authUser == null) {
    return <Navigate to="/login" replace />;
  }

  // Preguntas del quiz
  const questions = [
    {
      question: "¿Qué es la contaminación del agua?",
      options: [
        "La presencia de sustancias tóxicas en el agua que afectan a los ecosistemas y la salud humana",
        "El uso excesivo de agua potable en las ciudades",
        "La evaporación del agua en grandes masas",
        "El cambio del color del agua debido a la luz solar",
      ],
      answer:
        "La presencia de sustancias tóxicas en el agua que afectan a los ecosistemas y la salud humana",
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
      answer:
        "El aumento de dióxido de carbono (CO2) en la atmósfera que se disuelve en el agua",
    },
    {
      question:
        "¿Qué actividad humana es una de las principales causas de la contaminación del agua?",
      options: [
        "El consumo de agua embotellada",
        "La descarga de desechos industriales y químicos en ríos y lagos",
        "La pesca en aguas profundas",
        "El uso de energía eólica",
      ],
      answer: "La descarga de desechos industriales y químicos en ríos y lagos",
    },
    {
      question:
        "¿Qué consecuencias puede tener la escasez de agua en la agricultura?",
      options: [
        "Un aumento en la producción de cultivos",
        "Menor necesidad de sistemas de riego",
        "Pérdida de cultivos y aumento de los precios de los alimentos",
        "Mayor disponibilidad de agua para la ganadería",
      ],
      answer: "Pérdida de cultivos y aumento de los precios de los alimentos",
    },
    {
      question:
        "¿Qué ecosistema marino es más afectado por la acidificación de los océanos?",
      options: [
        "Los arrecifes de coral",
        "Las zonas polares",
        "Los manglares",
        "Las playas tropicales",
      ],
      answer: "Los arrecifes de coral",
    },
  ];

  const saveScoreToFirebase = async (finalScore) => {
    if (!authUser) return;
  
    try {
      const userDocRef = doc(db, "scores", authUser.uid);
      await setDoc(userDocRef, {
        score: finalScore,
        timestamp: new Date(),
      });
      console.log("Puntaje guardado en Firebase");
    } catch (error) {
      console.error("Error al guardar el puntaje:", error);
    }
  };

  // Función para manejar la respuesta
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setQuiz({ correctAnswers: quiz.correctAnswers + 1 });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      incrementQuizPercentage();
    } else {
      setQuiz({ ...quiz, percentageQuizComplete: 100 });
      saveScoreToFirebase(quiz.correctAnswers);
    }
  };

  return (
    <>
      <Navbar />
      {authUser && (
        <div style={{ height: "100vh" }}>
          <Canvas>
            <SkyBackground
              distance={300}
              sunPosition={[-0.065, 0.025, -0.1]}
              inclination={0.2}
              azimuth={180}
              mieCoefficient={0.48}
              mieDirectionalG={0.0}
              rayleigh={0.095}
              turbidity={-0.048}
            />
            <AmbientLight intensity={3.5} />
            <DeepOceanQuiz position={[0, 0.05, 0]} receiveShadow rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]} />
            <PointLight position={[0, 8, 0]} intensity={8.8} color="white" distance={100} decay={1} castShadow />
            <HemisphereLight skyColor="white" groundColor="white" intensity={1.1} position={[0, 10.5, 0]} />
            <PerspectiveCamera ref={cameraRef} makeDefault position={[-0.3, 3.0, 4.8]} fov={75} />
            <OrbitControls enableZoom minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.1} enableRotate={true} enablePan={false} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4} />

            <Text3dQuiz text={quiz.percentageQuizComplete === 100 ? `Puntaje final: ${quiz.correctAnswers}/${questions.length}` : `Puntaje actual: ${quiz.correctAnswers}`} fontPath="/fonts/carterOne/Carter One_Regular.json" position={[-1.5, 2.5, 0]} frontColor={"#007bff"} sideColor={"#bfd9ec"} size={0.2} depth={-1} />

            <Html position={[-1.8, 2, -1]} distanceFactor={8} className="quiz-container">
              {quiz.percentageQuizComplete === 100 ? (
                <div className="score-section">
                  <h2>¡Terminaste el quiz!</h2>
                </div>
              ) : (
                <div className="question-section">
                  <h2>Pregunta {currentQuestion + 1}/{questions.length}</h2>
                  <p>{questions[currentQuestion].question}</p>
                  <div className="options-section">
                    {questions[currentQuestion].options.map((option) => (
                      <button key={option} onClick={() => handleAnswer(option)} className="option-button">
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Html>

            {/* 3D Models */}
            <Barril1 position={[0, 0.1, 0.5]} castShadow scale={[0.003, 0.003, 0.003]} />
            <Barril2 position={[0, 0.1, 2.5]} castShadow scale={[0.0051, 0.0051, 0.0051]} />
            <Langosta position={[0, 10, 2.5]} castShadow scale={[1, 1, 1]} />
            <Coral1 position={[5, 0, 2.5]} castShadow scale={[0.51, 0.51, 0.51]} />
            <Coral1 position={[5, 0, 1]} castShadow scale={[0.51, 0.51, 0.51]} />
          </Canvas>
        </div>
      )}
    </>
  );
}

export default Quiz;
