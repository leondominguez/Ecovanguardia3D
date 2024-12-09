import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "./Lobby.css";
import SeaTop from "../../components/models-3d-component/lobbyModels/SeaTop";
import AmbientLight from "../../components/lights/AmbientLight";
import CubeSea from "../../components/models-3d-component/lobbyModels/CubeSea";
import DeepOcean from "../../components/models-3d-component/lobbyModels/DeepOcean";
import DirectionalLight from "../../components/lights/DirectionalLight";
import PointLight from "../../components/lights/PointLight";
import HemisphereLight from "../../components/lights/HemisphereLight";
import LogCameraPosition from "../../components/Debug/LogCameraPosition";
import SkyBackground from "./SkyBackground";
import StagginLoader from "../../components/staggings/StagginLoader";
import Text3D from "../../components/text3d/Text3D";
import HtmlTextDrei from "../../components/html-3d-drei/TextHtmlDrei";
import { Html,Text } from '@react-three/drei';
import FishSchool3 from "../../components/models-3d-component/lobbyModels/FishSchool3";
import Fishlowpoly from "../../components/models-3d-component/lobbyModels/Fishlowpoly";



const Lobby = () => {
  const cameraRef = useRef();


  return (
    <div className="lobby-container">
      <Canvas
        shadows
        className="lobby-canvas"
        gl={{ alpha: false }}
        style={{ background: "blue", width: "100%", height: "100%" }} // Color de fondo
      >
        <Html  position={[0.5, 1.7, -8]}  transform distanceFactor={6}>
          <div className="lobby-resumen">
            <p>
              Ecovanguardia es un equipo apasionado y comprometido con la defensa
              del medio ambiente. Nuestro objetivo principal es abordar y
              resolver los desafíos medioambientales más urgentes de nuestro
              tiempo, con un enfoque especial en la preservación y protección de
              nuestros recursos hídricos.
            </p>
            <p>
              Nuestro equipo Conformado por expertos en medio ambiente, investigadores y
              voluntarios dedicados, nuestro equipo trabaja incansablemente para
              generar conciencia y promover soluciones sostenibles. Cada miembro
              de Ecovanguardia aporta su conocimiento y experiencia para crear
              un impacto positivo y duradero en nuestro planeta.
            </p>
          </div>
        </Html>

        <Text> </Text>

        <HtmlTextDrei //encuentra al sabio
          position={[0, 0, 0]}
          distanceFactor={10}
          title="¿Que es Ecovanguardia?"
          content={
            <p>
              {" "}
              Aveces queremos saber mas cosas y aprender de los sabios, si
              quieres saber mas sobre la acidificacion de los oceanos, ve y
              busca al sabio de la isla, el te enseñara mas sobre este tema.
            </p>
          }
        />

        <group position={[-5.8, 4.15, -5]}>
          <Text3D
            className="text3d"
            text="Eco"
            position={[0, 0, 0]}
            frontColor={"#63c548"} // Color del frente
            sideColor={"#bfd9ec"} // Color del resto
            size={1.3}
            depth={-0.71}
            fontPath="/fonts/carterOne/Carter One_Regular.json" // Ruta de la fuente
          />
          <Text3D
            className="Vanguardia"
            text="Vanguardia"
            position={[3.2, 0, 0]}
            frontColor={"#23566e"} // Color del frente
            sideColor={"#bfd9ec"} // Color del resto
            size={1.1}
            depth={-0.71}
            fontPath="/fonts/carterOne/Carter One_Regular.json" // Ruta de la fuente
          />
        </group>

        {/* <SkyBackground /> */}
        {/* <BackgroundImage/> */}
        <Suspense fallback={null}>
          <StagginLoader
            position={[0, 0, 0]}
            receiveShadow={true}
            shadowBias={0.01}
            shadowResolution={2048}
            shadowAttenuation={0.5}
            height={20}
            width={20}
            scale={0.1}
            environmentPath="/scenes/deep-ocean/" // se le debe pasar un path a un cubemap
            background={true}
          />
          <AmbientLight
            intensity={0.5} // Intensidad de la luz ambiental
            color="#ffffff" // Color de la luz ambiental
          />
          <HemisphereLight
            skyColor="white" // Color del cielo
            groundColor="white" // Color del suelo
            intensity={1.1} // Intensidad de la luz hemisférica
            position={[0, 10.5, 0]} // Posición de la luz en el espacio 3D
            showHelper={true} // Muestra un helper visual para la luz
          
          />
          <DirectionalLight //luz sobre el mar
            position={[10, 11, -7]} // Define la posición de la luz en el espacio 3D
            intensity={100} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={true} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 6000, // Define el ancho del mapa de sombras
              shadowMapHeight: 0, // Define la altura del mapa de sombras
              shadowCameraNear: 0.1, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 5000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -300, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 300, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 300, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -300, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 100, // Suaviza los bordes de las sombras
            }}
          />

        <DirectionalLight //debajo del mar 1
            position={[10, -11, -10]} // Define la posición de la luz en el espacio 3D
            intensity={1000} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={true} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 6000, // Define el ancho del mapa de sombras
              shadowMapHeight: 0, // Define la altura del mapa de sombras
              shadowCameraNear: 0.1, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 5000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -300, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 300, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 300, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -300, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 100, // Suaviza los bordes de las sombras
            }}
          />
          
        <DirectionalLight //debajo del mar 2
            position={[-10, -11, -20]} // Define la posición de la luz en el espacio 3D
            intensity={10} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={true} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 6000, // Define el ancho del mapa de sombras
              shadowMapHeight: 0, // Define la altura del mapa de sombras
              shadowCameraNear: 0.1, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 5000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -300, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 300, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 300, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -300, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 100, // Suaviza los bordes de las sombras
            }}
          />        
          
          <DirectionalLight //debajo del mar 3 rayos
          position={[35,30, 0]} // Define la posición de la luz en el espacio 3D
          intensidad={100} // Define la intensidad de la luz
          color="white" // Define el color de la luz
          castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
          showHelper={true} // Muestra un helper visual para la luz direccional
         
          shadowProps={{
            shadowMapWidth: 4096, // Define el ancho del mapa de sombras
            shadowMapHeight: 4096, // Define la altura del mapa de sombras
            shadowCameraNear: 0.01, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
            shadowCameraFar: 500, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
            shadowCameraLeft: -3000, // Define el límite izquierdo de la cámara de sombras
            shadowCameraRight: 3000, // Define el límite derecho de la cámara de sombras
            shadowCameraTop: 5000, // Define el límite superior de la cámara de sombras
            shadowCameraBottom: -5000, // Define el límite inferior de la cámara de sombras
            shadowBias: -0.00001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
            shadowRadius: 1, // Suaviza los bordes de las sombras
          }}
        />
          {/* <PointLight 
            position={[10, 5.5, 0]} // sobre el mar rayos
            intensity={80} // Intensidad de la luz
            color="#bfd9ec" // Color de la luz
            distance={100000} // Distancia máxima de la luz
            decay={1.5} // Decaimiento de la luz con la distancia
            showHelper={true} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          /> */}
            <PointLight //point light sobre el mar centrado
            position={[0, 12.0, -5]} // Posición de la luz en el espacio 3D
            intensity={1000000} // Intensidad de la luz
            color="white" // Color de la luz
            distance={100000} // Distancia máxima de la luz
            decay={1.5} // Decaimiento de la luz con la distancia
            showHelper={true} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />

        <PointLight //luz sobre titulo debajo del mar
            position={[0, 5.3, -4.95]} // Posición de la luz en el espacio 3D
            intensity={150} // Intensidad de la luz
            color="white" // Color de la luz
            distance={10} // Distancia máxima de la luz
            decay={2} // Decaimiento de la luz con la distancia
            showHelper={true} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />

        <PointLight //debajo sobre del mar izquierda
            position={[10, 9, -6]} // Posición de la luz en el espacio 3D
            intensity={1000} // Intensidad de la luz
            color="white" // Color de la luz
            distance={1000} // Distancia máxima de la luz
            decay={0} // Decaimiento de la luz con la distancia
            showHelper={true} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />
          <DeepOcean
            position={[0, 0.05, 0]}
            receiveShadow
            animationName="Take 01"
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1]} // Ajustar la escala
          />
            <FishSchool3
            position={[0, 0.05, 5]}
            receiveShadow
            animationName="Take 01"
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.001, 0.001, 0.001]} // Ajustar la escala
          />
       <Fishlowpoly
            position={[-4, 0.05, 2]}
            receiveShadow
            animationName=""
            showAnimationsList={true}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.001, 0.001, 0.001]} // Ajustar la escala
          />


          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[-0.3, 4.2, 8.8]}
            fov={75}
          />
          <axesHelper args={[200]} />
        </Suspense>
        <OrbitControls
          enableZoom
          minPolarAngle={Math.PI / 6} // Limita el ángulo mínimo para evitar que la cámara pase por debajo del suelo
          maxPolarAngle={Math.PI / 2.1} // Limita el ángulo máximo para evitar que la cámara pase por encima
        />
      </Canvas>
    </div>
  );
};

export default Lobby;