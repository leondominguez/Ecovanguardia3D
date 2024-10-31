import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TurtleCarey from '../../components/turtle/Turtle-carey';
import Camera1 from '../../components/cameras/camera1';
import DeepSea from '../../components/staggings/deepsea/DeepSea';
import WebGLSettings from '../../components/performance/WebGLSettings'; // Importa el nuevo componente
import "./Login.css";

const Login = () => {
  const camera1Ref = useRef();

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="logo">
          <img src="./images/logos/gotaLogo.png" alt="Logo" className="logo-image" />
        </div>
        <p>
          Por favor, cree una cuenta o inicie sesión con otro método para
          continuar.
        </p>
        <button>Iniciar sesión con Google</button>
        <a href="#">Inicia sesión con correo electrónico y contraseña.</a>
      </div>
      <div className="canvas-login">
        <Canvas
          className="customCanvas"
          camera={{ position: [0, 5, 10], fov: 75 }}
        >

            <DeepSea />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 10, -5]} intensity={1} />
            <pointLight position={[0, 0, 0]} intensity={1} />
            <Camera1 ref={camera1Ref} />
            <TurtleCarey position={[0, 0, 0]} />
            <axesHelper args={[5]} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Login;