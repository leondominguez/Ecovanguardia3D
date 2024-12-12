import { Navbar } from "../../components/navbar/Navbar";
import React, { useState, useRef } from "react";
import SkyBackground from "../lobby/SkyBackground";
import { Canvas } from "@react-three/fiber";
import "./Quiz.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import DeepOceanQuiz from "./DeepOceanQuiz";
import AmbientLight from "../../components/lights/AmbientLight";
import HemisphereLight from "../../components/lights/HemisphereLight";
import PointLight from "../../components/lights/PointLight";
import { Html, Text } from "@react-three/drei";
import Text3dQuiz from "../../components/text3d/Text3dQuiz";

function Quiz() {
  // Preguntas del Quiz
  const questions = [
    {
      question: "¿Cuál es el lenguaje de programación más popular en 2024?",
      options: ["Java", "Python", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "¿Qué significa HTML?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "High Text Machine Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "¿Quién creó Linux?",
      options: [
        "Bill Gates",
        "Linus Torvalds",
        "Steve Jobs",
        "Mark Zuckerberg",
      ],
      answer: "Linus Torvalds",
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
            skyColor="white"
            groundColor="white"
            intensity={1.1}
            position={[0, 10.5, 0]}
            showHelper={true}
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
        </Canvas>
      </div>
    </>
  );
}

export default Quiz;
