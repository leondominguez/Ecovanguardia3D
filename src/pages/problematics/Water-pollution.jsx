import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Octopus from '../../components/octopusExample/Octopus'; // Importa el modelo de contaminación del agua

const WaterPollution = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }} // Ajusta la posición de la cámara según necesites
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
        <Octopus/>
      {/* Configuración del entorno de contaminación del agua */}
      <Suspense fallback={<div>Loading...</div>}>
        <Octopus scale={1} /> {/* Ajusta el tamaño del modelo si es necesario */}
      </Suspense>

      <OrbitControls enableZoom={true} /> {/* Permite rotar y hacer zoom */}
    </Canvas>
  );
};


export default WaterPollution;