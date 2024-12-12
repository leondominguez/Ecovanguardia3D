import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"; // Importa el modelo de contaminación del agua
import Buzo from "../../../components/models-3d-component/buzo/Buzo";
import WebGLSettings from "../../../components/performance/WebGLSettings";
import { Html } from "@react-three/drei";
import StagginLoader from "../../../components/staggings/StagginLoader";
import ThreeDText from "../../../components/text3d/ThreeDText";
import { Physics } from "@react-three/rapier";
import PostProcessing from "./post-processing/PostprocessingWaterProcessing";
const WaterPollution = () => {
  const camera = useRef();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    setShowTooltip(!showTooltip);
  };
  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 15], fov: 50 }} // Ajusta la posición de la cámara según necesites
      style={{ width: "100%", height: "100%" }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0.2, 1.5, 2.1]}
        fov={75} // Ajusta el campo de visión de la cámara
      />
      <WebGLSettings
        pixelRatio={window.devicePixelRatio}
        powerPreference="high-performance"
        antialias={false}
      />
      <Suspense>
      <PostProcessing/>
      
      <Physics gravity={[0, 0, 0]}  >
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

          <ThreeDText
            text="CONTAMINACION DEL AGUA"
            color="#ECE2C6"
            position={[-2, 1.2, 0]}
          />

          <Html position={[0, 1.5, 0]} style={{ pointerEvents: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh", // Centrar verticalmente en toda la ventana
              }}
            >
              {/* <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                margin: "20px 0",
                color: "white",
              }}
            >
              Contaminación del agua
            </h1> */}

              <div style={{ position: "relative" }}>
                {" "}
                {/* Contenedor relativo para el botón y el tooltip */}
                <button
                  onClick={handleButtonClick}
                  style={{
                    padding: "15px 25px",
                    fontSize: "16px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Descontamina el agua
                </button>
                {showTooltip && (
                  <div
                    style={{
                      position: "absolute",
                      top: "110%", // Justo debajo del botón
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "15px",
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "white",
                      borderRadius: "5px",
                      textAlign: "center",
                      width: "180px",
                      height: "150px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                      zIndex: 1,
                    }}
                  >
                    <button
                      onClick={handleCloseTooltip}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        backgroundColor: "transparent",
                        border: "none",
                        color: "white",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      X
                    </button>
                    La contaminación del agua amenaza la vida y nuestra salud.
                    Protejamos este recurso vital reduciendo desechos y
                    químicos.
                  </div>
                )}
              </div>
            </div>
          </Html>
          <Buzo scale={1} position={[0, 0.5, 0]} />
          <StagginLoader
            receiveShadow={true}
            shadowBias={0.01}
            shadowResolution={2048}
            shadowAttenuation={0.5}
            height={20}
            width={20}
            scale={0.1}
            environmentPath="/scenes/stars-sea/" // se le debe pasar un path a un cubemap
            background={true}
          />
          <OrbitControls enableZoom={false} />
        </Physics>
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
