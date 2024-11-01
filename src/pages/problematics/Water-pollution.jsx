import { Suspense, useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls,PerspectiveCamera } from "@react-three/drei"; // Importa el modelo de contaminación del agua
import Buzo from "../../components/models-3d-component/buzo/Buzo";

const WaterPollution = () => {
  const camera = useRef();
  
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }} // Ajusta la posición de la cámara según necesites
      style={{ width: "100%", height: "100%" }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0.2,0.6,3.6]}
        fov={75} // Ajusta el campo de visión de la cámara
      />
      <Suspense>
        <directionalLight position={[5, 3, -5]} intensity={2} />
        <ambientLight  position={[0, 0, 0]} intensity={0.5} />
        <pointLight position={[0, 1, 0]} intensity={1} />
        <Buzo scale={1} />
        <OrbitControls enableZoom={true} />
      </Suspense>
      <LogCameraPosition />
    </Canvas>
    // <Suspense fallback={<div>Loading...</div>}>
    //   <ambientLight intensity={0.5} />
    //   <pointLight position={[10, 10, 10]} />

    //   <Buzo scale={1} />
    //   <OrbitControls enableZoom={true} />

    //   {/* <Octopus scale={1} /> Ajusta el tamaño del modelo si es necesario */}
    // </Suspense>
    //  {/* Permite rotar y hacer zoom */}
  );
};


const LogCameraPosition = () => {
  useFrame(({ camera }) => {
    console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
  });
  return null;
};

export default WaterPollution;
