// WaterShortage.jsx

import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import SubmarineModel from '../../components/models-3d-component/submarine/Submarine';

const WaterShortage = () => {
  const directionalLightRef = useRef();

  // Definir posiciones de las rocas
  const rockPositions = [
    [2, -2.5, -5],
    [-3, -2.5, -10],
    [1, -2.5, -8],
    [0, -2.5, -12],
  ];

  return (
    <>
      {/* Elementos HTML fuera del Canvas */}
      <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Submarino en acción</h1>
        <button
          onClick={() => alert('¡Botón presionado!')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Interactuar
        </button>
      </div>

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

        {/* Plano para recibir sombras */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial opacity={0.5} />
        </mesh>

        {/* Añadir partículas (estrellas) para simular burbujas pequeñas */}
        <Stars radius={30} depth={10} count={300} factor={4} saturation={0} fade speed={1} />

        {/* Añadir rocas a la escena */}
        {rockPositions.map((position, index) => (
          <mesh key={index} position={position} receiveShadow castShadow>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        ))}

        {/* Carga del modelo del submarino y pasar las posiciones de las rocas */}
        <Suspense fallback={null}>
          <SubmarineModel
            castShadow
            scale={1}
            position={[0, 0, 0]}
            rockPositions={rockPositions} // Pasar posiciones de las rocas
          />
        </Suspense>

        {/* Controles de la cámara */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </>
  );
};

export default WaterShortage;
