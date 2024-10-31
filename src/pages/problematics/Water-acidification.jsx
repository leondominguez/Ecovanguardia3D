import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { BoxGeometry, PlaneGeometry } from 'three';
import IsleDelfino from '../../components/models-3d-component/isle-delfino/Isle-defino'; // Importa el modelo de acidificación del agua
import WebGLSettings from '../../components/performance/WebGLSettings'; // Importa el nuevo componente
import Camera1 from '../../components/cameras/camera1';

// Extiende las geometrías necesarias
extend({ BoxGeometry, PlaneGeometry });

const WaterAcidification = () => {
  const camera1Ref = useRef();

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <PerspectiveCamera
        makeDefault
        position={[2.7, 7.7, 49]} // Ajusta la posición de la cámara según necesites
        fov={0} // Ajusta el campo de visión de la cámara
      />
      <WebGLSettings pixelRatio={window.devicePixelRatio} powerPreference="high-performance" antialias={false} />
      <Suspense fallback={null}>
        <directionalLight position={[10, 10, -5]} intensity={0.01} />
        <pointLight position={[0, 0, 0]} intensity={1} />
        <Camera1 ref={camera1Ref} />
        <axesHelper args={[20]} />
        <OrbitControls enableZoom={true} /> {/* Permite rotar y hacer zoom */}
        <ambientLight intensity={0.01} position={[0, 0, 0]} />
        <Physics>
          <Plane />
          <Box />
          <IsleDelfino scale={[0.001, 0.001, 0.001]} position={[10, 0, -50]} /> {/* Ajusta el tamaño del modelo si es necesario */}
        </Physics>
      </Suspense>
      <LogCameraPosition />
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

const LogCameraPosition = () => {
  useFrame(({ camera }) => {
    console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
  });
  return null;
};

export default WaterAcidification;