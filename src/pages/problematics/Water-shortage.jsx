import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { DirectionalLightHelper, AxesHelper } from 'three';
import SubmarineModel from '../../components/models-3d-component/submarine/Submarine';

const WaterShortage = () => {
  const directionalLightRef = useRef();

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 5, 15], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Fondo azul oscuro para simular el ambiente submarino */}
      <color attach="background" args={['#001f3f']} />

      {/* Luces en la escena */}
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={directionalLightRef}
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {directionalLightRef.current && (
        <primitive object={new DirectionalLightHelper(directionalLightRef.current, 5)} />
      )}

      {/* Ejes de referencia */}
      <primitive object={new AxesHelper(5)} />

      {/* Plano para recibir sombras */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.5} />
      </mesh>

      {/* Añadir partículas (estrellas) para simular burbujas pequeñas */}
      <Stars radius={30} depth={10} count={300} factor={4} saturation={0} fade speed={1} />

      {/* Carga del modelo del submarino */}
      <Suspense fallback={<div>Loading...</div>}>
        <SubmarineModel castShadow scale={1} position={[0, 0, 0]} />
      </Suspense>

      {/* Controles de la cámara */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default WaterShortage;
