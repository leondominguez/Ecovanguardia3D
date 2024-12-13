import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Loader } from "@react-three/drei";
import "./Lobby.css";
import SeaTop from "../../components/models-3d-component/lobbyModels/SeaTop";
import AmbientLight from "../../components/lights/AmbientLight";
import DeepOcean from "../../components/models-3d-component/lobbyModels/DeepOcean";
import DirectionalLight from "../../components/lights/DirectionalLight";
import PointLight from "../../components/lights/PointLight";
import HemisphereLight from "../../components/lights/HemisphereLight";
import LogCameraPosition from "../../components/Debug/LogCameraPosition";
import SkyBackground from "./SkyBackground";
import StagginLoader from "../../components/staggings/StagginLoader";
import Text3D from "../../components/text3d/Text3D";
import HtmlTextDrei from "../../components/html-3d-drei/TextHtmlDrei";
import { Html, Text } from "@react-three/drei";
import FishSchool3 from "../../components/models-3d-component/lobbyModels/FishSchool3";
import Fishlowpoly from "../../components/models-3d-component/lobbyModels/Fishlowpoly";
import Calamar from "../../components/models-3d-component/lobbyModels/Calamar";
import Tiburon from "../../components/models-3d-component/lobbyModels/Tiburon";
import Letrero from "../../components/models-3d-component/lobbyModels/Letrero";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SoundComponent from "../../components/sounds/SoundComponent";
import { Physics } from "@react-three/rapier";
import PostProcessing from "../../components/performance/PostProcessing";

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
        {/* <Html position={[0.5, 1.7, -8]}  transform distanceFactor={6}>
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
        </Html> */}
        <group position={[0.5, 1.7, -1.2]} scale={[0.1, 0.1, 0.1]}>
          //grupo te texto
          <Text
            position={[0, 9, 0]}
            fontSize={2.7}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={112} // Ancho máximo antes de envolver el texto
            lineHeight={1.2} // Altura de la línea
            letterSpacing={0.02} // Espaciado entre letras
            textAlign="left" // Alineación del texto
            overflowWrap="break-word" // Controla cómo se envuelve el texto
          >
            <mesh position={[0, 0, -1.5]}>
              <planeGeometry args={[115, 13]} />
              <meshBasicMaterial color="#23566e" transparent opacity={0.7} />
            </mesh>
            Ecovanguardia es un equipo apasionado y comprometido con la defensa
            del medio ambiente. Nuestro objetivo principal es abordar y resolver
            los desafíos medioambientales más urgentes de nuestro tiempo, con un
            enfoque especial en la preservación y protección de nuestros
            recursos hídricos.
          </Text>
          <Text
            position={[0, -6, 0]}
            fontSize={2.7}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={112} // Ancho máximo antes de envolver el texto
            lineHeight={1.2} // Altura de la línea
            letterSpacing={0.02} // Espaciado entre letras
            textAlign="left" // Alineación del texto
            overflowWrap="break-word" // Controla cómo se envuelve el texto
          >
            <mesh position={[0, 0, -1.5]}>
              <planeGeometry args={[115, 17]} />
              <meshBasicMaterial color="#23566e" transparent opacity={0.7} />
            </mesh>
            Nuestro equipo Conformado por expertos en medio ambiente,
            investigadores y voluntarios dedicados, nuestro equipo trabaja
            incansablemente para generar conciencia y promover soluciones
            sostenibles. Cada miembro de Ecovanguardia aporta su conocimiento y
            experiencia para crear un impacto positivo y duradero en nuestro
            planeta.
          </Text>
        </group>

        <group position={[-5.8, 4.15, -1]}>
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
            intensity={0.1} // Intensidad de la luz ambiental
            color="#ffffff" // Color de la luz ambiental
          />
          <HemisphereLight
            skyColor="white" // Color del cielo
            groundColor="white" // Color del suelo
            intensity={1.1} // Intensidad de la luz hemisférica
            position={[0, 10.5, 0]} // Posición de la luz en el espacio 3D
            showHelper={false} // Muestra un helper visual para la luz
          />
          <DirectionalLight //luz sobre el mar
            position={[10, 11, -7]} // Define la posición de la luz en el espacio 3D
            intensity={10} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={false} // Muestra un helper visual para la luz direccional
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
              shadowRadius: 1, // Suaviza los bordes de las sombras
            }}
          />

          <DirectionalLight //debajo del mar 3 rayos
            position={[5, 15, -8]} // Define la posición de la luz en el espacio 3D
            intensidad={10} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={false} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 4096, // Define el ancho del mapa de sombras
              shadowMapHeight: 4096, // Define la altura del mapa de sombras
              shadowCameraNear: 0.01, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 50000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -3000, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 3000, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 5000, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -5000, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.00001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 1, // Suaviza los bordes de las sombras
            }}
          />
          <PointLight
            position={[2.5, 1.95, 2.3]} // sobre el mar rayos
            intensity={3.8} // Intensidad de la luz
            color="#bfd9ec" // Color de la luz
            distance={5} // Distancia máxima de la luz
            decay={1} // Decaimiento de la luz con la distancia
            showHelper={false} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />

          <PointLight //peces del medio
            position={[0, 2.1, 0]} // sobre el mar rayos
            intensity={3.8} // Intensidad de la luz
            color="white" // Color de la luz
            distance={4.8} // Distancia máxima de la luz
            decay={1} // Decaimiento de la luz con la distancia
            showHelper={false} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />
          <PointLight //point light sobre el mar centrado
            position={[0, 12.0, -5]} // Posición de la luz en el espacio 3D
            intensity={100} // Intensidad de la luz
            color="white" // Color de la luz
            distance={100000} // Distancia máxima de la luz
            decay={1.5} // Decaimiento de la luz con la distancia
            showHelper={false} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />

          <PointLight //luz sobre titulo debajo del mar
            position={[0, 5.49, -1.0]} // Posición de la luz en el espacio 3D
            intensity={30} // Intensidad de la luz
            color="white" // Color de la luz
            distance={10} // Distancia máxima de la luz
            decay={2} // Decaimiento de la luz con la distancia
            showHelper={false} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />

          <PointLight //debajo sobre del mar izquierda
            position={[10, 9, -6]} // Posición de la luz en el espacio 3D
            intensity={100} // Intensidad de la luz
            color="white" // Color de la luz
            distance={1000} // Distancia máxima de la luz
            decay={0} // Decaimiento de la luz con la distancia
            showHelper={false} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            helperSize={0.5} // Tamaño del helper
          />

          <Physics>
            <DeepOcean
              position={[0, 0.05, 0]}
              receiveShadow
              animationName=""
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
              scale={[1.01, 1.01, 1.01]} // Ajustar la escala
            />
            <Fishlowpoly
              position={[-4, 0.05, 2]}
              castShadow
              receiveShadow
              animationName=""
              showAnimationsList={false}
              activateAllAnimations={true}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.501, 1.501, 1.501]} // Ajustar la escala
            />
            <Calamar
              position={[-4, 0, 2]}
              castShadow
              receiveShadow
              animationName=""
              showAnimationsList={false}
              activateAllAnimations={true}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.001, 0.001, 0.001]} // Ajustar la escala
            />
            <Tiburon
              position={[0, 3, -4]}
              castShadow
              receiveShadow
              animationName=""
              showAnimationsList={false}
              activateAllAnimations={true}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.001, 1.001, 1.001]} // Ajustar la escala
            />
            <Letrero
              position={[0, 0, 4]}
              castShadow
              receiveShadow
              animationName=""
              showAnimationsList={false}
              activateAllAnimations={true}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.0001, 0.0001, 0.0001]} // Ajustar la escala
            />
          </Physics>

          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[-0.3, 4.2, 8.8]}
            fov={75}
          />

          <SoundComponent
            url="./audios/underwater-loop.mp3"
            position={[0, 0, 0]}
            maxDistance={50}
            refDistance={1}
            rolloffFactor={50}
            volume={0.25} //ajuste volumenen
            showHelper={false} // Muestra un helper visual para el sonido
            helperScale={[5, 5, 5]} // Escala del helper visual
          />
          {/* <axesHelper args={[200]} /> */}
          {/* <LogCameraPosition cameraRef={cameraRef} />  */}
        </Suspense>
        <OrbitControls
          enableZoom
          minPolarAngle={Math.PI / 6} // Limita el ángulo mínimo para evitar que la cámara pase por debajo del suelo
          maxPolarAngle={Math.PI / 2.1} // Limita el ángulo máximo para evitar que la cámara pase por encima
          enableRotate={true} // Habilita la rotación con el botón izquierdo del ratón
          enablePan={false} // Habilita el desplazamiento con el botón derecho del ratón
        />
        <PostProcessing
          effects={{
            bloom: {
              intensity: 1.5,
              luminanceThreshold: 0.3,
              luminanceSmoothing: 0.9,
              height: 300,
            },
            chromaticAberration: { offset: [0.001, 0.001] },
            vignette: { offset: 0.1, darkness: 0.5 },
            brightnessContrast: { brightness: 0.1, contrast: 0.1 },
            colorAverage: { color: "#23566e" },
            dotScreen: { angle: Math.PI * 0.25, scale: 1.0 },
            glitch: { active: true, duration: 1.0, strength: 0.5 },
            grid: { scale: 1.0, lineWidth: 0.1 },
            noise: { intensity: 0.1 },
            hueSaturation: { hue: 0.1, saturation: 0.1 },
            pixelation: { granularity: 8.0 },
            scanline: { density: 1.25 },
            sepia: { intensity: 0.95 },
            smaa: { dfs: 0, kernelSize: 1, output: 1 },
            toneMapping: {
              adaptive: true,
              resolution: 256,
              middleGrey: 0.6,
              maxLuminance: 16.0,
              averageLuminance: 1.0,
              adaptationRate: 1.0,
            },
          }}
        />
      </Canvas>

      <Loader
        containerStyles={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          width: "100%",
          height: "100%",
        }} // Estilos para el contenedor del loader
        innerStyles={{ width: "300px", height: "10px" }} // Estilos para el contenedor interno del loader
        barStyles={{
          backgroundColor: "#63c548",
          height: "10px",
          borderRadius: 5,
        }} // Estilos para la barra de progreso
        dataStyles={{ color: "#63c548", fontSize: "26px" }} // Estilos para el texto de datos
        dataInterpolation={(p) => `Cargando ${p.toFixed(0)}%`} // Función para interpolar los datos de carga
        initialState={(active) => active} // Estado inicial del loader
      />
    </div>
  );
};

export default Lobby;
