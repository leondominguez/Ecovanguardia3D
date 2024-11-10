import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SubmarineModel from '../../components/models-3d-component/submarine/Submarine'; // Importa el modelo del submarino
import WebGLSettings from '../../components/performance/WebGLSettings';
const WaterShortage = () => {
  return (
    <Canvas
      dpr={[1, 1.5]} // Controla el pixel ratio para optimizar el rendimiento
      camera={{ position: [0, 0, 15], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Renderiza el entorno DeepSea */}

      <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={false} />
      <Suspense fallback={null}>
        {/* Esto añadirá el fondo submarino */}
      </Suspense>

      {/* Renderiza el modelo del submarino */}
      <Suspense fallback={<div>Loading...</div>}>
        <SubmarineModel scale={1} position={[0, -2, 0]} />
      </Suspense>

      {/* Controles de la cámara */}
      <OrbitControls enableZoom={true} /> {/* Permite rotar y hacer zoom */}
    </Canvas>
  );
};

export default WaterShortage;
