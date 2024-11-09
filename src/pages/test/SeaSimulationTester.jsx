import React, { useState } from 'react';
import SeaSimulation from '../../components/html-3d-example/sea-simulation/seaSimulation'; // Asegúrate de que la ruta sea correcta

const SeaSimulationTester = () => {
  const [showSimulation, setShowSimulation] = useState(false);

  const toggleSimulation = () => {
    setShowSimulation(!showSimulation);
  };

  return (
    <div>
        <SeaSimulation/>
    </div>
  );
};

export default SeaSimulationTester;