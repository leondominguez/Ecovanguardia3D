import TurtleCarey from '../../components/turtle/Turtle-carey';
import "./Login.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import Octopus from "../../components/turtle/Turtle-carey";
import { Suspense } from "react";

// import { BoxGeometry } from 'three';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="logo">🌊</div>
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
            <ambientLight intensity={10} />
            <directionalLight position={[5, 5, 5]} intensity={10} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <TurtleCarey />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Login;
