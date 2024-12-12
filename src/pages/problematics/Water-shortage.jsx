// Scene.js
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import CubeMapBackground from '../../components/CubeMapBackground/CubeMapBackground';
import SubmarineModel from '../../components/models-3d-component/submarine/Submarine';
import Mine from "../../components/models-3d-component/seaMine/SeaMIne" 
import Text3D from '../../components/text3d/Text3D';

const Scene = () => {
  const directionalLightRef = useRef();

  // Definir posiciones de las minas (antes eran rocas)
  const minePositions = [
    [0, 0, 0],
    [3, 0, 0],
    [-3, 0, 0],
    [0, 0, 3],
    [0, 0, -3]
  ];

  return (
    <>
      <CubeMapBackground />

      {/* Luces en la escena */}
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={directionalLightRef}
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
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

      {/* Añadir minas en vez de rocas */}
      {minePositions.map((position, index) => (
        <Suspense fallback={null} key={index}>
          <Mine position={position} />
        </Suspense>
      ))}

      {/* Carga del modelo del submarino y pasar las posiciones de las minas (antes rocas) */}
      <Suspense fallback={null}>
        <SubmarineModel
          castShadow
          scale={1} 
          position={[0, 0, 0]}
          rockPositions={minePositions} // Ahora representando las minas
        />
      </Suspense>

      {/* Añadir el texto 3D */}
      <Suspense fallback={null}>
        <Text3D
          text="Profundidades Del mundo Marino "
          position={[-8, 6, 0]}
          frontColor={0x04D9D9}
          sideColor={0x0000ff}
          size={1}
          depth={0.2}
          fontPath="/fonts/carterOne/Carter One_Regular.json" 
        />
      </Suspense>

      {/* Controles de la cámara */}
      <OrbitControls enableZoom={true} />
    </>
  );
};

const WaterShortage = () => {
  return (
    <>
      {/* Elementos HTML fuera del Canvas */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
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
        camera={{ position: [0, 5, 15], fov: 85 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
      </Canvas>
    </>
  );
};

export default WaterShortage;
