import React, { useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import TurtleCarey from "../../components/models-3d-component/turtle/Turtle-carey";
import CameraDebuger from "../../components/Debug/CameraDebuger";
import DeepSea from "../../components/staggings/deepsea/DeepSea";
import WebGLSettings from "../../components/performance/WebGLSettings"; // Importa el nuevo componente
import "./Login.css";
import { AxesHelper, Camera } from "three";
import CameraOrbitalLight from "../../components/cameras/CameraOrbitalLight";
import PointLight from "../../components/lights/PointLight";
import DirectionalLight from "../../components/lights/DirectionalLight";
import AmbientLight from "../../components/lights/AmbientLight";
import BubblesSimulation from "../../components/models-3d-component/bubbles-simulation/BubblesSimulation";
import SchoolFish1 from "../../components/models-3d-component/school-fish1/SchoolFish1";
import Doryfish from "../../components/models-3d-component/dory/Doryfish";
import StagginLoader from "../../components/staggings/StagginLoader";



const Login = () => {
  const turtleRef = useRef();
  const doryRef = useRef();
  const fishRefs = {
    bank1: useRef(),
    bank2: useRef(),
    bank3: useRef(),
  };


  return (
    <div className="login-container">
      <div className="login-section">
        <div className="logo">
          <img
            src="./images/logos/gotaLogo.png"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <p>
          Por favor, cree una cuenta o inicie sesión con otro método para
          continuar.
        </p>
        <button>Iniciar sesión con Google</button>
        <a href="#">Inicia sesión con correo electrónico y contraseña.</a>
      </div>
      <div className="canvas-login">
        <Canvas className="customCanvas" shadows>
          {/* <WebGLSettings
            pixelRatio={window.devicePixelRatio}
            powerPreference="high-performance"
            antialias={false}
          /> */}
          <Suspense fallback={null}>
            <AmbientLight intensity={2} color="yellow" />
            {/* <DeepSea
            receiveShadow={true}
            shadowBias={0.001}
            shadowResolution={1024}
            shadowAttenuation={0.5}
            height={20}
            width={20}
            scale={0.1}
            environmentPath="/scenes/deep-sea/cubemap/"
            background={true}
          /> */}
          
          <StagginLoader
        receiveShadow={true}
        shadowBias={0.001}
        shadowResolution={2048}
        shadowAttenuation={0.5}
        height={20}
        width={20}
        scale={0.1}
        environmentPath="/scenes/deep-sea/cubemap/" // se le debe pasar un path a un cubemap
        background={true}
      />


            <DirectionalLight
              position={[200, 800, 200]}
              intensity={5}
              castShadow={false} // Activa las sombras
              showHelper={false}
              shadowProps={{
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-camera-far": 50,
                "shadow-camera-left": -10,
                "shadow-camera-right": 10,
                "shadow-camera-top": 10,
                "shadow-camera-bottom": -10,
              }}
            />
            <PointLight
              position={[260, 800, 325]}
              intensity={0}
              color={"white"}
              showHelper={false}
              castShadow={false} // Activa las sombras
              shadowProps={{
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-camera-far": 50,
                "shadow-camera-left": -10,
                "shadow-camera-right": 10,
                "shadow-camera-top": 10,
                "shadow-camera-bottom": -10,
              }}
            />
            {/* <CameraFrontal position={[0, 0, 80]} rotation={[0, 0, 0]} fov={75} showHelper={false} /> /*establecer showHelper en false para mostrar el CameraHelper */}
            <CameraOrbitalLight //point, spot, directional
              position={[30, 30, 100]}
              targetRef={turtleRef}
              fov={75}
              showCameraHelper={false}
              lightType="directional"
              lightProps={{
                color: "white",
                intensity: 5,
                distance: 130,
                angle: Math.PI / 4,
                penumbra: 2.5,
                decay: 5,
                showHelper: false,
              }}
              shadowProps={{
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024,
                "shadow-camera-far": 50,
                "shadow-camera-left": -10,
                "shadow-camera-right": 10,
                "shadow-camera-top": 10,
                "shadow-camera-bottom": -10,
              }}
            />
            /*establecer showHelper en false para mostrar el CameraHelper */
            <TurtleCarey
              ref={turtleRef}
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI]}
              animationName={"rig|rig|swim_rig"}
            />
            <Doryfish
              ref={doryRef}
              animationName="rig|rig|swim"
              showAnimationsList={false}
              activateAllAnimations={false}
              position={[42, 42, 0]}
              scale={[0.5, 0.5, 0.5]}
              rotation={[Math.PI / 0.5, -0.6, 0]}
            />

          {/* <CardumenMotion
            ModelFish={Doryfish}
            fishCount={10}
            position={[0, 0, 0]}
            animationName="swim"
            showAnimationsList={true}
            activateAllAnimations={true}
            rotation={[Math.PI / 2, 0, Math.PI]}
          /> */}

            <axesHelper args={[5000]} /> Agrega un AxesHelper con un tamaño de 5
            unidades para ayudar a visualizar los ejes.
            <BubblesSimulation
              cubemapPath="/scenes/deep-sea/cubemap/" // esto permite modificar la ruta de las texturas del cubemap.
              bubbleCount={1000}
              speed={0.0001}
              refractionRatio={0.9}
              opacity={0.8}
              bubbleSize={[1, 2.5]}
              distance={2500}
              position={[100, 200, 300]}
            />
            <SchoolFish1
              ref={fishRefs.bank1}
              animationName="swim"
              showAnimationsList={false}
              activateAllAnimations={true}
              position={[0, 0, -200]}
              scale={[20, 20, 20]}
            />
      
 
          
            <OrbitControls enableRotate={true} target={[0, 0, 0]} /> /* Habilita
            la rotación de la cámara */
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Login;

/*Interpretación de los valores de rotación
En el ejemplo anterior, la rotación [Math.PI / 2, 0, Math.PI] se aplica a la tortuga. Aquí está la interpretación de estos valores:

Math.PI / 2 (alrededor del eje X): Esto rota la tortuga 90 grados hacia abajo.
0 (alrededor del eje Y): No hay rotación alrededor del eje Y.
Math.PI (alrededor del eje Z): Esto rota la tortuga 180 grados en el sentido de las agujas del reloj.
Si deseas ajustar la orientación de la tortuga para que mire hacia la cámara, puedes experimentar con estos valores hasta obtener la orientación deseada. Por ejemplo, si la tortuga necesita girar hacia la izquierda, puedes ajustar el valor de rotación alrededor del eje Y.

Ejemplo de ajuste de rotación
Si la tortuga necesita mirar hacia la cámara y actualmente no lo está haciendo, puedes ajustar los valores de rotación. Aquí hay un ejemplo de cómo podrías ajustar la rotación:

En este caso, la rotación [Math.PI / 2, Math.PI, 0] se aplica a la tortuga:

Math.PI / 2 (alrededor del eje X): Rota la tortuga 90 grados hacia abajo.
Math.PI (alrededor del eje Y): Rota la tortuga 180 grados hacia la izquierda.
0 (alrededor del eje Z): No hay rotación alrededor del eje Z. */

/*
//////////////////////////////////////////////////////
Valores de Rotación en  Camar frontal

Los valores de rotación se especifican en radianes y se aplican en el orden de los ejes X, Y y Z.

Rotación alrededor del eje X:
Valor positivo: Rota la cámara hacia abajo (como si estuviera inclinando la cabeza hacia adelante).
Valor negativo: Rota la cámara hacia arriba (como si estuviera inclinando la cabeza hacia atrás).

Rotación alrededor del eje Y:
Valor positivo: Rota la cámara hacia la izquierda (como si estuviera girando la cabeza hacia la izquierda).
Valor negativo: Rota la cámara hacia la derecha (como si estuviera girando la cabeza hacia la derecha).

Rotación alrededor del eje Z:
Valor positivo: Rota la cámara en el sentido de las agujas del reloj (como si estuviera inclinando la cabeza hacia el hombro derecho).
Valor negativo: Rota la cámara en el sentido contrario a las agujas del reloj (como si estuviera inclinando la cabeza hacia el hombro izquierdo).

la rotación [0, 0, 0] se aplica a la cámara. Aquí está la interpretación de estos valores:
0 (alrededor del eje X): No hay rotación alrededor del eje X.
0(alrededor del eje Y): Esto rota la cámara 180 grados alrededor del eje Y, lo que significa que la cámara estará mirando en la dirección opuesta.
0 (alrededor del eje Z): No hay rotación alrededor del eje Z.


*/
