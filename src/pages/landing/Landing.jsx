import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./Landing.css";
import Logoimage from "/images/logos/gotaLogo.png";

import BubblesSimulation from "../../components/html-3d-example/BubblesSimulation";
import DeepSea from "../../components/staggings/deepsea/DeepSea";
import TurtleCarey from "../../components/turtle/Turtle-carey";
import Camera1 from "../../components/cameras/camera1";
import SeaSimulation from "../../components/html-3d-example/sea-simulation/seaSimulation.jsx";

function Landing() {
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

  return (
    <div className="landing">
      <div className="contenedor1">
        <img src={Logoimage} alt="Logo" className="logo" />
        <h1 className="titulo">
          <span className="eco">ECO</span><span className="vanguardia">VANGUARDIA</span>
        </h1> 
        <h2 className="eslogan">Pequeños cambios, grandes impactos</h2>
        <h3 className="invitacion">Elige un tema y sumérgete en la aventura ecovanguardista</h3>
      </div>
      
      {/* <div className="contenedor2">
      </div>
       */}
      <div className="canvas-container">
        <Canvas id="myCanvas">
        <Camera1/>
        <Suspense fallback={null}>
        <BubblesSimulation/>
        <SeaSimulation/>
        <TurtleCarey/>
      
        </Suspense>
        </Canvas>
        
        
        
     
        
        <button className="boton">boton</button>
      </div>
    </div>
  );
}

export default Landing;