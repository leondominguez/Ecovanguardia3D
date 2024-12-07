import { Navbar } from "../../components/navbar/Navbar";
import React, { useState } from "react";
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
    <div>
      <Navbar />
      <div className="quiz-container">
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
      </div>
    </div>
  );
}

export default Quiz;
