import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./Landing.css";
import { OrbitControls, Loader } from "@react-three/drei";
import WebGLSettings from "../../components/performance/WebGLSettings.jsx";
import SetPixelRatio from "../../components/performance/SetPixelRatio.jsx";
import { useNavigate } from "react-router-dom";
import Drop from "../../components/models-3d-component/drop/Drop.jsx";
import SeaSimulation from "../../components/models-3d-component/sea-simulation/SeaSimulation.jsx";
import Text3D from "../../components/text3d/Text3D.jsx";
import AmbientLight from "../../components/lights/AmbientLight.jsx";

function LightWithHelper() {
  const lightRef = useRef();
  const target = useRef();

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
    navigate("/lobby");
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
        <Canvas
          className="canvas-logo3d"
          camera={{ position: [0, 0, 15], fov: 35 }}
        >
          <WebGLSettings
            pixelRatio={window.devicePixelRatio}
            powerPreference="high-performance"
            antialias={true}
          />
          <SetPixelRatio ratio={window.devicePixelRatio} />
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
        <h2 className="eslogan">Pequeños Cambios, Grandes Impactos</h2>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
        <p></p>
      </div>

      <div className="canvas-container">
        <Canvas id="myCanvas">
          <WebGLSettings
            pixelRatio={window.devicePixelRatio}
            powerPreference="high-performance"
            antialias={false}
          />
          <AmbientLight intensity={1.5} color="white" />
          <Suspense fallback={null}>
            <directionalLight position={[10, 10, -5]} intensity={15} />
            <group
              onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
              onPointerOut={(e) => (document.body.style.cursor = 'default')}
              onClick={handleButtonClick}
            >
              <Text3D
                className="text3d"
                text="Sumérgete En Esta Aventura"
                position={[-46, -12, -30]}
                frontColor={"#23566e"}
                sideColor={"#bfd9ec"}
                size={5}
                depth={-0.71}
                fontPath="/fonts/carterOne/Carter One_Regular.json"
              />
            </group>
          </Suspense>
        </Canvas>
        <div className="seaContainer">
          <SeaSimulation />
        </div>
        
        <Loader
          containerStyles={{
            backgroundColor: "#23566e",
            width: "100%",
            height: "100%",
            opacity: 0.9,
          }}
          innerStyles={{ width: "300px", height: "10px" }}
          barStyles={{
            backgroundColor: "#63c548",
            height: "10px",
            borderRadius: 5,
          }}
          dataStyles={{ color: "#63c548", fontSize: "26px" }}
          dataInterpolation={(p) => `Cargando ${p.toFixed(0)}%`}
          initialState={(active) => active}
        />
     
      </div>
    </div>
  );
}

export default Landing;