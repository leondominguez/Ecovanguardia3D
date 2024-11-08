import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Landing.css";
import Logoimage from "/images/logos/gotaLogo.png";
import { OrbitControls } from "@react-three/drei";
import BubblesSimulation from "../../components/html-3d-example/BubblesSimulation";
import WebGLSettings from "../../components/performance/WebGLSettings";

import Camera1 from "../../components/cameras/camera1";
import SeaSimulation from "../../components/html-3d-example/sea-simulation/seaSimulation.jsx";

import { useNavigate } from "react-router-dom";
import Drop from "../../components/models-3d-component/drop/Drop";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

function LightWithHelper() {
  const lightRef = useRef();
  const target = useRef();

  // useHelper(lightRef, DirectionalLightHelper, 5, "red");

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={[10, 10, 10]}
        intensity={5}
      />
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

  useEffect(() => {
    // const canvas = document.getElementById("myCanvas");
    // const ctx = canvas.getContext("2d");
    // // Ajusta el tamaño del canvas
    // canvas.width = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;
    // // Dibuja algo en el canvas (puedes personalizar esto)
    // ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);
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
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="landing">
      
      <div className="contenedor1">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
        >
          <LightWithHelper />
          <ambientLight position={[0, 0, 0]} intensity={0.5} />
          <Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <Drop ref={dropRef} />
          </Suspense>
        </Canvas>

        <h1 className="titulo">
          <span className="eco">ECO</span>
          <span className="vanguardia">VANGUARDIA</span>
        </h1>
        <h2 className="eslogan">Pequeños cambios, grandes impactos</h2>

        <p></p>
        <p></p>
        <p></p>
        
      </div>

      {/* <div className="contenedor2">
      </div>
       */}
      <div className="canvas-container">
        <Canvas id="myCanvas">
        <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={false} />
          <Camera1 />
           <Suspense fallback={null}>
           <directionalLight position={[10, 10, -5]} intensity={5} />
           
          </Suspense>
        </Canvas>
        <div className="seaContainer">
        <SeaSimulation/>
        </div>
       

        <button className="boton" onClick={handleButtonClick}>boton</button>
      </div>
    </div>
  );
}

export default Landing;
