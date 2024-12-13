import React, { useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { Html } from "@react-three/drei";
import "./Leaderboard.css";

const Leaderboard = ({ position }) => {
  const [scores, setScores] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const fetchScores = async () => {
    const scoresCollection = collection(db, "scores");
    const scoresQuery = query(
      scoresCollection,
      orderBy("score", "desc"),
      orderBy("date", "desc")
    );
    const scoresSnapshot = await getDocs(scoresQuery);
    const scoresList = scoresSnapshot.docs.map((doc) => doc.data());
    setScores(scoresList);
  };

  const handleShowLeaderboard = async () => {
    if (!showLeaderboard) {
      await fetchScores();
    }
    setShowLeaderboard(!showLeaderboard);
  };

  return (
    <Html
      scale={0.51}
      position={position}
      distanceFactor={5}
      transform={true}
      className="leaderboard-container"
      userSelect="none" 
    >
      <button onClick={handleShowLeaderboard}>
        {showLeaderboard ? "Ocultar Puntajes" : "Mostrar Puntajes"}
      </button>
      {showLeaderboard && (
        <div className="leaderboard-table">
          <h2>Tabla de Mejores Puntajes</h2>
          <table>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {new Date(score.date.seconds * 1000).toLocaleDateString()}
                  </td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Html>
  );
};

export default Leaderboard;