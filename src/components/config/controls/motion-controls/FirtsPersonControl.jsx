// FirstPersonControl.jsx
import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { FirstPersonControls as FirstPersonControlImpl } from 'three/examples/jsm/controls/FirstPersonControls';

const FirstPersonControl = ({ movementSpeed = 1.0, lookSpeed = 0.005 }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const isRightMouseDown = useRef(false);

  useEffect(() => {
    controlsRef.current = new FirstPersonControlImpl(camera, gl.domElement);
    controlsRef.current.movementSpeed = movementSpeed;
    controlsRef.current.lookSpeed = lookSpeed;

    const handleMouseDown = (event) => {
      if (event.button === 2) { // Right mouse button
        isRightMouseDown.current = true;
      }
    };

    const handleMouseUp = (event) => {
      if (event.button === 2) { // Right mouse button
        isRightMouseDown.current = false;
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      controlsRef.current.dispose();
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [camera, gl, movementSpeed, lookSpeed]);

  useFrame((_, delta) => {
    if (isRightMouseDown.current) {
      controlsRef.current.update(delta);
    }
  });

  return null;
};

export default FirstPersonControl;