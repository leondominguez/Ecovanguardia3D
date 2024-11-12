// Water-acidification.jsx
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { BoxGeometry, PlaneGeometry } from 'three';
import IsleDelfino from '../../components/models-3d-component/isle-delfino/Isle-defino'; // Importa el modelo de acidificación del agua
import WebGLSettings from '../../components/performance/WebGLSettings'; // Importa el nuevo componente
import CameraDebuger from '../../components/Debug/CameraDebuger';
import SkyBlueSun from '../../components/staggings/sky-blue-sun/SkyBlueSun'; // Importa el nuevo componente


// Extiende las geometrías necesarias
extend({ BoxGeometry, PlaneGeometry });

const content = (
  <div>
  <p style={{ textAlign: 'left' }}>
    La acidificación de los océanos es el proceso por el cual los océanos se vuelven más ácidos debido al aumento de dióxido de carbono (CO₂) en la atmósfera.
  </p>
  <p style={{ textAlign: 'left' }}>
    <h3>Causas:</h3>
    La quema de combustibles fósiles y la deforestación aumentan los niveles de CO₂, que es absorbido por los océanos.
  </p>
  <p style={{ textAlign: 'left' }}>
    <h3>Problemas:</h3>
    Esto afecta la vida marina, debilitando corales y moluscos, y alterando las cadenas alimenticias.
  </p>
  <p style={{ textAlign: 'left' }}>
    <h3>Soluciones:</h3>
    Reducir las emisiones de CO₂, proteger ecosistemas marinos y fomentar el uso de energías renovables. Un reto crucial para nuestro planeta. 🌍
  </p>
</div>
);

const WaterAcidification = () => {
  const CameraDebugerRef = useRef();

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      {/* <PerspectiveCamera
        makeDefault
        position={[2.7, 7.7, 49]} // Ajusta la posición de la cámara según necesites
        fov={75} // Ajusta el campo de visión de la cámara
      /> */}
      <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={false} />
      <Suspense fallback={null}>
      <SkyBlueSun
              receiveShadow={false}
              shadowBias={0.001}
              shadowResolution={1024}
              shadowAttenuation={0.5}
              height={20}
              width={20}
              scale={0.1}
            />
        {/* <directionalLight position={[10, 10, -5]} intensity={0.01} /> */}
        <axesHelper args={[2000]} />
        {/* <OrbitControls enableZoom={true} /> */}

        <OrbitControls
  
      />
        <ambientLight intensity={0.01} position={[0, 0, 0]} />
        {/* <Physics>
          <Plane />
          <Box />
          
        </Physics> */}
        <IsleDelfino scale={[0.001, 0.001, 0.001]} position={[0, 0, 0]} /> {/* Ajusta el tamaño del modelo si es necesario */}
      </Suspense>
      
    </Canvas>
  );
};

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

const Box = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

// const LogCameraPosition = () => {
//   useFrame(({ camera }) => {
//     // console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
//   });
//   return null;
// };

export default WaterAcidification;
export { content as waterAcidificationContent };