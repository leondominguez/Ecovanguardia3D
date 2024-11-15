import React, { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CameraHelper, DirectionalLight } from 'three';

const CameraDebuger = React.forwardRef((props, ref) => {
  const cameraRef = useRef();
  const helperRef = useRef();
  const lightRef = useRef();

  // Use useFrame to log the camera position in each frame
  useFrame(() => {
    if (cameraRef.current) {
      console.log('Camera position:', cameraRef.current.position);
      if (helperRef.current) {
        helperRef.current.update();
      }
      if (lightRef.current) {
        lightRef.current.position.copy(cameraRef.current.position);
        lightRef.current.target.position.set(0, 0, 0); // Adjust target as needed
        lightRef.current.target.updateMatrixWorld();
      }
    }
  });

  React.useImperativeHandle(ref, () => ({
    camera: cameraRef.current,
    light: lightRef.current,
    
  }));

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[1.6, 12, -146]} // Ajusta la posición inicial de la cámara para alejar o acercar el zoom del modelo. importante para saber si se estan viendo.
        {...props}
      />
      {cameraRef.current && <primitive object={new CameraHelper(cameraRef.current)} ref={helperRef} />}
      <directionalLight ref={lightRef} intensity={4} />
    </>
  );
});

export default CameraDebuger;