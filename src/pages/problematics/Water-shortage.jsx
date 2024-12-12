// WaterShortage.js
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './WaterCss/WaterShortage.module.css';
import CubeMapBackground from '../../components/CubeMapBackground/CubeMapBackground';
import SubmarineModel from '../../components/models-3d-component/submarine/Submarine';
import Mine from "../../components/models-3d-component/seaMine/SeaMIne";
import Text3D from '../../components/text3d/Text3D';
import { FaPlay } from 'react-icons/fa';


// Crear una instancia de SweetAlert con React Content
const MySwal = withReactContent(Swal);

const Scene = () => {
  const directionalLightRef = useRef();

  // Definir posiciones de las minas
  const minePositions = [
    [-7, -3, -20],
    [-15, -3, 6],
    [10, -3, -8],
    [28, -3, 8],
    [10, -3, 10]
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

      {/* Partículas (estrellas) para simular burbujas pequeñas */}
      <Stars radius={30} depth={10} count={300} factor={4} saturation={0} fade speed={1} />

      {/* Añadir minas */}
      {minePositions.map((position, index) => (
        <Suspense fallback={null} key={index}>
          <Mine position={position} />
        </Suspense>
      ))}

      {/* Modelo del submarino */}
      <Suspense fallback={null}>
        <SubmarineModel
          castShadow
          scale={1}
          position={[0, 0, 0]}
          minePositions={minePositions}
        />
      </Suspense>

      {/* Texto 3D */}
      <Suspense fallback={null}>
        <Text3D
          text="Profundidades Del mundo Marino "
          position={[-8, 6, 0]}
          frontColor={0x04d9d9}
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
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // Intentar reproducir el audio al montar el componente
      audioRef.current.play().catch(error => {
        // Manejar restricciones de reproducción automática
        console.log('La reproducción del audio falló:', error);
      });
    }
  }, []);

  // Función para manejar el clic en el botón
  const handleInteract = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('La reproducción del audio falló:', error);
      });
      setIsPlaying(true);
    }

    // Mostrar el modal con SweetAlert2
    MySwal.fire({
      title: '¡Bienvenido al Submarino en Acción!',
      html: (
        <div>
          <p>
            <strong>Controles:</strong> Usa las teclas <em>W, A, S, D</em> o las flechas del teclado para moverte.
          </p>
          <p>
            <strong>Objetivo:</strong> Esquiva las minas que encontrarás en el fondo marino.
          </p>
          <p>
            <strong>Sobre la Escasez de Agua:</strong> La escasez de agua es un problema global que afecta a millones de personas. Participa en esta simulación para concienciar sobre la importancia de conservar y gestionar adecuadamente nuestros recursos hídricos.
          </p>
        </div>
      ),
      icon: 'info',
      confirmButtonText: '¡Entendido!',
      width: '600px',
      padding: '3em',
      background: '#f0f8ff',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.imgur.com/4NZ6uLY.gif")
        left top
        no-repeat
      `,
    });
  };

  return (
    <>
      {/* Elementos HTML fuera del Canvas */}
      <div className={styles.overlay}>
        <button
          onClick={handleInteract}
          className={styles.button}
          disabled={isPlaying}
        >
          <FaPlay style={{ marginRight: '8px' }} />
          {isPlaying ? 'Reproduciendo...' : 'Interactuar'}
        </button>
      </div>

      {/* Elemento de audio */}
      <audio
        ref={audioRef}
        src="/audios/soundSubmarine.mp3" 
        loop
        style={{ display: 'none' }} // Ocultar controles del audio
      />

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
