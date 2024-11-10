import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Landing.css";
// import Logoimage from "/images/logos/gotaLogo.png";
import { OrbitControls } from "@react-three/drei";
// import BubblesSimulation from "../../components/html-3d-example/BubblesSimulation";
import WebGLSettings from "../../components/performance/WebGLSettings";

import CameraDebuger from '../../components/Debug/CameraDebuger'; // Importa el nuevo componente
import SeaSimulation from "../../components/html-3d-example/sea-simulation/SeaSimulation.jsx";

import { useNavigate } from "react-router-dom";
import Drop from "../../components/models-3d-component/drop/Drop";
// // import { DirectionalLightHelper } from "three";
// // import { useHelper } from "@react-three/drei";

function LightWithHelper() {
  const lightRef = useRef();
  const target = useRef();

  // useHelper(lightRef, DirectionalLightHelper, 5, "red");

  return (
    <>
      <directionalLight ref={lightRef} position={[10, 10, 10]} intensity={5} />
      <mesh ref={target} position={[0, 0, 0]} />
      {lightRef.current && (lightRef.current.target = target.current)}
    </>
  );
}

function Landing() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  const [counter, setCounter] = useState(0);
  const dropRef = useRef();
  useEffect(() => {
    // Función para manejar el evento wheel
    const handleWheel = (event) => {
      event.preventDefault(); // Evita el scroll predeterminado
      if (dropRef.current) {
        // Ajusta la velocidad de rotación aquí
        const rotationSpeed = 0.65;
        if (event.deltaY < 0) {
          dropRef.current.rotation.y -= rotationSpeed; // Rota hacia la izquierda
        } else {
          dropRef.current.rotation.y += rotationSpeed; // Rota hacia la derecha
        }
      }
    };

    // Añadir el listener al evento wheel
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="landing">
      <div className="contenedor0">
        <Canvas className="canvas-logo3d"
          camera={{ position: [0, 0, 15], fov:35 }}
        
        >
          <LightWithHelper />
          <ambientLight position={[0, 0, 0]} intensity={0.5} />
          <Suspense>
            
            <OrbitControls enableZoom={false} enableRotate={false} />
            <Drop ref={dropRef} />
          </Suspense>
        </Canvas>
      </div>
        <div className="contenedor1">
          <h1 className="titulo">
            <span className="eco">ECO</span>
            <span className="vanguardia">VANGUARDIA</span>
          </h1>
          <h2 className="eslogan">Pequeños cambios, grandes impactos</h2>
          <p><br /></p>
          <p><br /></p>
          <p></p>
        
      </div>

      {/* <div className="contenedor2">
      </div>
       */}
      <div className="canvas-container">
        <Canvas id="myCanvas">
          <WebGLSettings
            pixelRatio={window.devicePixelRatio}
            powerPreference="high-performance"
            antialias={false}
          />
        
          <Suspense fallback={null}>
            <directionalLight position={[10, 10, -5]} intensity={5} />
          </Suspense>
        </Canvas>
        <div className="seaContainer">
          <SeaSimulation />
        </div>

        <button className="boton" onClick={handleButtonClick}>
          boton
        </button>
      </div>
    </div>
  );
}

export default Landing;
