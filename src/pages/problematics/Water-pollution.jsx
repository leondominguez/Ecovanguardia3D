import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"; // Importa el modelo de contaminación del agua
import Buzo from "../../components/models-3d-component/buzo/Buzo";
import WebGLSettings from "../../components/performance/WebGLSettings";

const WaterPollution = () => {
  const camera = useRef();

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 15], fov: 50 }} // Ajusta la posición de la cámara según necesites
      style={{ width: "100%", height: "100%" }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0.2, 0.6, 2]}
        fov={75} // Ajusta el campo de visión de la cámara
      />
      <WebGLSettings
        pixelRatio={window.devicePixelRatio}
        powerPreference="high-performance"
        antialias={false}
      />
      <Suspense>
        <directionalLight
          position={[5, 3, -5]}
          intensity={2}
          castShadow
          shadow-bias={-0.0005}
        />
        <ambientLight position={[0, 0, 0]} intensity={0.5} />
        <pointLight
          position={[0, 1, 0]}
          intensity={1}
          castShadow
          shadow-bias={-0.0003} // Habilita castShadow
          // shadow-mapSize-width={512}
          // shadow-mapSize-height={512}
        />
        <Buzo scale={1}  />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

// const LogCameraPosition = () => {
//   useFrame(({ camera }) => {
//     // console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
//   });
//   return null;
// };

export default WaterPollution;
