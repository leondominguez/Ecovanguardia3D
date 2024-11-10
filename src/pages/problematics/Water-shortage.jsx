import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SubmarineModel from '../../components/models-3d-component/submarine/Submarine'; // Importa el modelo del submarino
import DeepSea from '../../components/staggings/deepsea/DeepSea'; // Importa el fondo submarino
import WebGLSettings from '../../components/performance/WebGLSettings';
const WaterShortage = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }} // Ajusta la posición de la cámara según necesites
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Renderiza el entorno DeepSea */}

      <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={false} />
      <Suspense fallback={null}>
        <DeepSea /> {/* Esto añadirá el fondo submarino */}
      </Suspense>

      {/* Renderiza el modelo del submarino */}
      <Suspense fallback={<div>Loading...</div>}>
        <SubmarineModel scale={1} position={[0, -2, 0]} /> {/* Ajusta el tamaño y posición según sea necesario */}
      </Suspense>

      {/* Controles de la cámara */}
      <OrbitControls enableZoom={true} /> {/* Permite rotar y hacer zoom */}
    </Canvas>
  );
};

export default WaterShortage;
