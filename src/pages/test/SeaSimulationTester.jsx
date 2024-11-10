import React, { useState } from 'react';
import SeaSimulation from '../../components/models-3d-component/sea-simulation/SeaSimulation'; // Asegúrate de que la ruta sea correcta
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