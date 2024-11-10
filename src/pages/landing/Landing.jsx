import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Landing.css";
// import Logoimage from "/images/logos/gotaLogo.png";
import { OrbitControls } from "@react-three/drei";
// import BubblesSimulation from "../../components/html-3d-example/BubblesSimulation";
import WebGLSettings from "../../components/performance/WebGLSettings";

import Camera1 from "../../components/cameras/camera1";
import SeaSimulation from "../../components/html-3d-example/sea-simulation/SeaSimulation.jsx";

import { useNavigate } from "react-router-dom";
import Drop from "../../components/models-3d-component/drop/Drop";
// import { DirectionalLightHelper } from "three";
// import { useHelper } from "@react-three/drei";

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
    const handleWheel = (event) => {
      event.preventDefault();
      if (dropRef.current) {
        const rotationSpeed = 0.65;
        if (event.deltaY < 0) {
          dropRef.current.rotation.y -= rotationSpeed;
        } else {
          dropRef.current.rotation.y += rotationSpeed;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="landing">
      <div className="contenedor0">
        {/* Desactiva temporalmente el modelo 3D */}
        {/* 
        <Canvas className="canvas-logo3d" camera={{ position: [0, 0, 15], fov: 35 }}>
          <LightWithHelper />
          <ambientLight position={[0, 0, 0]} intensity={0.5} />
          <Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <Drop ref={dropRef} />
          </Suspense>
        </Canvas> 
        */}
      </div>

      <div className="contenedor1">
        <h1 className="titulo">
          <span className="eco">ECO</span>
          <span className="vanguardia">VANGUARDIA</span>
        </h1>
        <h2 className="eslogan">Pequeños cambios, grandes impactos</h2>
      </div>

      {/* Desactiva temporalmente el modelo 3D y simulación */}
      {/* 
      <div className="canvas-container">
        <Canvas id="myCanvas">
          <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={false} />
          <Suspense fallback={null}>
            <directionalLight position={[10, 10, -5]} intensity={5} />
          </Suspense>
        </Canvas>
        <div className="seaContainer">
          <SeaSimulation />
        </div>
      </div>
      */}

      <button className="boton" onClick={handleButtonClick}>
        Ir a Home
      </button>
    </div>
  );
}

export default Landing;
