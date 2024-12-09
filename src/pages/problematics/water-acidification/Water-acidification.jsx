import React, { useRef, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Loader } from "@react-three/drei";
import IsleDelfino from "../../../components/models-3d-component/isle-delfino/Isle-defino"; // Importa el modelo de acidificación del agua
import StagginLoader from "../../../components/staggings/StagginLoader"; // Importa el nuevo componente
import KeyboardControl from "../../../components/config/controls/motion-controls/KeyBoardControl"; // Importa el nuevo componente
import DirectionalLight from "../../../components/lights/DirectionalLight";
import WebGLSettings from "../../../components/performance/SetPixelRatio";
import { Physics } from "@react-three/rapier";
import Text3D from "../../../components/text3d/Text3D";
import Clouds from "../../../components/models-3d-component/clouds/Clouds";
import HtmlTextDrei from "../../../components/html-3d-drei/TextHtmlDrei";
import WaterCharacter from "../../../components/models-3d-component/water-character/WaterCharacter";
import ChatComponent from "../../../components/chat-ia/ChatComponent";
import LogCameraPosition from "../../../components/Debug/LogCameraPosition";
import MovementInstructions from "../../../components/config/controls/motion-controls/MovementInstructions";
import SoundComponent from "../../../components/sounds/SoundComponent"; 

const content = (
  <div>
    <p style={{ textAlign: "left" }}>
      La acidificación de los océanos es el proceso por el cual los océanos se
      vuelven más ácidos debido al aumento de dióxido de carbono (CO₂) en la
      atmósfera.
      
    </p>


    <div style={{ textAlign: "left" }}>
      <h3>El Sabio:</h3>
      <p>
      Acercate a la isla y busca las localizaciones para aprender más sobre este tema.
      si logras encontrar al gran sabio de la isla, el te enseñara mas sobre este tema.
      </p>
    </div>
  
    
  </div>
);

