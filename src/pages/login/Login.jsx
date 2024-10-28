import React, { useRef } from 'react';
import TurtleCarey from '../../components/turtle/Turtle-carey';
import "./Login.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Camera1 from '../../components/cameras/camera1';
import DeepSea from '../../components/staggings/deepsea/DeepSea';

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
        <Canvas className="customCanvas">
          <Suspense fallback={null}>
            <DeepSea/>
            <ambientLight intensity={10} />
            <directionalLight position={[1, 10, -5]} intensity={10} />
            <pointLight position={[0,0,0]} intensity={1} />
            <Camera1 ref={camera1Ref} />
            <TurtleCarey position={[0,0,0]}/>
            <axesHelper arg={[5]}/>
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Login;