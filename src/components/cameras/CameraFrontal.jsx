import React, { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CameraHelper } from 'three';

const CameraFrontal = React.forwardRef(({ position = [0, 0, 10], rotation = [0, 0, 0], fov = 75, showHelper = false, ...props }, ref) => {
  const cameraRef = useRef();
  const helperRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.rotation.set(...rotation);
      if (helperRef.current) {
        helperRef.current.update();
      }
    }
  });

  React.useImperativeHandle(ref, () => ({
    camera: cameraRef.current,
  }));

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={position}
        fov={fov}
        {...props}
      />
      {showHelper && cameraRef.current && <primitive object={new CameraHelper(cameraRef.current)} ref={helperRef} />}
    </>
  );
});

export default CameraFrontal;