const WaterAcidification = () => {
  const cameraRef = useRef();
  const [keyboardEnabled, setKeyboardEnabled] = useState(true);

  const handleChatVisibilityChange = (visible) => {
    setKeyboardEnabled(!visible);
  };


  return (
    <>
      <Canvas shadows style={{ width: "100%", height: "100%" }}>
        <WebGLSettings
          pixelRatio={window.devicePixelRatio}
          powerPreference="high-performance"
          antialias={true}
        />
        /// zona de textos
        <Text3D
          className="text3d"
          text="Islas Delfin"
          position={[62, 58, 8]}
          frontColor={"#fff747"} // Color del frente
          sideColor={"#ff8f47"} // Color del resto
          size={6}
          depth={0.5}
          fontPath="/fonts/oceans_world/Oceans_World_Regular.json" // Ruta de la fuente
        />
        <HtmlTextDrei //texto de bienvenida
          position={[74.8, -8.45, 82.5]}
          distanceFactor={5}
          title="Isla Delfin"
          content={
            <p style={{ fontSize: "14px", fontWeight: "normal" }}>
              <h3>Bienvenido!</h3> has llegado a la isla Delfin, los lugareños
              le dicen DolphinTerra, En la isla se encuentra el equipo de
              EcoVanguardia. que te enseñara sobre la acidificación de los
              océanos. Ve y da una vuelta por los alrededores y descubre los
              secretos de la isla. y las cosas que ecovanguardia quiere
              enseñarte.
            </p>
          }
        />
        <HtmlTextDrei //texto de causas
          position={[7, -6.45, 44]}
          distanceFactor={10}
          title="Causas"
          content={
            <p>
              {" "}
              Una de las principales problematicas que causa la acidificacion de
              los oceanos es, la quema de combustibles fósiles y la
              deforestación que aumentan los niveles de CO₂, que es absorbido
              por los océanos. y fijate aqui hay un ejemplo medios de transporte
              que queman combustibles.a
            </p>
          }
        />
        <HtmlTextDrei //problemas
          position={[28.5, 11.8, -7]}
          distanceFactor={10}
          title="Problemas"
          content={
            <p>
              {" "}
              Esto afecta la vida marina, debilitando corales y moluscos, y
              alterando las cadenas alimenticias.
            </p>
          }
        />{" "}
        <HtmlTextDrei //soluciones
          position={[-8.2, 22, -67.8]}
          distanceFactor={10}
          title="Soluciones"
          content={
            <p>
              {" "}
              Reducir las emisiones de CO₂, proteger ecosistemas marinos y
              fomentar el uso de energías renovables. Un reto crucial para
              nuestro planeta. 🌍
            </p>
          }
        />
        <HtmlTextDrei //encuentra al sabio
          position={[74.7, -10, 8.7]}
          distanceFactor={10}
          title="Causas"
          content={
            <p>
              {" "}
              Aveces queremos saber mas cosas y aprender de los sabios, si
              quieres saber mas sobre la acidificacion de los oceanos, ve y
              busca al sabio de la isla, el te enseñara mas sobre este tema.
            </p>
          }
        />
        <ChatComponent
          position={[75, 51.4, 8.7]}
          distanceFactor={5}
          onVisibilityChange={handleChatVisibilityChange}
        />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <DirectionalLight
            position={[150, 80, -100]} // Define la posición de la luz en el espacio 3D
            intensity={1.5} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={false} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 6000, // Define el ancho del mapa de sombras
              shadowMapHeight: 0, // Define la altura del mapa de sombras
              shadowCameraNear: 1.0, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 5000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -285, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 300, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 110, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -110, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.0001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 100, // Suaviza los bordes de las sombras
            }}
          />
          <DirectionalLight
            position={[200, 80, -140]} // Define la posición de la luz en el espacio 3D
            intensidad={1.5} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={false} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 6000, // Define el ancho del mapa de sombras
              shadowMapHeight: 0, // Define la altura del mapa de sombras
              shadowCameraNear: 1.0, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 5000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -285, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 300, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 110, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -110, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.0001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 100, // Suaviza los bordes de las sombras
            }}
          />
          <DirectionalLight
            position={[90, 150, 80]} // Define la posición de la luz en el espacio 3D
            intensidad={1} // Define la intensidad de la luz
            color="white" // Define el color de la luz
            castShadow={false} // Habilita la capacidad de la luz para proyectar sombras
            showHelper={false} // Muestra un helper visual para la luz direccional
            shadowProps={{
              shadowMapWidth: 6000, // Define el ancho del mapa de sombras
              shadowMapHeight: 0, // Define la altura del mapa de sombras
              shadowCameraNear: 1.0, // Define la distancia mínima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraFar: 5000, // Define la distancia máxima desde la cámara de sombras en la que se renderizan las sombras
              shadowCameraLeft: -285, // Define el límite izquierdo de la cámara de sombras
              shadowCameraRight: 300, // Define el límite derecho de la cámara de sombras
              shadowCameraTop: 110, // Define el límite superior de la cámara de sombras
              shadowCameraBottom: -110, // Define el límite inferior de la cámara de sombras
              shadowBias: -0.001, // Ajusta el sesgo de las sombras para evitar artefactos de auto-sombreado
              shadowRadius: 100, // Suaviza los bordes de las sombras
            }}
          />
          <Physics>
            <IsleDelfino
              castShadow
              receiveShadow
              scale={[0.001, 0.001, 0.001]}
              position={[0, 0, 0]}
            />

            <WaterCharacter position={[74.8, -9.45, 83.5]} scale={[1, 1, 1]} />
          </Physics>
          <Clouds
            seed={2} // Semilla para la generación aleatoria de la nube, asegura que la misma nube aparezca cada vez.
            scale={4} // Escala general de los segmentos de la nube, haciendo que la nube parezca más grande o más pequeña.
            volume={5} // Grosor o volumen de los segmentos de la nube, creando una apariencia más densa.
            color="white" // Color de la nube, se establece en "hotpink" en lugar del blanco por defecto.
            fade={90} // Distancia desde la cámara hasta que los segmentos de la nube comienzan a desvanecerse, creando un efecto de desaparición gradual.
            segments={700} // Número de segmentos o partículas que componen la nube. Un número más alto crea más detalle.
            bounds={[20, 8, 8]} // Define los límites 3D o el área dentro de la cual se distribuyen los segmentos de la nube.
            position={[50, 30, 10]} // Posición de la nube en el espacio 3D, relativa al origen de la escena.
            opacity={0.5} // Nivel de transparencia de la nube, haciéndola semitransparente con un valor de 0.5.
            growth={4} // Factor de crecimiento que anima el tamaño de la nube. Afecta cuánto "crece" la nube con el tiempo.
            speed={0.4} // Velocidad de animación de la nube, afectando qué tan rápido se mueven o evolucionan los segmentos.
            concentrate="inside" // Arreglo del volumen de la nube, donde los segmentos están más concentrados dentro de los límites.
          />
          <StagginLoader
            receiveShadow={true}
            shadowBias={0.01}
            shadowResolution={2048}
            shadowAttenuation={0.5}
            height={20}
            width={20}
            scale={0.1}
            environmentPath="/scenes/sky-blue-sun/cubemap/" // se le debe pasar un path a un cubemap
            background={true}
          />
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[80, 5, 110]}
            fov={75}
          />
          <KeyboardControl
            colliders
            cameraRef={cameraRef}
            movementSpeed={0.2}
            enabled={keyboardEnabled}
          />
        
          <SoundComponent
            url="./audios/village-at-morning-78119.mp3"
            position={[75, -8, 74]}
            maxDistance={107}
            refDistance={1}
            rolloffFactor={20}
            volume={100} //ajuste volumene
            showHelper={false} // Muestra un helper visual para el sonido
            helperScale={[10, 10, 10]} // Escala del helper visual
          />
          <SoundComponent
            url="./audios/001467_mud-volcanos-53411.mp3"
            position={[75, -10, 6.6]}
            maxDistance={78}
            refDistance={10}
            rolloffFactor={6}
            volume={30} //ajuste volumenen
            showHelper={false} // Muestra un helper visual para el sonido
            helperScale={[5, 5, 5]} // Escala del helper visual
          />
          <SoundComponent
            url="./audios/MUS_100_Incarnates_WrathOfRazsageth_Hero.mp3"
            position={[75.5, 51.6, 9.0]}
            maxDistance={92.3}
            refDistance={20}
            rolloffFactor={50}
            volume={80} //ajuste volumenen
            showHelper={false} // Muestra un helper visual para el sonido
            helperScale={[5, 5, 5]} // Escala del helper visual
          />
            {/* <LogCameraPosition cameraRef={cameraRef} /> //para ver la posicion de la camara */}
          {/* <axesHelper args={[2000]} /> */}
        </Suspense>
      </Canvas>
      <MovementInstructions />
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
    </>
  );
};

export default WaterAcidification;
export { content as waterAcidificationContent };
