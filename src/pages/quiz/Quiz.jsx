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

function Quiz() {
    //Preguntas del Quiz
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
      options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Mark Zuckerberg"],
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

      <div style={{height: "100vh"}}>
      <Canvas >
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
  <AmbientLight intensity={3.5}/>
  <DeepOceanQuiz
            position={[0, 0.05, 0]}
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1]} // Ajustar la escala
          />

<PointLight  //peces del medio
            position={[0,8, 0]} // sobre el mar rayos
            intensity={8.8} // Intensidad de la luz
            color="white" // Color de la luz
            distance={100} // Distancia máxima de la luz
            decay={1} // Decaimiento de la luz con la distancia
            showHelper={true} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
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
  minPolarAngle={Math.PI / 6} // Limita el ángulo mínimo para evitar que la cámara pase por debajo del suelo
  maxPolarAngle={Math.PI / 2.1} // Limita el ángulo máximo para evitar que la cámara pase por encima
  enableRotate={true} // Habilita la rotación con el botón izquierdo del ratón
  enablePan={false} // Habilita el desplazamiento con el botón derecho del ratón
/>
      </Canvas>

      </div>

    </>
  );
}

export default Quiz;


      {/* <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            <h2>¡Terminaste el quiz!</h2>
            <p>
              Obtuviste {score} de {questions.length} respuestas correctas.
            </p>
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
      </div> */}
