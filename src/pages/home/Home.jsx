import { Canvas } from "@react-three/fiber";
import CircleHome from "../../components/circleHome/circleHome";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.css";
import { Suspense } from "react";
import { Ocean } from "../../components/ocean/Ocean";
import Camera1 from "../../components/cameras/camera1";
import { OrbitControls } from "@react-three/drei";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <div className="CopyHome">
          <div className="title">
            <h1 className="title-eco">ECO</h1>
            <h1 className="title-vanguardia">VANGUARDIA</h1>
          </div>

          <h2 className="eslogan">Pequeños cambios,grandes impactos</h2>
          <h3 className="invitacion">
            Elige un tema y sumergete en la aventura ecovanguardista
          </h3>
        </div>
        <Canvas className="customCanvas">
          <Ocean/>   
        </Canvas>
      </div>
    </>
  );
}

export default Home;
