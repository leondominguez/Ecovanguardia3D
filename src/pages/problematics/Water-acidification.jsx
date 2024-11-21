import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { BoxGeometry, PlaneGeometry } from "three";
import IsleDelfino from "../../components/models-3d-component/isle-delfino/Isle-defino"; // Importa el modelo de acidificación del agua
import StagginLoader from "../../components/staggings/StagginLoader"; // Importa el nuevo componente
import KeyboardControl from "../../components/config/controls/motion-controls/KeyBoardControl"; // Importa el nuevo componente
import RotationControl from "../../components/config/controls/motion-controls/RotationControls";
import DirectionalLight from "../../components/lights/DirectionalLight";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import WebGLSettings from "../../components/performance/SetPixelRatio";

// Extiende las geometrías necesarias
extend({ BoxGeometry, PlaneGeometry });

const content = (
  <div>
    <p style={{ textAlign: "left" }}>
      La acidificación de los océanos es el proceso por el cual los océanos se
      vuelven más ácidos debido al aumento de dióxido de carbono (CO₂) en la
      atmósfera.
    </p>
    <div style={{ textAlign: "left" }}>
      <h3>Causas:</h3>
      <p>
        La quema de combustibles fósiles y la deforestación aumentan los niveles
        de CO₂, que es absorbido por los océanos.
      </p>
    </div>
    <div style={{ textAlign: "left" }}>
      <h3>Problemas:</h3>
      <p>
        Esto afecta la vida marina, debilitando corales y moluscos, y alterando
        las cadenas alimenticias.
      </p>
    </div>
    <div style={{ textAlign: "left" }}>
      <h3>Soluciones:</h3>
      <p>
        Reducir las emisiones de CO₂, proteger ecosistemas marinos y fomentar el
        uso de energías renovables. Un reto crucial para nuestro planeta. 🌍
      </p>
    </div>
  </div>
);

const WaterAcidification = () => {
  const CameraDebugerRef = useRef();
  const cameraRef = useRef();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleButtonClick = () => {
    setTooltipVisible(true);
  };

  const handleAcceptClick = () => {
    setTooltipVisible(false);
  };

  return (
    <Canvas shadows style={{ width: "100%", height: "100%" }}>
       <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={true} />
      <Html position={[0, 3, -0.99]} style={{ pointerEvents: "auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            margin: "20px 0",
            color: "white",
          }}
        >
          Isla Delfin
        </h1>
        <button
          onClick={handleButtonClick}
          style={{
            display: "flex",
            margin: "10px auto",
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Fondo translúcido
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={faStar} color="gold" />
        </button>
        {tooltipVisible && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              maxWidth: "400px", // Ancho máximo del tooltip
              minWidth: "200px", // Ancho mínimo del tooltip
              width: "auto", // Ancho automático del tooltip
              textAlign: "left", // Alineación del texto
              whiteSpace: "pre-wrap", // Ajuste del texto dentro del contenedor
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Bienvenido! has llegado a la isla Delfin, los lugareños le dicen DolphinTerra, EN la isla se encuentra el equipo de EcoVanguardia. que te enseñara sobre la acidificación de los océanos.
              que afecta esta Islas y sus habitantes. ¿Deseas continuar?
            </p>
            <button
              onClick={handleAcceptClick}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "8px 13px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Aceptar
            </button>
          </div>
        )}
      </Html>
      <Suspense fallback={null}>
   
        {/* <axesHelper args={[2000]} /> */}
        <ambientLight intensity={0.5} />
        <DirectionalLight
          position={[150, 80, -130]} // Define la posición de la luz en el espacio 3D
          intensity={5} // Define la intensidad de la luz
          color="white" // Define el color de la luz
          castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
          showHelper={false} // Muestra un helper visual para la luz direccional
          shadowProps={{
            shadowMapWidth: 5000, // Define el ancho del mapa de sombras
            shadowMapHeight: 0, // Define la altura del mapa de sombras
            shadowCameraNear: 0.5, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
            shadowCameraFar: 1000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
            shadowCameraLeft: -50, // Define el límite izquierdo de la cámara de sombras
            shadowCameraRight: 50, // Define el límite derecho de la cámara de sombras
            shadowCameraTop: 50, // Define el límite superior de la cámara de sombras
            shadowCameraBottom: -50, // Define el límite inferior de la cámara de sombras
            shadowBias: -0.00001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
            shadowRadius: 30, // Suaviza los bordes de las sombras
          }}
        />
        <IsleDelfino
          castShadow
          receiveShadow
          scale={[0.001, 0.001, 0.001]}
          position={[0, 0, 0]}
        />
        <StagginLoader
          receiveShadow={true}
          shadowBias={0.01}
          shadowResolution={2048}
          shadowAttenuation={0.5}
          height={20}
          width={20}
          scale={0.1}
          environmentPath="/scenes/sky-blue-sun/cubemap/" // se le debe pasar un path a un cubemap
          background={true}
        />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 0, 70]}
          fov={100}
        />
        <KeyboardControl cameraRef={cameraRef} movementSpeed={0.2} />
      </Suspense>
    </Canvas>
  );
};

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

const Box = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default WaterAcidification;
export { content as waterAcidificationContent };