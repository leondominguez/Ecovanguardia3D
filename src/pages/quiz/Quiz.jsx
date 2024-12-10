import { Navbar } from "../../components/navbar/Navbar";
import React, { useState } from "react";
import SkyBackground from "../lobby/SkyBackground";
import { Canvas } from "@react-three/fiber";
import "./Quiz.css";
import { OrbitControls } from "@react-three/drei";
import DeepOcean from "./DeepOceanQuiz";
import AmbientLight from "../../components/lights/AmbientLight";

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
  return (
    <>
      <Navbar />

      <div style={{height: "100vh"}}>
      <Canvas >
      <SkyBackground
      distance={550000} // Define la distancia del cielo
      sunPosition={[-0.065, 0.025, -0.1]} // Coloca el sol en una posición alta en el cielo
      inclination={0.2} // Ajusta la inclinación para simular la puesta del sol
      azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
      mieCoefficient={0.48} // Ajusta la dispersión de Mie
      mieDirectionalG={0.3} // Ajusta el brillo del sol
      rayleigh={0.095} // Ajusta la dispersión de Rayleigh
      turbidity={-0.048} // Ajusta la cantidad de partículas en el aire
      
    />
  <AmbientLight intensity={3.5}/>
  <DeepOcean
            position={[0, 0.05, 0]}
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1]} // Ajustar la escala
          />


      <OrbitControls />
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
